<script setup>
import SliderComponent from './SliderComponent.vue';
import review1 from '@/assets/reviews/review1.jpg';
import review2 from '@/assets/reviews/review2.jpg';
import review3 from '@/assets/reviews/review3.jpg';

const slides = [review1, review2, review3];
</script>

<template>
  <section class="reviews-section">
    <div class="reviews-container">
      <h2 class="reviews-title" v-animate>Отзывы</h2>
      <p class="reviews-subtitle" v-animate="{ delay: 100 }">
        Что говорят мои ученики
      </p>

      <div class="reviews-slider-wrapper" v-animate="{ delay: 200 }">
        <SliderComponent :slides="slides">
          <div 
            v-for="(slide, index) in slides" 
            :key="index"
            class="reviews-slide"
          >
            <img :src="slide" :alt="`Отзыв ${index + 1}`" class="reviews-slide__image" loading="lazy">
          </div>
        </SliderComponent>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  background-color: rgba(244, 201, 214, 0.08);
}

.reviews-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 4vw, 3rem);
}

.reviews-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  position: relative;
}

.reviews-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--color-espresso) 50%, transparent 100%);
}

.reviews-subtitle {
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  font-weight: 400;
  color: var(--color-espresso);
  text-align: center;
  max-width: 50ch;
}

/* ============================================
   ОГРАНИЧИТЕЛЬ ДЛЯ СЛАЙДЕРА
   ============================================ */

.reviews-slider-wrapper {
  width: 100%;
  max-width: clamp(400px, 60vw, 700px);
  margin: 0 auto;
}

/* ============================================
   СТИЛИ СЛАЙДОВ
   ============================================ */

.reviews-slide {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
  scroll-snap-align: center;
  border-radius: clamp(1rem, 2vw, 1.5rem);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(62, 39, 35, 0.08);
}

.reviews-slide__image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 600px;
  object-fit: contain;
  display: block;
}

/* Адаптивность */
@media (max-width: 768px) {
  .reviews-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .reviews-slider-wrapper {
    max-width: clamp(380px, 78vw, 580px);
  }

  .reviews-slide__image {
    max-height: 520px;
  }
}

@media (max-width: 480px) {
  .reviews-slider-wrapper {
    max-width: clamp(300px, 88vw, 420px);
  }

  .reviews-slide__image {
    max-height: 420px;
  }
}

@media (min-width: 1440px) {
  .reviews-section {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
