<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: 'Слайдер',
  },
});

/** Пауза без событий прокрутки, после которой считаем, что пользователь долистал. */
const SETTLE_DELAY = 150;

const viewportRef = ref(null);
const trackRef = ref(null);

/** Позиция внутри трека — с учётом клонов, а не индекс слайда. */
const position = ref(0);

const isLooped = computed(() => props.slides.length > 1);

/*
  Бесконечная прокрутка: по краям трека лежат клоны последнего и первого слайда.
  Когда прокрутка останавливается на клоне, мгновенно переставляем scrollLeft
  на его оригинал — подмена не видна, потому что под курсором та же картинка.
*/
const trackSlides = computed(() => {
  const items = props.slides.map((slide, index) => ({ slide, index, key: `slide-${index}` }));
  if (!isLooped.value) {
    return items;
  }

  const lastIndex = props.slides.length - 1;

  return [
    { slide: props.slides[lastIndex], index: lastIndex, key: 'clone-last' },
    ...items,
    { slide: props.slides[0], index: 0, key: 'clone-first' },
  ];
});

const firstPosition = computed(() => (isLooped.value ? 1 : 0));
const lastPosition = computed(() => firstPosition.value + props.slides.length - 1);

const currentIndex = computed(() => trackSlides.value[position.value]?.index ?? 0);

let scrollFrameId = null;
let settleTimerId = null;
let resizeObserver = null;

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getSlideElements = () => (trackRef.value ? Array.from(trackRef.value.children) : []);

const getMaxScroll = () => {
  const viewport = viewportRef.value;
  return viewport ? Math.max(0, viewport.scrollWidth - viewport.clientWidth) : 0;
};

/**
 * Геометрия слайда в системе координат прокрутки вьюпорта.
 * Считаем по реальным рамкам элементов, а не по clientWidth вьюпорта:
 * между слайдами есть gap, а у трека — вертикальный padding.
 */
const measureSlide = (element) => {
  const viewport = viewportRef.value;
  const viewportLeft = viewport.getBoundingClientRect().left;
  const rect = element.getBoundingClientRect();
  const start = viewport.scrollLeft + (rect.left - viewportLeft);

  return { start, width: rect.width, center: start + rect.width / 2 };
};

/** Позиция слайда, центр которого ближе всего к центру вьюпорта. */
const resolvePosition = () => {
  const viewport = viewportRef.value;
  const elements = getSlideElements();
  if (!viewport || elements.length === 0) {
    return 0;
  }

  // В крайних позициях слайд физически не может встать по центру,
  // поэтому края трактуем однозначно — иначе крайние точки никогда не активируются.
  const maxScroll = getMaxScroll();
  if (viewport.scrollLeft <= 1) {
    return 0;
  }
  if (viewport.scrollLeft >= maxScroll - 1) {
    return elements.length - 1;
  }

  const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
  let closestPosition = 0;
  let closestDistance = Infinity;

  elements.forEach((element, index) => {
    const distance = Math.abs(measureSlide(element).center - viewportCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestPosition = index;
    }
  });

  return closestPosition;
};

const scrollToPosition = (index, behavior = 'auto') => {
  const viewport = viewportRef.value;
  const element = getSlideElements()[index];
  if (!viewport || !element) {
    return;
  }

  const { start, width } = measureSlide(element);
  const target = start - (viewport.clientWidth - width) / 2;

  position.value = index;
  viewport.scrollTo({
    left: Math.max(0, Math.min(target, getMaxScroll())),
    behavior,
  });
};

const smoothBehavior = () => (prefersReducedMotion() ? 'auto' : 'smooth');

/** Уводит прокрутку с клона на его оригинал без анимации. Возвращает актуальную позицию. */
const teleportFromClone = () => {
  if (!isLooped.value) {
    return position.value;
  }

  if (position.value === 0) {
    scrollToPosition(lastPosition.value);
    return lastPosition.value;
  }

  if (position.value === trackSlides.value.length - 1) {
    scrollToPosition(firstPosition.value);
    return firstPosition.value;
  }

  return position.value;
};

const step = (delta) => {
  if (!isLooped.value) {
    return;
  }
  // С клонов уходим заранее, иначе следующий шаг вышел бы за границы трека.
  scrollToPosition(teleportFromClone() + delta, smoothBehavior());
};

const goToPrevious = () => step(-1);
const goToNext = () => step(1);

const goToSlide = (index) => {
  teleportFromClone();
  scrollToPosition(firstPosition.value + index, smoothBehavior());
};

const handleScroll = () => {
  clearTimeout(settleTimerId);
  settleTimerId = setTimeout(teleportFromClone, SETTLE_DELAY);

  if (scrollFrameId !== null) {
    return;
  }
  scrollFrameId = requestAnimationFrame(() => {
    scrollFrameId = null;
    position.value = resolvePosition();
  });
};

const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    goToPrevious();
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    goToNext();
  }
};

const reset = () => {
  scrollToPosition(firstPosition.value);
  position.value = firstPosition.value;
};

onMounted(() => {
  reset();

  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(() => {
      position.value = resolvePosition();
    });
    resizeObserver.observe(viewportRef.value);
    resizeObserver.observe(trackRef.value);
  }
});

onBeforeUnmount(() => {
  if (scrollFrameId !== null) {
    cancelAnimationFrame(scrollFrameId);
  }
  clearTimeout(settleTimerId);
  resizeObserver?.disconnect();
});

watch(
  () => props.slides,
  async () => {
    await nextTick();
    reset();
  },
);
</script>

<template>
  <div class="slider" role="group" aria-roledescription="карусель" :aria-label="label">
    <div class="slider__wrapper">
      <button
        v-if="isLooped"
        class="slider__arrow slider__arrow--previous"
        type="button"
        aria-label="Предыдущий слайд"
        @click="goToPrevious"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div
        ref="viewportRef"
        class="slider__viewport"
        tabindex="0"
        @scroll.passive="handleScroll"
        @keydown="handleKeydown"
      >
        <div ref="trackRef" class="slider__track">
          <template v-for="item in trackSlides" :key="item.key">
            <slot :slide="item.slide" :index="item.index" />
          </template>
        </div>
      </div>

      <button
        v-if="isLooped"
        class="slider__arrow slider__arrow--next"
        type="button"
        aria-label="Следующий слайд"
        @click="goToNext"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>

    <div v-if="isLooped" class="slider__dots">
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="slider__dot"
        :class="{ 'slider__dot--active': index === currentIndex }"
        type="button"
        :aria-label="`Перейти к слайду ${index + 1}`"
        :aria-current="index === currentIndex ? 'true' : undefined"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 100%;
}

.slider__wrapper {
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1.25rem);
}

.slider__viewport {
  flex: 1 1 auto;
  /* без min-width: 0 flex-элемент не даёт треку переполниться и прокрутка ломается */
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  border-radius: clamp(1rem, 2vw, 1.5rem);
}

.slider__viewport::-webkit-scrollbar {
  display: none;
}

.slider__viewport:focus-visible {
  outline: 2px solid var(--color-espresso);
  outline-offset: 4px;
}

.slider__track {
  display: flex;
  align-items: stretch;
  gap: clamp(0.75rem, 2vw, 1.5rem);
  padding-block: 0.5rem;
}

/*
  Слайды приходят через слот, поэтому размер задаём здесь и только здесь:
  ровно одна ширина вьюпорта на слайд — от этого зависит и снап, и подсветка точек.
*/
.slider__track > :deep(*) {
  flex: 0 0 100%;
  max-width: 100%;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}

.slider__arrow {
  flex: 0 0 auto;
  width: clamp(40px, 5vw, 48px);
  height: clamp(40px, 5vw, 48px);
  border-radius: 50%;
  border: 1px solid var(--color-espresso);
  background: transparent;
  color: var(--color-espresso);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.slider__arrow svg {
  width: 45%;
  height: 45%;
}

.slider__arrow:hover {
  background: var(--color-espresso);
  color: var(--color-peony);
}

.slider__arrow:active {
  transform: scale(0.92);
}

.slider__dots {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  max-width: 100%;
  margin-top: clamp(1rem, 2.5vw, 1.5rem);
}

.slider__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 1px solid var(--color-espresso);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition:
    width 0.3s ease,
    background-color 0.3s ease,
    opacity 0.3s ease;
  opacity: 0.5;
}

.slider__dot:hover {
  opacity: 1;
  background: rgba(244, 201, 214, 0.6);
}

.slider__dot--active {
  width: 26px;
  opacity: 1;
  background: var(--color-espresso);
}

/* На тач-экранах листают свайпом — стрелки только съедают ширину слайда. */
@media (max-width: 640px) {
  .slider__arrow {
    display: none;
  }
}

@media (hover: none) {
  .slider__arrow:hover {
    background: transparent;
    color: var(--color-espresso);
  }
}

@media (prefers-reduced-motion: reduce) {
  .slider__arrow,
  .slider__dot {
    transition: none;
  }
}
</style>
