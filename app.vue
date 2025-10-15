<script setup>
// SEO Meta tags
useHead({
  title: 'Olivier Recher - Ingénieur Développeur Web Full-Stack',
  meta: [
    { name: 'description', content: 'Portfolio d\'Olivier Recher, ingénieur développeur web full-stack spécialisé en React, Vue.js, Node.js et Three.js. Découvrez mes projets et compétences techniques.' },
    { name: 'keywords', content: 'développeur web, full-stack, React, Vue.js, Node.js, Three.js, portfolio, ingénieur, JavaScript, TypeScript' },
    { name: 'author', content: 'Olivier Recher' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: 'Olivier Recher - Ingénieur Développeur Web' },
    { property: 'og:description', content: 'Portfolio professionnel avec effets 3D interactifs' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://olivie.rrecher.com' },
    { property: 'og:image', content: '/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Olivier Recher - Ingénieur Développeur Web' },
    { name: 'twitter:description', content: 'Portfolio professionnel avec effets 3D interactifs' },
    { name: 'twitter:image', content: '/og-image.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://olivie.rrecher.com' }
  ]
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
