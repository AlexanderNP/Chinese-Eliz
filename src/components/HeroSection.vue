<script setup>
import elizImage from '@/assets/eliz.jpg';
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-container">
        <p class="hero-text-chine" v-animate>大家好</p>
        <p class="hero-subtitle" v-animate="{ type: 'fade-up', delay: 150 }">
          Я Елизавета — твой репетитор по китайскому языку!
        </p>
        <a href="#contact" class="hero-telegram-btn" v-animate="{ type: 'fade-up', delay: 300 }">
          Связаться со мной
        </a>
      </div>
    </div>
    <div class="hero-img" v-animate="{ type: 'fade-up', delay: 450 }">
      <img class="hero-img-photo" :src="elizImage" alt="Елизавета - репетитор китайского языка">
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: clamp(3rem, 6vw, 8rem);
  min-height: 80vh;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
}

.hero-text-chine {
  font-family: MaShanZheng, serif;
  font-size: clamp(5rem, 14vw, 11rem);
  color: var(--color-espresso);
  line-height: 1.1;
  margin: 0;
  white-space: nowrap;
}

.hero-subtitle {
  font-size: clamp(1.4rem, 2vw, 2rem);
  font-weight: 400;
  color: var(--color-espresso);
  text-align: center;
  text-transform: uppercase;
  max-width: 50ch;
  line-height: 1.6;
  letter-spacing: 0.05em;
}

.hero-telegram-btn {
  display: inline-block;
  padding: clamp(1rem, 2.5vw, 1.25rem) clamp(2rem, 4vw, 2.5rem);
  background: linear-gradient(135deg, var(--color-espresso) 0%, #5D4037 100%);
  color: var(--color-peony);
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: clamp(0.75rem, 1.5vw, 1.25rem);
  transition: all 0.3s ease;
  box-shadow: 0 clamp(0.4rem, 1vw, 0.75rem) clamp(0.75rem, 1.5vw, 1.5rem) rgba(62, 39, 35, 0.25);
  letter-spacing: 0.05em;
}

.hero-telegram-btn:hover {
  background: linear-gradient(135deg, var(--color-peony) 0%, #F8DDE6 100%);
  color: var(--color-espresso);
  box-shadow: 0 clamp(0.75rem, 1.5vw, 1.25rem) clamp(1.5rem, 3vw, 3rem) rgba(62, 39, 35, 0.35);
  transform: translateY(-3px);
}

.hero-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-img-photo {
  width: 100%;
  max-width: clamp(350px, 45vw, 550px);
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: clamp(1.5rem, 4vw, 3rem);
  box-shadow: 
    20px 20px 60px rgba(62, 39, 35, 0.15),
    -10px -10px 40px rgba(255, 255, 255, 0.8);
}

/* Планшет: 768px - 1024px */
@media (max-width: 1024px) {
  .hero-section {
    grid-template-columns: 1fr 1fr;
    padding: clamp(3rem, 8vw, 6rem) clamp(2rem, 4vw, 4rem);
    min-height: auto;
  }

  .hero-text-chine {
    font-size: clamp(4rem, 12vw, 9rem);
  }

  .hero-img-photo {
    max-width: clamp(280px, 35vw, 400px);
  }
}

/* Мобильные: до 768px */
@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: clamp(2.5rem, 6vw, 5rem);
    padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem);
  }

  .hero-text-chine {
    white-space: normal;
  }

  .hero-img-photo {
    max-width: clamp(250px, 55vw, 350px);
  }

  .hero-telegram-btn {
    width: 100%;
    text-align: center;
  }
}

/* Маленькие мобильные: до 480px */
@media (max-width: 480px) {
  .hero-section {
    padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
  }

  .hero-text-chine {
    font-size: clamp(3.5rem, 15vw, 7rem);
  }

  .hero-img-photo {
    max-width: clamp(200px, 60vw, 300px);
    border-radius: clamp(1rem, 2.5vw, 2rem);
    box-shadow: 
      10px 10px 30px rgba(62, 39, 35, 0.12),
      -5px -5px 20px rgba(255, 255, 255, 0.9);
  }
}

/* Большие экраны: от 1440px */
@media (min-width: 1440px) {
  .hero-section {
    max-width: 1440px;
    margin: 0 auto;
    gap: 8rem;
  }
}
</style>
