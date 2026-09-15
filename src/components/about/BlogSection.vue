<template>
  <section class="section">
    <div class="wrap split">
      <div>
        <span class="pill">Beginners</span>
        <h2 class="display">Cervanta <span>Blog</span></h2>
        <p>Build your foundation in cryptocurrency, DeFi, Web3 with educational content designed for beginners.</p>
        <!-- <a class="btn btn-brand" :href="links.blog" target="_blank" rel="noreferrer">View All</a> -->
      </div>
      <img src="/assets/computer.svg" alt="Cervanta Blog illustration" />
    </div>
  </section>
</template>

<script setup>
import { links } from '@/data/content'
</script>

<style scoped>
.section {
  padding: 80px 0;
}

.split {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.pill {
  border: 1px solid rgba(83, 230, 212, 0.3);
  background: rgba(83, 230, 212, 0.1);
  color: var(--color-brand);
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 16px;
}

h2 {
  margin-top: 24px;
  color: #fff;
  font-size: 36px;
  font-weight: 300;
}

h2 span {
  color: var(--color-accent);
  font-weight: 600;
}

p {
  margin: 24px 0;
  max-width: 638px;
  color: var(--color-text-body);
  font-size: 18px;
}

img {
  width: 100%;
  max-width: 585px;
}

@media (min-width: 1024px) {
  .split {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h2 { font-size: 48px; }
}
</style>
