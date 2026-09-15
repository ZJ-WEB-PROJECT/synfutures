<template>
  <section class="section">
    <div class="wrap">
      <span class="pill">Partners</span>
      <h2 class="display">Trusted by Industry<br /><span>Leaders</span></h2>
    </div>
    <div class="marquee">
      <div class="partner-marquee track">
        <img v-for="item in doubled" :key="item.name + item.i" :src="item.logo" :alt="item.name" />
      </div>
    </div>
    <div class="wrap">
      <div class="summit">
        <div>
          <h3 class="display">Borderless Summit</h3>
          <p>Bridging the gap between East and West to bring the world onchain, as one.</p>
        </div>
        <a class="btn btn-brand" href="https://synfutures.cam/" target="_blank" rel="noreferrer">View More</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { partners, links } from '@/data/content'

const doubled = [...partners, ...partners].map((item, i) => ({ ...item, i }))
</script>

<style scoped>
.section {
  padding: 80px 0;
}

.pill {
  border: 1px solid rgba(241, 244, 52, 0.3);
  background: rgba(241, 244, 52, 0.1);
  color: var(--color-accent);
  padding: 4px 8px;
  border-radius: 999px;
}

h2 {
  margin-top: 24px;
  color: #fff;
  font-size: 36px;
  font-weight: 300;
}

h2 span {
  font-weight: 600;
}

.marquee {
  overflow: hidden;
  margin-top: 80px;
}

.track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 100px;
}

.track img {
  height: 32px;
  width: auto;
}

.summit {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 80px;
  border: 1px solid var(--color-brand);
  border-radius: 16px;
  background: #151515;
  padding: 24px;
}

h3 {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

p {
  margin-top: 16px;
  color: var(--color-text-body);
}

@media (min-width: 640px) {
  h2 { font-size: 56px; }
  .summit {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h3 { font-size: 36px; }
  p { font-size: 24px; }
}
</style>
