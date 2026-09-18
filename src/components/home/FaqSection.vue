<template>
  <section id="faqs" class="section">
    <div class="wrap">
      <h2 class="display">{{ $t('home.faq.title') }}</h2>
      <div class="box">
        <div v-for="(item, i) in faqs" :key="item.q" :class="{ lined: i > 0 }">
          <button type="button" :aria-expanded="open === i" @click="open = open === i ? -1 : i">
            <span class="display">{{ item.q }}</span>
            <svg :class="{ on: open === i }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div class="panel" :class="{ open: open === i }">
            <p v-html="item.a" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLocaleList } from '@/i18n'

const faqs = useLocaleList('home.faq.items')
const open = ref(0)
</script>

<style scoped>
.section {
  padding: 80px 0;
  overflow: hidden;
}

h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
}

.box {
  max-width: 720px;
  margin: 32px auto 0;
  border: 1px solid rgba(83, 230, 212, 0.6);
  background: rgba(11, 26, 29, 0.4);
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(8px);
}

.lined {
  border-top: 1px solid rgba(30, 52, 54, 0.6);
}

button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 0;
  text-align: left;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: 0.2s;
}

svg.on {
  color: var(--color-brand);
  transform: rotate(180deg);
}

.panel {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: 0.3s;
}

.panel.open {
  grid-template-rows: 1fr;
  opacity: 1;
  padding-bottom: 20px;
}

p {
  overflow: hidden;
  color: var(--color-text-body);
  line-height: 1.625;
}

:deep(a) {
  color: var(--color-brand);
  text-decoration: underline;
}

@media (min-width: 640px) {
  h2 { font-size: 48px; }
  .box { padding: 32px; margin-top: 48px; }
  button { font-size: 18px; }
}
</style>
