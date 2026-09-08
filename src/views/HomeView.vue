<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <HowItWorks />
    <MarketsStats />
    <BackedBy />
    <CtaSection />
    <FaqSection />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import HowItWorks from '@/components/home/HowItWorks.vue'
import MarketsStats from '@/components/home/MarketsStats.vue'
import BackedBy from '@/components/home/BackedBy.vue'
import CtaSection from '@/components/home/CtaSection.vue'
import FaqSection from '@/components/home/FaqSection.vue'

const route = useRoute()

function scrollToSection() {
  const id = route.query.s
  if (!id) return
  const el = document.getElementById(String(id))
  el?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(scrollToSection)
watch(() => route.query.s, scrollToSection)
</script>
