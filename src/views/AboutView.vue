<template>
  <div>
    <StoryHero />
    <TimelineSection />
    <HiringSection />
    <section id="stats" class="numbers">
      <div class="wrap">
        <h2 class="display">By the <span>Numbers</span></h2>
        <p>Repurpose impressive stats here, framed around credibility rather than product.</p>
        <StatsGrid />
      </div>
    </section>
    <BlogSection />
    <PartnersSection />
  </div>
</template>

<script setup>
import StoryHero from '@/components/about/StoryHero.vue'
import TimelineSection from '@/components/about/TimelineSection.vue'
import HiringSection from '@/components/about/HiringSection.vue'
import BlogSection from '@/components/about/BlogSection.vue'
import PartnersSection from '@/components/about/PartnersSection.vue'
import StatsGrid from '@/components/home/StatsGrid.vue'
</script>

<style scoped>
.numbers {
  padding: 80px 0;
  text-align: center;
}

h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 300;
}

h2 span {
  font-weight: 600;
}

p {
  margin: 16px auto 56px;
  max-width: 600px;
  color: var(--color-text-body);
}
</style>
