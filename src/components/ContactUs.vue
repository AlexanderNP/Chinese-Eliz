<script setup>
</script>

<template>
  <section class="contact-section" id="contact">
    <div class="contact-container">
      <h2 class="contact-title" v-animate>Связаться со мной</h2>
      <p class="contact-subtitle" v-animate="{ delay: 100 }">
        Выберите удобный способ связи
      </p>

      <div class="contact-buttons" v-animate="{ delay: 200 }">
        <a 
          href="https://t.me/zlmar" 
          class="contact-btn contact-btn--telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="contact-btn__icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.44-.42-1.38-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.89 5.17-1.9.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.27z"/>
          </svg>
          <span class="contact-btn__text">Telegram</span>
        </a>

        <a 
          href="https://max.ru/u/f9LHodD0cOJcaPmTYFTxrdhJPl6jtero9vwO4wPapiDC6MycFa0H0F6jmkI" 
          class="contact-btn contact-btn--messenger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="contact-btn__icon" viewBox="0 0 131 42" fill="currentColor">
            <path d="M21.47 41.88c-4.11 0-6.02-.6-9.34-3-2.1 2.7-8.75 4.81-9.04 1.2 0-2.71-.6-5-1.28-7.5C1 29.5.08 26.07.08 21.1.08 9.23 9.82.3 21.36.3c11.55 0 20.6 9.37 20.6 20.91a20.6 20.6 0 0 1-20.49 20.67Zm.17-31.32c-5.62-.29-10 3.6-10.97 9.7-.8 5.05.62 11.2 1.83 11.52.58.14 2.04-1.04 2.95-1.95a10.4 10.4 0 0 0 5.08 1.81 10.7 10.7 0 0 0 11.19-9.97 10.7 10.7 0 0 0-10.08-11.1Z"/>
            <path d="M60.3 32.15h-4.44v-21h7.23l4.84 14.41h.65l5.05-14.41h7.07v21h-4.45v-15.6h-.64l-5.5 15.6H66.2l-5.25-15.6h-.65v15.6ZM94.59 32.55c-1.97 0-3.73-.46-5.3-1.37a9.99 9.99 0 0 1-3.67-3.88 12.15 12.15 0 0 1-1.29-5.65c0-2.1.43-3.98 1.3-5.62a9.63 9.63 0 0 1 3.67-3.88 10.04 10.04 0 0 1 5.29-1.4c1.75 0 3.3.37 4.64 1.12 1.35.73 2.45 1.62 3.31 2.67l.97-3.4H107v21h-3.47l-.97-3.39a11.45 11.45 0 0 1-3.32 2.7 9.62 9.62 0 0 1-4.64 1.1Zm1.13-4.16c1.97 0 3.55-.62 4.77-1.86a6.7 6.7 0 0 0 1.85-4.88c0-2-.62-3.61-1.85-4.85a6.3 6.3 0 0 0-4.77-1.9c-1.94 0-3.51.63-4.72 1.9a6.63 6.63 0 0 0-1.82 4.85c0 1.99.6 3.62 1.82 4.88a6.32 6.32 0 0 0 4.72 1.86ZM115.03 32.15h-5.25l6.66-10.75-5.9-10.25h5.26l3.91 7.06h.77l4.12-7.06h5.13l-5.9 9.97 6.67 11.03h-5.42l-4.48-7.96h-.77l-4.8 7.96Z"/>
          </svg>
          <span class="contact-btn__text">Max</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: rgba(244, 201, 214, 0.08);
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 4vw, 3rem);
  padding: clamp(4rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem);
}

.contact-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--color-espresso);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  position: relative;
}

.contact-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--color-espresso) 50%, transparent 100%);
}

.contact-subtitle {
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  font-weight: 400;
  color: var(--color-espresso);
  text-align: center;
  max-width: 50ch;
}

/* ============================================
   КНОПКИ
   ============================================ */

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  justify-content: center;
  width: 100%;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 1.5vw, 1.25rem);
  padding: clamp(1rem, 2.5vw, 1.5rem) clamp(2rem, 4vw, 3rem);
  border-radius: clamp(0.75rem, 1.5vw, 1.25rem);
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  border: 2px solid var(--color-espresso);
  min-width: 220px;
  justify-content: center;
}

.contact-btn__icon {
  width: clamp(18px, 2vw, 26px);
  height: clamp(18px, 2vw, 26px);
  flex-shrink: 0;
}

.contact-btn--messenger .contact-btn__icon {
  width: clamp(32px, 6vw, 42px);
  height: clamp(32px, 6vw, 42px);
}

.contact-btn__text {
  flex-shrink: 0;
}

/* Telegram */
.contact-btn--telegram {
  background: var(--color-espresso);
  color: var(--color-peony);
  box-shadow: 0 clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 2rem) rgba(62, 39, 35, 0.25);
}

.contact-btn--telegram:hover {
  background: var(--color-peony);
  color: var(--color-espresso);
  box-shadow: 0 clamp(0.75rem, 1.5vw, 1.5rem) clamp(1.5rem, 3vw, 3rem) rgba(62, 39, 35, 0.35);
  transform: translateY(-3px);
}

/* Messenger Max */
.contact-btn--messenger {
  background: var(--color-espresso);
  color: var(--color-peony);
  box-shadow: 0 clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 2rem) rgba(62, 39, 35, 0.25);
}

.contact-btn--messenger:hover {
  background: var(--color-peony);
  color: var(--color-espresso);
  box-shadow: 0 clamp(0.75rem, 1.5vw, 1.5rem) clamp(1.5rem, 3vw, 3rem) rgba(62, 39, 35, 0.35);
  transform: translateY(-3px);
}

/* ============================================
   АДАПТИВНОСТЬ
   ============================================ */

@media (max-width: 768px) {
  .contact-buttons {
    flex-direction: column;
    align-items: center;
    gap: clamp(1rem, 2vw, 2rem);
  }

  .contact-btn {
    width: 100%;
    max-width: 350px;
  }

  .contact-title {
    font-size: clamp(2rem, 4vw, 3rem);
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem);
  }

  .contact-btn {
    min-width: auto;
    padding: clamp(0.875rem, 2vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem);
    font-size: clamp(1.1rem, 1.6vw, 1.4rem);
  }

  .contact-btn__icon {
    width: clamp(20px, 4vw, 28px);
    height: clamp(20px, 4vw, 28px);
  }
}

@media (min-width: 1440px) {
  .contact-section {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>
