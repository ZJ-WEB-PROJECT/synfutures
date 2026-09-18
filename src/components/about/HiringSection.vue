<template>
  <section class="section">
    <div class="wrap">
      <div class="head">
        <h2 class="display desktop" v-html="$t('about.hiring.titleDesktop')" />
        <h2 class="display mobile" v-html="$t('about.hiring.titleMobile')" />
        <a class="btn btn-outline hide-sm" v-bind="tradeLinkAttrs">{{ $t('common.tradeNow') }}</a>
      </div>
      <div class="grid">
        <div class="hire">
          <div class="hire-top">
            <h3 class="display" v-html="$t('about.hiring.hiring')" />
            <a class="btn btn-outline" v-bind="tradeLinkAttrs">{{ $t('about.hiring.joinUs') }}</a>
          </div>
          <div class="tags">
            <div class="row marquee-left">
              <span v-for="(tag, i) in [...jobTagsA, ...jobTagsA]" :key="'a'+i" :class="tag.variant">{{ tag.label }}</span>
            </div>
            <div class="row marquee-right">
              <span v-for="(tag, i) in [...jobTagsB, ...jobTagsB]" :key="'b'+i" :class="tag.variant">{{ tag.label }}</span>
            </div>
          </div>
        </div>
        <div class="quote">
          <img class="desk" src="/assets/build_together.svg" :alt="$t('about.hiring.quoteAlt')" />
          <div class="mob">
            <p v-html="$t('about.hiring.quoteMobile')" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { jobTagVariantsA, jobTagVariantsB } from '@/data/content'
import { getTradeLinkAttrs } from '@/utils/tradeUrl'
import { useLocaleList } from '@/i18n'

const tradeLinkAttrs = getTradeLinkAttrs()
const jobTagLabelsA = useLocaleList('about.hiring.jobTagsA')
const jobTagLabelsB = useLocaleList('about.hiring.jobTagsB')

const jobTagsA = computed(() =>
  jobTagLabelsA.value.map((label, i) => ({
    label,
    variant: jobTagVariantsA[i],
  })),
)

const jobTagsB = computed(() =>
  jobTagLabelsB.value.map((label, i) => ({
    label,
    variant: jobTagVariantsB[i],
  })),
)
</script>

<style scoped>
.section {
  padding: 64px 0;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 64px;
}

h2 {
  max-width: 513px;
  color: #fff;
  font-size: 32px;
  font-weight: 300;
}

h2 :deep(span),
h3 :deep(span) {
  font-weight: 600;
}

.desktop {
  display: none;
}

.grid {
  display: grid;
  gap: 32px;
}

.hire {
  position: relative;
  height: 288px;
  overflow: hidden;
  border: 1px solid var(--color-brand);
  border-radius: 16px;
}

.hire-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

h3 {
  color: #fff;
  font-size: 28px;
}

.tags {
  position: absolute;
  right: 0;
  bottom: 24px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
}

.row {
  display: flex;
  width: max-content;
  gap: 12px;
}

.row span {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 13.5px 24px;
  white-space: nowrap;
  font-family: var(--font-display);
}

.outline {
  border: 1px solid rgba(171, 181, 186, 0.2);
  color: #ebebed;
}

.white {
  background: #fff;
  color: #000;
}

.blue {
  background: #172d6b;
  color: #fff;
}

.yellow {
  background: var(--color-accent);
  color: #000;
}

.brand {
  background: var(--color-brand);
  color: #000;
}

.quote img {
  width: 100%;
}

.mob {
  display: none;
}

.hide-sm {
  display: none;
}

@media (min-width: 640px) {
  .desktop { display: block; }
  .mobile { display: none; }
  .hide-sm { display: inline-flex; }
  h2 { font-size: 48px; }
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: 1fr 1fr; }
  h2 { font-size: 56px; }
}
</style>
