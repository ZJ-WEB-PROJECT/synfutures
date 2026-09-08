<template>
  <section id="partners" class="section">
    <div class="wrap">
      <h2 class="display">Backed By<br /><span>The Industry Best</span></h2>
      <div class="logos">
        <div v-for="item in investors" :key="item.logo">
          <img :src="item.logo" :alt="item.name" width="145" height="56" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { investors } from '@/data/content'
</script>

<style scoped>
.section {
  padding: 56px 0;
}

h2 {
  max-width: 640px;
  margin: 0 auto;
  color: #fff;
  font-size: 32px;
  font-weight: 300;
  line-height: 1.25;
  text-align: center;
}

h2 span {
  font-weight: 700;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 32px;
  margin-top: 40px;
}

.logos div {
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 110px;
  height: 40px;
  object-fit: contain;
}

@media (min-width: 640px) {
  .section { padding: 112px 0; }
  h2 { font-size: 56px; }
  .logos div, img {
    width: 145px;
    height: 56px;
  }
}
</style>
