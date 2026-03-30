<script setup>
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import WhyTrustMeSection from './components/WhyTrustMeSection.vue';
import ExampleLeassonsSection from './components/ExampleLeassonsSection.vue';
import TypeClassesByPriceSection from './components/PriceSection.vue';
import ReviewsSection from './components/ReviewsSection.vue';
import ContactUs from './components/ContactUs.vue';
</script>

<template>
  <main class="app-main">
    <HeroSection />
    <AboutSection />
    <WhyTrustMeSection />
    <ExampleLeassonsSection />
    <TypeClassesByPriceSection />
    <ReviewsSection />
    <ContactUs />
  </main>
</template>

<style scoped>
.app-main {
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 5vw, 4rem);
  padding: clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 6rem);
  max-width: 1440px;
  margin: 0 auto;
}
</style>
