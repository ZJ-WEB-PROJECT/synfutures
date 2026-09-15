<template>
  <section id="about" class="section">
    <div class="wrap">
      <div class="head">
        <h2 class="display">Start trading.<br />Join <span>Cervanta.</span></h2>
        <p>
          We partner with market makers, DeFi protocols, RWA issuers, and chains to bring every asset class onchain.<br />
          Integrate with Cervanta to access unified liquidity across crypto and real-world assets.
        </p>
      </div>
      <div class="cards">
        <article class="join-cta-card">
          <div class="media"><img src="/assets/10002.png" alt="" /></div>
          <div class="foot">
            <h3 class="display">Join the Network</h3>
            <a class="btn btn-brand" :href="`mailto:${links.email}`">Become a Partner</a>
          </div>
        </article>
        <article class="join-cta-card">
          <div class="media">
            <img src="/assets/join_the_community.png" alt="" />
          </div>
          <div class="foot">
            <h3 class="display">Join the Community</h3>
            <div class="icons">
              <a v-for="item in socials" :key="item.label" :href="item.href" target="_blank" rel="noreferrer" :aria-label="item.label">
                {{ item.label[0] }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { links, socials } from '@/data/content'
</script>

<style scoped>
.section {
  padding: 80px 0;
}

.head {
  text-align: center;
}

h2 {
  max-width: 760px;
  margin: 0 auto;
  color: #fff;
  font-size: 28px;
  font-weight: 300;
}

h2 span {
  font-weight: 700;
}

p {
  margin: 16px auto 0;
  max-width: 900px;
  color: #abb5ba;
  font-size: 14px;
}

.cards {
  display: grid;
  gap: 16px;
  margin-top: 56px;
}

article {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-line);
  border-radius: 16px;
  background: #000;
}

.media {
  padding: 24px 24px 0;
}

.foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
}

h3 {
  color: #fff;
}

.icons {
  display: flex;
  gap: 8px;
}

.icons a {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  color: var(--color-text-body);
}

@media (min-width: 640px) {
  h2 { font-size: 48px; }
  p { font-size: 18px; }
}

@media (min-width: 1024px) {
  .cards { grid-template-columns: 1fr 1fr; }
  h2 { font-size: 56px; }
}
</style>
