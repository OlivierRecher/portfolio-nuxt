<script setup lang="ts">
useSeoMeta({
  title: 'Olivier Recher - Développeur Full-Stack',
  ogTitle: 'Olivier Recher - Développeur Full-Stack',
  description: 'Portfolio de développeur full-stack spécialisé en Vue.js, TypeScript et Three.js. Découvrez mes projets et compétences.',
  ogDescription: 'Portfolio de développeur full-stack spécialisé en Vue.js, TypeScript et Three.js. Découvrez mes projets et compétences.',
  ogImage: '/images/og-image.jpg',
})

//TODO: use performance optimizations
const { isLowEndDevice, prefersReducedMotion } = usePerformance()
</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    
    <AnimatedSection animation="fadeInUp">
      <HeroSection />
    </AnimatedSection>
    
    <AnimatedSection animation="fadeInUp" :delay="0.2">
      <AboutSection />
    </AnimatedSection>
    
    <AnimatedSection animation="fadeInUp" :delay="0.4">
      <SkillsSection />
    </AnimatedSection>
    
    <AnimatedSection animation="fadeInUp" :delay="0.6">
      <ProjectsSection />
    </AnimatedSection>
    
    <AnimatedSection animation="fadeInUp" :delay="0.8">
      <ExperienceSection />
    </AnimatedSection>
    
    <AnimatedSection animation="fadeInUp" :delay="1.0">
      <ContactSection />
    </AnimatedSection>
    
    <FooterSection />
  </div>
</template>
