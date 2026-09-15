<template>
  <section id="top" class="hero">
    <div class="glow-a" />
    <div class="glow-b" />
    <div class="wrap center">
      <div class="kicker">
        <span class="new">New</span>
        <span>Built for every market.</span>
      </div>
      <h1 class="hero-title display">
        Trade <span>Every</span> Asset<br />One Protocol.
      </h1>
      <p class="display lede">
        SynFutures is an onchain trading protocol for crypto and real-world assets bringing
        <br class="br" />stocks, ETFs, and derivatives onchain
      </p>
      <div class="actions">
        <a class="btn btn-brand" :href="links.trade" rel="noreferrer">Trade Now</a>
        <a class="btn btn-outline" :href="links.docs" rel="noreferrer">Learn More</a>
      </div>
    </div>

    <div class="candles" aria-hidden="true">
      <KlineChart />
    </div>

    <div class="card left hero-stat-card desktop-only">
      <svg class="icon-yellow" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="15" r="9" stroke="currentColor" stroke-width="3.2" />
        <path d="M8 42c2-9 7.2-14 16-14s14 5 16 14" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" />
      </svg>
      <div class="num display">433.2K</div>
      <div class="label">All-time Traders</div>
    </div>

    <div class="card mid hero-stat-card desktop-only">
      <img src="/assets/cumulative_trading_volume.svg" alt="" />
      <div class="mid-row">
        <div class="big display">$329.9B</div>
        <div class="chip"><span /><em>Trade</em></div>
      </div>
      <div class="label">Cumulative Trading Volume</div>
    </div>

    <div class="card right hero-stat-card desktop-only">
      <svg viewBox="0 0 34 34" class="icon-duo">
        <circle cx="14" cy="14" r="8" fill="none" stroke="#53E6D4" stroke-width="3" />
        <circle cx="22" cy="22" r="8" fill="none" stroke="#F1F434" stroke-width="3" />
      </svg>
      <div class="num display">351</div>
      <div class="label">Markets Listed</div>
    </div>

    <div class="mobile-stats">
      <div class="candles mini">
        <KlineChart />
      </div>
      <div class="grid">
        <div class="card hero-stat-card">
          <svg viewBox="0 0 34 34" class="icon-duo">
            <circle cx="14" cy="14" r="8" fill="none" stroke="#53E6D4" stroke-width="3" />
            <circle cx="22" cy="22" r="8" fill="none" stroke="#F1F434" stroke-width="3" />
          </svg>
          <div class="num display">351</div>
          <div class="label">Markets Listed</div>
        </div>
        <div class="card hero-stat-card">
          <svg class="icon-yellow" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="15" r="9" stroke="currentColor" stroke-width="3.2" />
            <path d="M8 42c2-9 7.2-14 16-14s14 5 16 14" stroke="currentColor" stroke-width="3.2"
              stroke-linecap="round" />
          </svg>
          <div class="num display">433.2K</div>
          <div class="label">All-time Traders</div>
        </div>
      </div>
      <div class="card mid hero-stat-card">
        <img src="/assets/cumulative_trading_volume.svg" alt="" />
        <div class="mid-row">
          <div class="big display">$329.9B</div>
          <div class="chip"><span /><em>Trade</em></div>
        </div>
        <div class="label">Cumulative Trading Volume</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links } from '@/data/content'
import KlineChart from '@/components/home/KlineChart.vue'
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: #000;
  margin-top: -96px;
  padding-top: 168px;
}

.glow-a,
.glow-b {
  position: absolute;
  pointer-events: none;
}

.glow-a {
  top: 0;
  left: 0;
  width: 460px;
  height: 520px;
  background: radial-gradient(circle at 0 0, rgba(35, 52, 60, 0.48), transparent 70%);
}

.glow-b {
  inset: 0 auto auto 0;
  width: 100%;
  height: 760px;
  background: radial-gradient(circle at 50% 36%, rgba(44, 44, 44, 0.2), transparent 42%);
}

.center {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.kicker {
  display: inline-flex;
  height: 31px;
  align-items: center;
  gap: 11px;
  margin-bottom: 24px;
  border-radius: 999px;
  background: rgba(38, 39, 16, 0.9);
  padding: 0 13px 0 11px;
  color: #aaa8a1;
  font-family: var(--font-display);
}

.new {
  background: var(--color-accent);
  color: #000;
  border-radius: 999px;
  padding: 3px 4px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  max-width: 620px;
  color: #fff;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.1;
}

h1 span {
  color: var(--color-accent);
  font-weight: 600;
}

.lede {
  margin-top: 24px;
  max-width: 760px;
  color: var(--color-text-body);
  font-size: 14px;
  line-height: 1.45;
}

.br {
  display: none;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.actions .btn {
  height: 40px;
  min-width: 140px;
}

.candles {
  pointer-events: none;
  position: absolute;
  left: 50%;
  bottom: -14px;
  z-index: 0;
  display: none;
  width: min(1242px, 96vw);
  height: 510px;
  transform: translateX(-50%);
  opacity: 0.92;
}

.card {
  background: #151515;
  border-radius: 14px;
}

.left,
.right,
.mid.desktop-only {
  position: absolute;
  z-index: 20;
  display: none;
}

.left,
.right {
  width: 159px;
  height: 168px;
  padding: 18px 20px 16px;
  border: 1px solid rgba(83, 230, 212, 0.15);
  align-items: flex-start;
}

.icon-yellow {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  overflow: visible;
  color: var(--color-accent);
}

.mid {
  width: 350px;
  padding: 14px 16px 22px;
  border: 1px solid #20262a;
}

.icon-duo {
  width: 32px;
  height: 32px;
}

.num {
  margin-top: 16px;
  color: #fff;
  font-size: 24px;
}

.label {
  margin-top: 16px;
  color: #8d8d8d;
  font-size: 15px;
  white-space: nowrap;
}

.mid img {
  height: 160px;
  margin: 0 auto;
}

.mid-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 9px;
}

.big {
  color: #fff;
  font-size: 38px;
  font-weight: 600;
}

.chip {
  display: flex;
  height: 30px;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #171717;
  padding: 2px 11px 2px 3px;
  color: #fff;
}

.chip span {
  width: 29px;
  height: 29px;
  border-radius: 999px;
  background: var(--color-accent);
}

.mobile-stats {
  position: relative;
  z-index: 10;
  margin-top: 20px;
  padding: 0 16px 40px;
}

.mobile-stats .candles.mini {
  display: block;
  position: relative;
  left: auto;
  bottom: auto;
  transform: none;
  width: 100%;
  max-width: 405px;
  height: 200px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

.mobile-stats .card {
  padding: 16px;
}

.mobile-stats .mid {
  width: auto;
  margin-top: 16px;
}

@media (min-width: 640px) {
  .hero {
    min-height: 1040px;
    padding-top: 244px;
  }

  h1 {
    font-size: 58px;
  }

  .lede {
    font-size: 18px;
  }

  .br {
    display: block;
  }

  .candles {
    display: block;
  }

  .desktop-only {
    display: flex;
    flex-direction: column;
  }

  .left {
    left: 50%;
    bottom: 171px;
    transform: translateX(-614px);
  }

  .right {
    left: 50%;
    bottom: 172px;
    transform: translateX(452px);
  }

  .mid.desktop-only {
    left: 50%;
    bottom: 90px;
    transform: translateX(-50%);
    display: block;
  }

  .mobile-stats {
    display: none;
  }
}

@media (min-width: 1024px) {
  .hero {
    min-height: 1218px;
    padding-top: 240px;
  }

  h1 {
    font-size: 64px;
  }

  .candles {
    bottom: 18px;
    height: 571px;
  }
}
</style>
