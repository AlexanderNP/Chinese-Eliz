<script setup>
</script>

<template>
  <section class="about-section">
    <div class="about-container">
      <div class="about-content" v-animate="{ type: 'fade-right', delay: 100 }">
        <h2 class="about-title">Обо мне</h2>
        <p class="about-text">
          Обожаю китайский, и всё, что с ним связано.
        </p>
        <p class="about-text">
          Китайский — это про возможности, новую культуру, другие привычки, логику в квадрате и многое другое.
        </p>
        <p class="about-text about-text--highlight">
          Мои уроки — это про комфорт, спокойный темп, результат.
        </p>
      </div>
      <div class="about-visual" v-animate="{ type: 'fade-left', delay: 300 }">
        <div class="about-circle">
          <span class="about-circle-text">汉语</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: linear-gradient(180deg, transparent 0%, rgba(244, 201, 214, 0.1) 100%);
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(3rem, 6vw, 6rem);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.about-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  display: inline-block;
}

.about-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-espresso) 0%, var(--color-peony) 100%);
}

.about-text {
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  font-weight: 400;
  color: var(--color-espresso);
  line-height: 1.8;
  max-width: 50ch;
}

.about-text--highlight {
  font-weight: 600;
  padding-left: clamp(1rem, 2vw, 1.5rem);
  border-left: 3px solid var(--color-peony);
}

.about-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-circle {
  width: clamp(230px, 42vw, 330px);
  height: clamp(230px, 42vw, 330px);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-peony) 0%, rgba(244, 201, 214, 0.5) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 
    0 clamp(1rem, 3vw, 3rem) clamp(2rem, 5vw, 5rem) rgba(62, 39, 35, 0.15),
    inset 0 -10px 20px rgba(62, 39, 35, 0.1);
  position: relative;
}

.about-circle::before {
  content: '';
  position: absolute;
  width: 85%;
  height: 85%;
  border-radius: 50%;
  border: 2px solid rgba(62, 39, 35, 0.1);
}

.about-circle-text {
  font-family: MaShanZheng, serif;
  font-size: clamp(4rem, 10vw, 8rem);
  color: var(--color-espresso);
  line-height: 1;
}

/* Планшет: 768px - 1024px */
@media (max-width: 1024px) {
  .about-container {
    gap: clamp(2rem, 5vw, 4rem);
  }

  .about-circle {
    width: clamp(180px, 35vw, 250px);
    height: clamp(180px, 35vw, 250px);
  }
}

/* Мобильные: до 768px */
@media (max-width: 768px) {
  .about-section {
    padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 4vw, 3rem);
  }

  .about-container {
    grid-template-columns: 1fr;
    gap: clamp(2rem, 5vw, 4rem);
  }

  .about-content {
    text-align: center;
    align-items: center;
  }

  .about-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  .about-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .about-text {
    max-width: 100%;
  }

  .about-text--highlight {
    border-left: none;
    border-top: 3px solid var(--color-peony);
    padding-left: 0;
    padding-top: 1rem;
  }

  .about-circle {
    width: clamp(150px, 40vw, 200px);
    height: clamp(150px, 40vw, 200px);
  }
}

/* Маленькие мобильные: до 480px */
@media (max-width: 480px) {
  .about-section {
    padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 3vw, 2rem);
  }

  .about-text {
    font-size: clamp(1.1rem, 1.6vw, 1.4rem);
  }

  .about-circle {
    width: clamp(120px, 45vw, 180px);
    height: clamp(120px, 45vw, 180px);
  }

  .about-circle-text {
    font-size: clamp(3rem, 8vw, 6rem);
  }
}

/* Большие экраны: от 1440px */
@media (min-width: 1440px) {
  .about-section {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>