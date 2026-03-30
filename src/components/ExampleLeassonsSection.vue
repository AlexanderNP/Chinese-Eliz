<script setup>
import SliderComponent from './SliderComponent.vue';
import lesson1 from '@/assets/example-leassons/leasson_1.jpg';
import lesson2 from '@/assets/example-leassons/leasson_2.jpg';
import lesson3 from '@/assets/example-leassons/leasson_3.jpg';
import lesson4 from '@/assets/example-leassons/leasson_4.jpg';
import lesson5 from '@/assets/example-leassons/leasson_5.jpg';
import lesson6 from '@/assets/example-leassons/leasson_6.jpg';

const slides = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6];
</script>

<template>
  <section class="examples-section">
    <div class="examples-container">
      <h2 class="examples-title" v-animate>Примеры уроков</h2>
      <p class="examples-subtitle" v-animate="{ delay: 100 }">
        Посмотрите, как проходят мои занятия
      </p>

      <div class="examples-slider-wrapper" v-animate="{ delay: 200 }">
        <SliderComponent :slides="slides">
          <div 
            v-for="(slide, index) in slides" 
            :key="index"
            class="examples-slide"
          >
            <img :src="slide" :alt="`Урок ${index + 1}`" class="examples-slide__image" loading="lazy">
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
  flex: 0 0 100%;
  width: 100%;
  max-width: 100%;
  scroll-snap-align: center;
  border-radius: clamp(1rem, 2vw, 1.5rem);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(62, 39, 35, 0.08);
}

.examples-slide__image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.examples-slide:hover .examples-slide__image {
  transform: scale(1.02);
}

/* Адаптивность */
@media (max-width: 768px) {
  .examples-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .examples-slider-wrapper {
    max-width: clamp(400px, 85vw, 700px);
  }
}

@media (max-width: 480px) {
  .examples-slider-wrapper {
    max-width: clamp(320px, 90vw, 500px);
  }
}

@media (min-width: 1440px) {
  .examples-section {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
