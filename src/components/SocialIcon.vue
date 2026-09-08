<template>
  <svg v-if="name === 'X'" width="32" height="32" viewBox="0 0 32 33" fill="none">
    <rect x="0.25" y="0.478" width="31.5" height="31.5" rx="7.75" fill="#262626" />
    <rect x="0.25" y="0.478" width="31.5" height="31.5" rx="7.75" stroke="url(#x_grad)" stroke-width="0.5" />
    <path d="M21.176 8.228h2.76l-6.03 6.777L25 24.228h-5.554l-4.351-5.593-4.978 5.593H7.355l6.45-7.249L7 8.228h5.695l3.933 5.113 4.548-5.113Zm-.969 14.375h1.53L11.864 9.767H10.223l9.984 12.836Z" fill="#A3A3A3" />
    <defs>
      <linearGradient id="x_grad" x1="27.8" y1="25.56" x2="1.13" y2="-0.91" gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0" /><stop offset="1" stop-color="#53E6D4" />
      </linearGradient>
    </defs>
  </svg>
  <svg v-else-if="name === 'Discord'" width="32" height="32" viewBox="0 0 32 33" fill="none">
    <rect x="0.25" y="0.478" width="31.5" height="31.5" rx="7.75" fill="#262626" />
    <rect x="0.25" y="0.478" width="31.5" height="31.5" rx="7.75" stroke="url(#dc_grad)" stroke-width="0.5" />
    <path d="M23.3 9.565a19.4 19.4 0 0 0-4.34-1.337c-.19.329-.403.775-.552 1.125a18.6 18.6 0 0 0-4.81 0c-.148-.35-.37-.796-.55-1.125A19.4 19.4 0 0 0 8.71 9.565C5.96 13.62 5.22 17.578 5.59 21.483a19.3 19.3 0 0 0 5.318 2.664c.425-.573.807-1.189 1.136-1.836-.626-.234-1.22-.52-1.793-.86.149-.106.297-.223.435-.34 3.46 1.581 7.207 1.581 10.624 0 .149.117.287.234.436.34-.573.34-1.167.626-1.793.86.329.647.711 1.263 1.136 1.836a19.3 19.3 0 0 0 5.318-2.664c.456-4.521-.723-8.447-3.1-11.918ZM12.52 19.074c-1.04 0-1.889-.945-1.889-2.101 0-1.157.828-2.102 1.889-2.102 1.051 0 1.91.945 1.889 2.102 0 1.156-.838 2.101-1.889 2.101Zm6.974 0c-1.04 0-1.89-.945-1.89-2.101 0-1.157.829-2.102 1.89-2.102 1.05 0 1.91.945 1.889 2.102 0 1.156-.829 2.101-1.889 2.101Z" fill="#A3A3A3" />
    <defs>
      <linearGradient id="dc_grad" x1="27.8" y1="25.56" x2="1.13" y2="-0.91" gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0" /><stop offset="1" stop-color="#53E6D4" />
      </linearGradient>
    </defs>
  </svg>
  <svg v-else width="32" height="32" viewBox="0 0 48 48" fill="none">
    <rect x="0.375" y="0.375" width="47.25" height="47.25" rx="11.625" fill="#262626" />
    <rect x="0.375" y="0.375" width="47.25" height="47.25" rx="11.625" stroke="url(#li_grad)" stroke-width="0.75" />
    <path d="M34.11 11A2.89 2.89 0 0 1 37 13.89v20.22A2.89 2.89 0 0 1 34.11 37H13.89A2.89 2.89 0 0 1 11 34.11V13.89A2.89 2.89 0 0 1 13.89 11h20.22ZM33.39 33.39v-7.66a4.66 4.66 0 0 0-4.71-4.7c-1.23 0-2.66.75-3.35 1.88v-1.6h-4.03v12.09h4.03v-7.12c0-1.11.9-2.02 2.01-2.02a2.02 2.02 0 0 1 2.02 2.02v7.12h4.03ZM16.6 19.03a2.43 2.43 0 1 0 0-4.86 2.43 2.43 0 0 0 0 4.86Zm2.01 14.36V21.3h-4v12.09h4Z" fill="#A3A3A3" />
    <defs>
      <linearGradient id="li_grad" x1="41.74" y1="38" x2="1.69" y2="-1.7" gradientUnits="userSpaceOnUse">
        <stop stop-opacity="0" /><stop offset="1" stop-color="#53E6D4" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
})
</script>
