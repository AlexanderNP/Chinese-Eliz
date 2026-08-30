<script setup>
import SliderComponent from './SliderComponent.vue';
import lesson1 from '@/assets/example-lessons/lesson_01.webp';
import lesson2 from '@/assets/example-lessons/lesson_02.webp';
import lesson3 from '@/assets/example-lessons/lesson_03.webp';
import lesson4 from '@/assets/example-lessons/lesson_04.webp';
import lesson5 from '@/assets/example-lessons/lesson_05.webp';
import lesson6 from '@/assets/example-lessons/lesson_06.webp';
import lesson7 from '@/assets/example-lessons/lesson_07.webp';
import lesson8 from '@/assets/example-lessons/lesson_08.webp';
import lesson9 from '@/assets/example-lessons/lesson_09.webp';
import lesson10 from '@/assets/example-lessons/lesson_10.webp';
import lesson11 from '@/assets/example-lessons/lesson_11.webp';
import lesson12 from '@/assets/example-lessons/lesson_12.webp';
import lesson13 from '@/assets/example-lessons/lesson_13.webp';
import lesson14 from '@/assets/example-lessons/lesson_14.webp';

const slides = [
  lesson7,
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
];
</script>

<template>
  <section class="examples-section">
    <div class="examples-container">
      <h2 class="examples-title" v-animate>Примеры уроков</h2>
      <p class="examples-subtitle" v-animate="{ delay: 100 }">
        Посмотрите, как проходят мои занятия
      </p>

      <div class="examples-slider-wrapper" v-animate="{ delay: 200 }">
        <SliderComponent v-slot="{ slide, index }" :slides="slides" label="Примеры уроков">
          <div class="examples-slide">
            <img
              class="examples-slide__image"
              :src="slide"
              :alt="`Пример урока ${index + 1}`"
              width="1280"
              height="720"
              decoding="async"
              :loading="index === 0 ? 'eager' : 'lazy'"
            >
          </div>
        </SliderComponent>
      </div>
    </div>
  </section>
</template>

<style scoped>
.examples-section {
  background-color: rgba(244, 201, 214, 0.08);
}

.examples-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 4vw, 3rem);
}

.examples-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  position: relative;
}

.examples-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--color-espresso) 50%, transparent 100%);
}

.examples-subtitle {
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  font-weight: 400;
  color: var(--color-espresso);
  text-align: center;
  max-width: 50ch;
}

/* ============================================
   ОГРАНИЧИТЕЛЬ ДЛЯ СЛАЙДЕРА
   ============================================ */

.examples-slider-wrapper {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* ============================================
   СТИЛИ СЛАЙДОВ
   ============================================ */

.examples-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

/*
  У картинок собственная скруглённая рамка и прозрачные углы,
  поэтому никакой рамки/фона от контейнера — только мягкая тень по силуэту.
*/
.examples-slide__image {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 10px 24px rgba(62, 39, 35, 0.14));
}

/* Адаптивность */
@media (max-width: 768px) {
  .examples-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }
}

@media (min-width: 1440px) {
  .examples-section {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
