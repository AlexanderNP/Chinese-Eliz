<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const sliderRef = ref(null);
const currentIndex = ref(0);

const goToSlide = (index) => {
  currentIndex.value = index;
  if (sliderRef.value) {
    const slideWidth = sliderRef.value.clientWidth;
    sliderRef.value.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
  }
};

const goToPrevious = () => {
  const newIndex = currentIndex.value === 0 ? props.slides.length - 1 : currentIndex.value - 1;
  goToSlide(newIndex);
};

const goToNext = () => {
  const newIndex = currentIndex.value === props.slides.length - 1 ? 0 : currentIndex.value + 1;
  goToSlide(newIndex);
};

const handleScroll = () => {
  if (sliderRef.value) {
    const slideWidth = sliderRef.value.clientWidth;
    const newIndex = Math.round(sliderRef.value.scrollLeft / slideWidth);
    if (newIndex !== currentIndex.value) {
      currentIndex.value = newIndex;
    }
  }
};

watch(() => props.slides, () => {
  currentIndex.value = 0;
}, { immediate: true });
</script>

<template>
  <div class="slider-component">
    <div class="slider-component__wrapper">
      <button 
        class="slider-component__btn slider-component__btn--left" 
        @click="goToPrevious"
        type="button"
        aria-label="Предыдущий слайд"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div 
        ref="sliderRef"
        class="slider-component__container"
        @scroll="handleScroll"
      >
        <div class="slider-component__track">
          <slot />
        </div>
      </div>

      <button 
        class="slider-component__btn slider-component__btn--right" 
        @click="goToNext"
        type="button"
        aria-label="Следующий слайд"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>

    <div class="slider-component__dots">
      <button
        v-for="(_, index) in slides"
        :key="index"
        class="slider-component__dot"
        :class="{ 'slider-component__dot--active': index === currentIndex }"
        @click="goToSlide(index)"
        type="button"
        :aria-label="`Перейти к слайду ${index + 1}`"
      />
    </div>
  </div>
</template>

<style scoped>
.slider-component {
  width: 100%;
}

.slider-component__wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.slider-component__container {
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.slider-component__container::-webkit-scrollbar {
  display: none;
}

.slider-component__track {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}

.slider-component__btn {
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--color-espresso);
  background: transparent;
  color: var(--color-espresso);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
  flex-shrink: 0;
}

.slider-component__btn:hover {
  background: var(--color-espresso);
  color: var(--color-peony);
}

.slider-component__btn:active {
  transform: scale(0.9);
}

.slider-component__btn svg {
  width: 20px;
  height: 20px;
}

.slider-component__dots {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.slider-component__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--color-espresso);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.slider-component__dot:hover {
  background: rgba(244, 201, 214, 0.5);
  transform: scale(1.2);
}

.slider-component__dot--active {
  background: var(--color-espresso);
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .slider-component__wrapper {
    gap: 0.5rem;
  }

  .slider-component__btn {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
  }

  .slider-component__btn svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .slider-component__btn {
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
  }

  .slider-component__btn svg {
    width: 18px;
    height: 18px;
  }

  .slider-component__dot {
    width: 8px;
    height: 8px;
  }
}
</style>
