<template>
  <section class="timeline">
    <div class="wrap copy">
      <p><strong>Cervanta</strong> is one of the most established names in DeFi derivatives, with a long track record of pushing the boundaries of what is possible for onchain finance.</p>
      <p>After <strong>powering billions</strong> in trading volume across multiple versions, we're channeling that expertise into a new mission: building an onchain trading protocol for crypto and real-world assets bringing stocks, ETFs, and derivatives onchain</p>
      <p>Our story started with a line of code, but it's about people, community, and the future that we're shaping together.</p>
    </div>
    <div class="years wrap">
      <article v-for="item in timeline" :key="item.year">
        <h2 class="display">{{ item.year }}</h2>
        <p v-for="event in item.items" :key="event">{{ event }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { timeline } from '@/data/content'
</script>

<style scoped>
.timeline {
  background: radial-gradient(ellipse 60% 50% at 0% 100%, rgba(45, 98, 255, 0.12), transparent),
    radial-gradient(ellipse 50% 60% at 100% 0%, rgba(83, 230, 212, 0.1), transparent),
    #000;
  padding: 48px 0 80px;
}

.copy {
  max-width: 760px;
}

.copy p {
  color: var(--color-text-body);
  font-size: 16px;
  line-height: 1.6;
}

.copy p + p {
  margin-top: 32px;
}

strong {
  color: #fff;
  font-weight: 600;
}

.years {
  display: grid;
  gap: 40px;
  margin-top: 64px;
}

h2 {
  color: #fff;
  font-size: 28px;
  font-weight: 400;
}

article p {
  margin-top: 12px;
  max-width: 280px;
  color: #fff;
  font-size: 15px;
}

@media (min-width: 1024px) {
  .years {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
