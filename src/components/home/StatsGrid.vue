<template>
  <div class="grid">
    <div class="volume">
      <span class="display value">{{ volume }}</span>
      <span class="caption">{{ $t('stats.cumulativeVolume') }}</span>
    </div>
    <div class="stat-card vault">
      <span>{{ $t('stats.rwaVaults') }}</span>
      <strong class="display">{{ $t('stats.comingSoon') }}</strong>
    </div>
    <div class="stat-card traders">
      <span>{{ $t('stats.allTimeTraders') }}</span>
      <strong class="display accent">{{ traders }}</strong>
      <img src="/assets/area_charts.png" alt="" />
    </div>
    <div class="stat-card markets">
      <div>
        <span v-html="$t('stats.marketsListed')" />
        <strong class="display accent">{{ markets }}</strong>
      </div>
      <img src="/assets/group_482100.svg" alt="" />
    </div>
    <div class="stat-card rwa">
      <div>
        <span>{{ $t('stats.tokenizedAssets') }}</span>
        <strong class="display">{{ rwa }}</strong>
      </div>
      <img src="/assets/stocks.png" alt="" />
    </div>
  </div>
</template>

<script setup>
const volume = '$320.9B'
const traders = '433.2K'
const markets = '351'
const rwa = '50+'
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.volume {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 160px;
  border-radius: 16px;
  background: var(--color-accent);
  color: #000;
  padding: 24px;
}

.value {
  font-size: 40px;
  font-weight: 600;
}

.caption {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.7;
}

.stat-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  border-radius: 16px;
  padding: 24px;
}

.vault,
.traders,
.markets,
.rwa {
  grid-column: span 2;
}

.vault strong {
  margin-top: auto;
  color: var(--color-accent);
  font-size: 28px;
}

.traders span,
.markets span,
.vault span {
  color: #fff;
  font-weight: 500;
}

.accent {
  color: var(--color-accent);
}

.traders strong {
  margin: 12px 0;
  font-size: 36px;
}

.traders img,
.markets img,
.rwa img {
  margin-top: auto;
  width: 100%;
  object-fit: contain;
}

.markets,
.rwa {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 0;
  min-height: 141px;
}

.markets > div,
.rwa > div {
  width: 44%;
  padding: 0 0 0 24px;
}

.markets strong,
.rwa strong {
  display: block;
  margin-top: 16px;
  font-size: 48px;
}

.rwa {
  background: #53e6d4;
}

.rwa span,
.rwa strong {
  color: #000;
}

.markets img,
.rwa img {
  height: 100%;
  width: auto;
  max-width: 56%;
  object-position: right;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 204px 104px 104px;
    gap: 16px;
  }
  .volume {
    grid-column: span 3;
  }
  .value {
    font-size: 80px;
  }
  .vault {
    grid-column: span 1;
  }
  .traders {
    grid-column: span 2;
    grid-row: span 3;
  }
  .traders strong,
  .markets strong,
  .rwa strong {
    font-size: 80px;
  }
  .markets,
  .rwa {
    grid-column: span 2;
    grid-row: span 2;
    padding: 32px;
  }
  .markets img {
    height: 140px;
    width: 170px;
    max-width: none;
  }
  .rwa img {
    height: 120px;
    width: 160px;
    max-width: none;
  }
}
</style>
