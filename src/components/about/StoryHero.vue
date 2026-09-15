<template>
  <section class="story">
    <video class="video" src="/assets/blog_video.mp4" autoplay muted loop></video>
    <div class="wrap">
      <span class="pill">Our Story</span>
      <h1 class="display">
        Onchain Markets
        <span>Fair, Open, And<br />Accessible.</span>
      </h1>
      <p>A global team redefining how markets are built and traded, united by a belief in permissionless finance.</p>
      <a class="btn btn-outline" href="https://synfutures.cam/" target="_blank" rel="noreferrer">Trade Now</a>
    </div>
  </section>
</template>

<script setup>
import { links } from '@/data/content'
</script>

<style scoped>
.story {
  position: relative;
  margin-top: -72px;
  min-height: 499px;
  overflow: hidden;
  background:
    radial-gradient(ellipse 60% 50% at 80% 20%, rgba(83, 230, 212, 0.12), transparent),
    #000;
  padding-top: 144px;
}

.wrap{
  z-index: 999;
  position: relative;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pill {
  border: 1px solid var(--color-accent);
  background: rgba(241, 244, 52, 0.1);
  color: var(--color-accent);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
}

h1 {
  margin-top: 24px;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.1;
}

h1 span {
  color: var(--color-accent);
}

p {
  margin: 24px 0;
  max-width: 520px;
  color: var(--color-text-body);
  font-size: 16px;
}

@media (min-width: 640px) {
  .story { margin-top: -84px; }
  h1 { font-size: 56px; }
}

@media (min-width: 1024px) {
  .story {
    margin-top: -96px;
    min-height: 100vh;
    padding-top: 249px;
  }
  h1 { font-size: 72px; }
}
</style>
