<template>
  <section id="how-it-works" class="how">
    <div class="wrap">
      <div class="head">
        <span class="pill">How it Works</span>
        <h2 class="display">From Stocks to Crypto.<br /><span>All Onchain.</span></h2>
        <p>Trade tokenized equities, ETFs, and crypto perpetuals. All from a single interface. Settled onchain, held in your wallet.</p>
      </div>

      <div class="mobile">
        <div v-for="item in steps" :key="item.step">
          <article class="how-step-card">
            <span class="pill">{{ item.step }}</span>
            <h3 class="display">{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
          <img :src="item.image" :alt="`${item.title} interface`" />
        </div>
      </div>

      <div class="desktop">
        <div class="col" ref="list">
          <div v-for="(item, i) in steps" :key="item.step" class="sticky">
            <article class="how-step-card" :style="{ opacity: active === -1 || i <= active ? 1 : 0.3 }">
              <span class="pill">{{ item.step }}</span>
              <h3 class="display">{{ item.title }}</h3>
              <p>{{ item.body }}</p>
            </article>
          </div>
        </div>
        <div class="preview">
          <img
            v-for="(item, i) in steps"
            :key="item.step"
            :src="item.image"
            :alt="`${item.title} interface`"
            :style="{ opacity: active === -1 || active === i ? 1 : 0 }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { steps } from '@/data/content'

const list = ref(null)
const active = ref(0)

function onScroll() {
  if (!window.matchMedia('(min-width: 1024px)').matches || !list.value) {
    active.value = -1
    return
  }
  const children = list.value.children
  let index = 0
  for (let i = 0; i < children.length; i++) {
    if (children[i].getBoundingClientRect().top <= 130) index = i
  }
  active.value = index
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
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

h2 span {
  color: var(--color-accent);
  font-weight: 600;
}

.head p {
  color: var(--color-text-body);
  font-size: 14px;
}

.mobile {
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

.mobile img {
  width: 100%;
  max-width: 500px;
  margin: 24px auto 0;
}

.desktop {
  display: none;
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
  .mobile {
    display: none;
  }
  .desktop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
  .sticky {
    position: sticky;
    top: 120px;
    height: 630px;
    background: #000;
    padding-top: 8px;
  }
  .preview {
    position: sticky;
    top: 120px;
    height: 0;
  }
  .preview img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 500px;
    transition: opacity 0.4s;
  }
}
</style>
