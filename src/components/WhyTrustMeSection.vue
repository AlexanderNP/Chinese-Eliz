<script setup>
</script>

<template>
  <section class="trust-section">
    <div class="trust-container">
      <h2 class="trust-title" v-animate>Почему мне доверяют?</h2>
      
      <div class="trust-grid">
        <div class="trust-card" v-animate="{ type: 'fade-up', delay: 100 }">
          <div class="trust-card-icon">📚</div>
          <h3 class="trust-card-title">Опыт</h3>
          <p class="trust-card-text">
            Преподаю китайский более 4 лет
          </p>
        </div>

        <div class="trust-card" v-animate="{ type: 'fade-up', delay: 200 }">
          <div class="trust-card-icon">🇨🇳</div>
          <h3 class="trust-card-title">Жила в Китае</h3>
          <p class="trust-card-text">
            Жила в Пекине, знаю всю «внутрянку» культуры и языка
          </p>
        </div>

        <div class="trust-card" v-animate="{ type: 'fade-up', delay: 300 }">
          <div class="trust-card-icon">🎓</div>
          <h3 class="trust-card-title">Образование</h3>
          <p class="trust-card-text">
            Педагогическое образование по китайскому языку, учусь в магистратуре
          </p>
        </div>

        <div class="trust-card" v-animate="{ type: 'fade-up', delay: 400 }">
          <div class="trust-card-icon">💬</div>
          <h3 class="trust-card-title">Развитие</h3>
          <p class="trust-card-text">
            Еженедельно общаюсь с носителями, повышаю уровень знаний
          </p>
        </div>

        <div class="trust-card trust-card--featured" v-animate="{ type: 'fade-up', delay: 500 }">
          <div class="trust-card-icon">💻</div>
          <h3 class="trust-card-title">Комфорт</h3>
          <p class="trust-card-text">
            Работаю в формате online, не заставляю включать камеру, разрешаю переносить уроки
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-section {
  background: linear-gradient(180deg, rgba(244, 201, 214, 0.1) 0%, transparent 100%);
}

.trust-container {
  max-width: 1200px;
  margin: 0 auto;
}

.trust-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.trust-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--color-espresso) 50%, transparent 100%);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.trust-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: clamp(1rem, 2vw, 1.5rem);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: clamp(1rem, 2vw, 1.5rem);
  border: 1px solid rgba(62, 39, 35, 0.1);
  transition: all 0.3s ease;
}

.trust-card:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: translateY(-5px);
  box-shadow: 0 clamp(1rem, 2vw, 2rem) clamp(2rem, 4vw, 4rem) rgba(62, 39, 35, 0.1);
}

.trust-card--featured {
  background: linear-gradient(135deg, var(--color-peony) 0%, rgba(244, 201, 214, 0.7) 100%);
  border: 1px solid rgba(62, 39, 35, 0.2);
}

.trust-card--featured:hover {
  background: linear-gradient(135deg, rgba(244, 201, 214, 0.9) 0%, rgba(244, 201, 214, 0.6) 100%);
}

.trust-card-icon {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1;
}

.trust-card-title {
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: 600;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.trust-card-text {
  font-size: clamp(1.1rem, 1.5vw, 1.4rem);
  font-weight: 400;
  color: var(--color-espresso);
  line-height: 1.6;
  max-width: 40ch;
}

/* Планшет: 768px - 1024px */
@media (max-width: 1024px) {
  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Мобильные: до 768px */
@media (max-width: 768px) {
  .trust-section {
    padding-top: clamp(1rem, 3vw, 2rem);
  }

  .trust-grid {
    grid-template-columns: 1fr;
    gap: clamp(1rem, 2vw, 2rem);
  }

  .trust-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }
}

/* Маленькие мобильные: до 480px */
@media (max-width: 480px) {
  .trust-card {
    padding: clamp(1rem, 2vw, 1.5rem);
  }

  .trust-card-icon {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .trust-card-text {
    font-size: clamp(1rem, 1.4vw, 1.2rem);
  }
}

/* Большие экраны: от 1440px */
@media (min-width: 1440px) {
  .trust-section {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>