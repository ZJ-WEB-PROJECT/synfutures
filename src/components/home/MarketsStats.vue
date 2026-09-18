<template>
  <section id="stats" class="section">
    <div class="wrap">
      <div class="top">
        <div>
          <h2 class="display" v-html="$t('home.stats.title')" />
          <p v-html="$t('home.stats.subtitle')" />
        </div>
        <div class="bars" aria-hidden="true">
          <span v-for="n in 6" :key="n" />
        </div>
      </div>
      <div class="mt">
        <StatsGrid />
      </div>
    </div>
  </section>
</template>

<script setup>
import StatsGrid from '@/components/home/StatsGrid.vue'
</script>

<style scoped>
.section {
  padding: 56px 0;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

h2 {
  max-width: 600px;
  color: #fff;
  font-size: 26px;
  font-weight: 300;
  line-height: 1.25;
}

h2 :deep(span) {
  font-weight: 600;
}

p {
  margin-top: 12px;
  color: #abb5ba;
  font-size: 14px;
}

:deep(.br) {
  display: none;
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 200px;
}

.bars span {
  flex: 1;
  height: 40%;
  background: linear-gradient(180deg, #53e6d4, transparent);
}

.bars span:nth-child(2) { height: 70%; }
.bars span:nth-child(3) { height: 45%; }
.bars span:nth-child(4) { height: 90%; }
.bars span:nth-child(5) { height: 55%; }
.bars span:nth-child(6) { height: 75%; }

.mt {
  margin-top: 32px;
}

@media (min-width: 640px) {
  .section { padding: 112px 0; }
  h2 { font-size: 48px; }
  p { font-size: 18px; }
  :deep(.br) { display: block; }
  .bars { height: 250px; width: 582px; }
}

@media (min-width: 768px) {
  .top {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

@media (min-width: 1024px) {
  h2 { font-size: 56px; }
}
</style>
