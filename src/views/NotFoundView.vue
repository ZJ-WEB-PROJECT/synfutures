<template>
  <section class="not-found">
    <p class="code">404</p>
    <h1 class="display">{{ $t('notFound.title') }}</h1>
    <p>{{ $t('notFound.body') }}</p>
    <RouterLink to="/">{{ $t('notFound.backHome') }}</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
}

.code {
  color: var(--color-accent);
  font-size: 16px;
  font-weight: 500;
}

h1 {
  margin-top: 16px;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
}

p {
  margin-top: 16px;
  max-width: 440px;
}

a {
  margin-top: 32px;
  color: var(--color-brand);
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (min-width: 640px) {
  h1 { font-size: 48px; }
}
</style>
