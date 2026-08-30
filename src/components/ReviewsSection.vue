<script setup>
import SliderComponent from './SliderComponent.vue';
import review1 from '@/assets/reviews/review1.webp';
import review2 from '@/assets/reviews/review2.webp';
import review3 from '@/assets/reviews/review3.webp';
import review4 from '@/assets/reviews/review-01.webp';
import review5 from '@/assets/reviews/review-02.webp';
import review6 from '@/assets/reviews/review-03.webp';
import review7 from '@/assets/reviews/review-04.webp';
import review8 from '@/assets/reviews/review-06.webp';

/*
  Размеры указаны явно: скриншоты разной высоты, и без width/height
  ленивая картинка до загрузки занимает 0px — высота слайдера прыгала бы при листании.
*/
const slides = [
  { src: review1, width: 508, height: 169 },
  { src: review2, width: 508, height: 262 },
  { src: review3, width: 508, height: 324 },
  { src: review4, width: 510, height: 146 },
  { src: review5, width: 510, height: 97 },
  { src: review6, width: 482, height: 69 },
  { src: review7, width: 390, height: 68 },
  { src: review8, width: 524, height: 176 },
];
</script>

<template>
  <section class="reviews-section">
    <div class="reviews-container">
      <h2 class="reviews-title" v-animate>Отзывы</h2>
      <p class="reviews-subtitle" v-animate="{ delay: 100 }">
        Что говорят мои ученики
      </p>

      <div class="reviews-slider-wrapper" v-animate="{ delay: 200 }">
        <SliderComponent v-slot="{ slide, index }" :slides="slides" label="Отзывы учеников">
          <div class="reviews-slide">
            <img
              class="reviews-slide__image"
              :src="slide.src"
              :alt="`Отзыв ${index + 1}`"
              :width="slide.width"
              :height="slide.height"
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
  /* хватает, чтобы самый широкий скриншот (524px) поместился между стрелками без масштабирования */
  max-width: 700px;
  margin: 0 auto;
}

/* ============================================
   СТИЛИ СЛАЙДОВ
   ============================================ */

/*
  Скриншоты переписки разной высоты. Слайды — flex-элементы одного трека,
  поэтому высота трека равна самому высокому отзыву и не скачет при листании,
  а короткие отзывы просто центрируются внутри своей ячейки.
*/
.reviews-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(0.5rem, 2vw, 1rem);
}

/*
  Ширина по натуральному размеру: скриншоты 390–524px, растягивать их
  на всю ширину слайдера значит замылить текст.
*/
.reviews-slide__image {
  width: auto;
  height: auto;
  max-width: 100%;
  display: block;
  filter: drop-shadow(0 8px 20px rgba(62, 39, 35, 0.12));
}

/* Адаптивность */
@media (max-width: 768px) {
  .reviews-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }
}

@media (min-width: 1440px) {
  .reviews-section {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
