<template>
  <svg class="kline" viewBox="0 0 1242 571" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
    <g class="half left">
      <g v-for="(c, i) in left" :key="`l${i}`" :transform="`translate(${c.x} 0)`">
        <rect :x="(BODY - WICK) / 2" :y="c.high" :width="WICK" :height="c.low - c.high" />
        <rect x="0" :y="Math.min(c.open, c.close)" :width="BODY" :height="Math.max(10, Math.abs(c.close - c.open))" rx="1" />
      </g>
    </g>
    <g class="half right">
      <g v-for="(c, i) in right" :key="`r${i}`" :transform="`translate(${c.x} 0)`">
        <rect :x="(BODY - WICK) / 2" :y="c.high" :width="WICK" :height="c.low - c.high" />
        <rect x="0" :y="Math.min(c.open, c.close)" :width="BODY" :height="Math.max(10, Math.abs(c.close - c.open))" rx="1" />
      </g>
    </g>
  </svg>
</template>

<script setup>
const W = 1242
const H = 571
const COUNT = 38
const BODY = 15
const WICK = 2.4
const GAP = (W - COUNT * BODY) / (COUNT + 1)
const MID = Math.floor(COUNT / 2)

const candles = Array.from({ length: COUNT }, (_, i) => {
  const t = i / (COUNT - 1)
  const trend = 54 - t * 40
  const wobble = Math.sin(i * 0.82) * 7 + Math.cos(i * 0.37) * 3.5
  const highPct = Math.max(6, Math.min(58, trend + wobble))
  const span = 20 + Math.abs(Math.sin(i * 1.05 + 0.4)) * 12
  const lowPct = Math.min(86, highPct + span)

  return {
    x: GAP + i * (BODY + GAP),
    high: (highPct / 100) * H,
    low: (lowPct / 100) * H,
    open: ((highPct + 4 + (i % 3)) / 100) * H,
    close: ((lowPct - 5 - (i % 4)) / 100) * H,
  }
})

const left = candles.slice(0, MID)
const right = candles.slice(MID)
</script>

<style scoped>
.kline {
  display: block;
  width: 100%;
  height: 100%;
}

.half {
  fill: #53e6d4;
}

.left {
  animation: leftHalf 6s ease-in-out infinite;
}

.right {
  animation: rightHalf 6s ease-in-out infinite;
}

@keyframes leftHalf {
  0%,
  12% {
    fill: #53e6d4;
  }
  20%,
  48% {
    fill: #f1f434;
  }
  56%,
  100% {
    fill: #53e6d4;
  }
}

@keyframes rightHalf {
  0%,
  48% {
    fill: #53e6d4;
  }
  56%,
  84% {
    fill: #f1f434;
  }
  92%,
  100% {
    fill: #53e6d4;
  }
}
</style>
