<template>
  <section id="features" class="features">
    <img class="deco" src="/assets/68e6a4_vector_30.png" alt="" />
    <div class="wrap">
      <div class="head">
        <span class="pill accent">Features</span>
        <h2 class="display">Built For <span>Every</span> Trader.</h2>
        <p>Discover the features that make Cervanta</p>
      </div>
      <div class="shot">
        <img
          src="/assets/rwa_info.png"
          srcset="/assets/rwa_info_p_500.png 500w, /assets/rwa_info_p_800.png 800w, /assets/rwa_info_p_1080.png 1080w, /assets/rwa_info.png 1542w"
          sizes="(max-width: 639px) 373px, (max-width: 1023px) 760px, 1028px"
          alt="Cervanta trading terminal"
        />
      </div>
      <div class="grid">
        <article v-for="item in features" :key="item.title">
          <img :src="item.icon" alt="" />
          <h3 class="display">{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { features } from '@/data/content'
</script>

<style scoped>
.features {
  position: relative;
  overflow: hidden;
  background: #000;
}

.deco {
  display: none;
  position: absolute;
  top: 885px;
  left: -100px;
  width: 760px;
  height: 1045px;
  max-width: none;
  pointer-events: none;
}

.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 543px;
  margin: 0 auto;
  padding-top: 48px;
}

.pill.accent {
  border: 1px solid rgba(241, 244, 52, 0.3);
  background: rgba(241, 244, 52, 0.1);
  color: var(--color-accent);
}

h2 {
  margin-top: 16px;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
}

h2 span {
  color: var(--color-accent);
  font-weight: 600;
}

.head p {
  margin-top: 12px;
  color: var(--color-text-body);
}

.shot {
  margin: 16px auto 0;
  max-width: 373px;
  overflow: hidden;
  border-radius: 8px;
}

.shot img {
  width: 100%;
  aspect-ratio: 373 / 251.328;
  object-fit: cover;
}

.grid {
  display: grid;
  gap: 32px;
  margin-top: 32px;
  padding-bottom: 64px;
}

article img {
  width: 48px;
  height: 48px;
}

h3 {
  margin-top: 12px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
}

article p {
  margin-top: 12px;
  max-width: 373px;
  color: var(--color-text-body);
  font-size: 14px;
  line-height: 1.5;
}

@media (min-width: 640px) {
  .deco {
    display: block;
  }
  h2 {
    font-size: 44px;
  }
  .shot {
    max-width: 760px;
  }
}

@media (min-width: 1024px) {
  .features {
    min-height: 1535px;
  }
  .deco {
    top: 163px;
  }
  h2 {
    font-size: 64px;
  }
  .shot {
    max-width: 1028px;
    border-radius: 20px;
    margin-top: 48px;
  }
  .shot img {
    aspect-ratio: 1028 / 692.472;
  }
  .grid {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 80px;
  }
  article p {
    font-size: 16px;
    max-width: none;
  }
}
</style>
