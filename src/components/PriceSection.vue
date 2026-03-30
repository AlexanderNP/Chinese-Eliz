<script setup>
</script>

<template>
  <section class="price-types-section">
    <div class="price-types-container">
      <h2 class="price-types-title" v-animate>Виды занятий</h2>

      <div class="price-cards">
        <!-- Индивидуальное занятие -->
        <div class="price-card price-card--individual" v-animate="{ type: 'fade-up', delay: 100 }">
          <div class="price-card-shape">
            <div class="shape-circle"></div>
          </div>
          <div class="price-card-content">
            <h3 class="price-card-title">
              <span class="price-card-icon">👤</span>
              Индивидуальное занятие
            </h3>
            <ul class="price-list">
              <li class="price-item">
                <span class="price-duration">60 мин</span>
                <span class="price-value">1 800 ₽</span>
              </li>
              <li class="price-item">
                <span class="price-duration">90 мин</span>
                <span class="price-value">2 500 ₽</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Парное занятие -->
        <div class="price-card price-card--pair" v-animate="{ type: 'fade-up', delay: 250 }">
          <div class="price-card-shape">
            <div class="shape-square"></div>
          </div>
          <div class="price-card-content">
            <h3 class="price-card-title">
              <span class="price-card-icon">👥</span>
              Парное занятие
            </h3>
            <ul class="price-list">
              <li class="price-item">
                <span class="price-duration">60 мин</span>
                <span class="price-value">1 300 ₽</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA кнопка -->
      <div class="price-cta" v-animate="{ type: 'fade-up', delay: 400 }">
        <a href="#contact" class="price-cta-btn">
          Записаться на занятие
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.price-types-section {
  background-color: rgba(244, 201, 214, 0.08);
}

.price-types-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3rem, 6vw, 5rem);
}

.price-types-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  position: relative;
}

.price-types-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--color-espresso) 50%, transparent 100%);
}

/* ============================================
   КАРТОЧКИ С ЦЕНАМИ
   ============================================ */

.price-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(2rem, 4vw, 3rem);
  width: 100%;
}

.price-card {
  position: relative;
  border-radius: clamp(1.5rem, 3vw, 2rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid rgba(62, 39, 35, 0.1);
}

.price-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 clamp(1.5rem, 3vw, 3rem) clamp(2rem, 4vw, 5rem) rgba(62, 39, 35, 0.12);
}

/* Геометрические фигуры на фоне */
.price-card-shape {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

/* Индивидуальное - круги */
.price-card--individual .price-card-shape {
  background: linear-gradient(135deg, rgba(62, 39, 35, 0.03) 0%, transparent 60%);
}

.price-card--individual .shape-circle {
  position: absolute;
  top: -30%;
  right: -10%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-peony) 0%, rgba(244, 201, 214, 0.3) 100%);
  opacity: 0.5;
}

/* Парное - квадраты */
.price-card--pair .price-card-shape {
  background: linear-gradient(135deg, rgba(62, 39, 35, 0.03) 0%, transparent 60%);
}

.price-card--pair .shape-square {
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(62, 39, 35, 0.08) 0%, rgba(62, 39, 35, 0.02) 100%);
  transform: rotate(45deg);
  opacity: 0.6;
}

.price-card-content {
  position: relative;
  z-index: 1;
  padding: clamp(2rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
}

.price-card-title {
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-weight: 700;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 1rem);
  margin: 0;
  line-height: 1.3;
  flex-wrap: wrap;
}

.price-card-icon {
  font-size: clamp(1.5rem, 2vw, 2rem);
}

/* ============================================
   СПИСОК ЦЕН
   ============================================ */

.price-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
}

.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: clamp(1rem, 1.5vw, 1.5rem);
  background: rgba(255, 255, 255, 0.8);
  border-radius: clamp(0.75rem, 1.5vw, 1rem);
  border: 1px solid rgba(62, 39, 35, 0.08);
  transition: all 0.2s ease;
}

.price-item:hover {
  background: var(--color-peony);
  border-color: var(--color-espresso);
  transform: translateX(5px);
}

.price-duration {
  font-size: clamp(1.1rem, 1.5vw, 1.4rem);
  font-weight: 500;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.price-value {
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: 700;
  color: var(--color-espresso);
  letter-spacing: 0.05em;
}

/* ============================================
   CTA КНОПКА
   ============================================ */

.price-cta {
  width: 100%;
  display: flex;
  justify-content: center;
}

.price-cta-btn {
  display: inline-block;
  padding: clamp(1rem, 2.5vw, 1.25rem) clamp(2.5rem, 5vw, 3.5rem);
  background: linear-gradient(135deg, var(--color-espresso) 0%, #5D4037 100%);
  color: var(--color-peony);
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: clamp(0.75rem, 1.5vw, 1.25rem);
  transition: all 0.3s ease;
  box-shadow: 0 clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 2rem) rgba(62, 39, 35, 0.25);
}

.price-cta-btn:hover {
  background: linear-gradient(135deg, var(--color-peony) 0%, #F8DDE6 100%);
  color: var(--color-espresso);
  box-shadow: 0 clamp(0.75rem, 1.5vw, 1.5rem) clamp(1.5rem, 3vw, 3rem) rgba(62, 39, 35, 0.35);
  transform: translateY(-3px);
}

.price-cta-btn:active {
  transform: translateY(-1px);
}

/* ============================================
   АДАПТИВНОСТЬ
   ============================================ */

/* Планшет: 768px - 1024px */
@media (max-width: 1024px) {
  .price-cards {
    gap: clamp(1.5rem, 3vw, 2.5rem);
  }

  .price-card--individual .shape-circle {
    width: 150px;
    height: 150px;
  }

  .price-card--pair .shape-square {
    width: 120px;
    height: 120px;
  }
}

/* Мобильные: до 768px */
@media (max-width: 768px) {
  .price-types-container {
    gap: clamp(2rem, 5vw, 4rem);
  }

  .price-cards {
    grid-template-columns: 1fr;
    gap: clamp(1.5rem, 3vw, 2.5rem);
  }

  .price-card {
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }

  .price-types-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .price-cta-btn {
    width: 100%;
    text-align: center;
    max-width: 400px;
  }

  .price-card-title {
    font-size: clamp(1.1rem, 2.5vw, 1.6rem);
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Маленькие мобильные: до 480px */
@media (max-width: 480px) {
  .price-card-content {
    padding: clamp(1.5rem, 3vw, 2rem);
  }

  .price-item {
    padding: clamp(0.75rem, 1.5vw, 1rem);
  }

  .price-card--individual .shape-circle {
    width: 100px;
    height: 100px;
    top: -20%;
    right: -5%;
  }

  .price-card--pair .shape-square {
    width: 80px;
    height: 80px;
    bottom: -15%;
    left: -5%;
  }
}

/* Большие экраны: от 1440px */
@media (min-width: 1440px) {
  .price-types-section {
    max-width: 1440px;
    margin: 0 auto;
  }

  .price-types-container {
    max-width: 1200px;
  }
}
</style>