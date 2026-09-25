<template>
  <section id="how-it-works" class="how">
    <div class="wrap">
      <div class="head">
        <span class="pill">{{ $t('home.how.pill') }}</span>
        <h2 class="display" v-html="$t('home.how.title')" />
        <p>{{ $t('home.how.subtitle') }}</p>
      </div>

      <div class="steps">
        <article v-for="item in steps" :key="item.step" class="how-step-card">
          <span class="pill">{{ item.step }}</span>
          <h3 class="display">{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocaleList } from '@/i18n'

const steps = useLocaleList('home.how.steps')
</script>

<style scoped>
.how {
  position: relative;
  z-index: 40;
  padding-top: 100px;
  background: #000;
}

.head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 48px;
}

.pill {
  border: 1px solid rgba(241, 244, 52, 0.4);
  background: rgba(38, 39, 16, 0.8);
  color: var(--color-accent);
}

h2 {
  max-width: 850px;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.08;
}

h2 :deep(span) {
  color: var(--color-accent);
  font-weight: 600;
}

.head p {
  color: var(--color-text-body);
  font-size: 14px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.how-step-card {
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  background: #000;
  padding: 32px 24px;
}

h3 {
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

article p {
  margin-top: 20px;
  max-width: 560px;
  color: var(--color-text-body);
}

@media (min-width: 640px) {
  .how {
    padding-top: 200px;
  }
  h2 {
    font-size: 56px;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 64px;
  }
}
</style>
