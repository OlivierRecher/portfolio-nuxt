<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0">
      <!-- Floating geometric shapes -->
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
      <div class="floating-shape shape-5"></div>
      <div class="floating-shape shape-6"></div>
      
      <!-- Gradient orbs -->
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Avatar -->
        <div class="mb-8">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <img 
              :src="personalInfo.avatar" 
              :alt="personalInfo.name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">
          {{ personalInfo.name }}
        </h1>
        
        <!-- Subtitle -->
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-gray-300 animate-fade-in-up" style="animation-delay: 0.2s">
          {{ $t('hero.title') }}
        </h2>
        
        <!-- Description -->
        <p class="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s">
          {{ $t('hero.description') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style="animation-delay: 0.6s">
          <UButton
            size="lg"
            color="primary"
            variant="solid"
            @click="scrollToSection('projects')"
            class="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300 gradient-button"
          >
            {{ $t('hero.cta.projects') }}
          </UButton>
          <UButton
            size="lg"
            color="neutral"
            variant="outline"
            @click="scrollToSection('contact')"
            class="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            {{ $t('hero.cta.contact') }}
          </UButton>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6 animate-fade-in-up" style="animation-delay: 0.8s">
          <a
            v-for="link in personalInfo.socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="link.name"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <UIcon :name="link.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="animate-bounce">
        <UIcon name="i-heroicons-chevron-down" class="w-6 h-6 text-white/60" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioData } from '~/composables/usePortfolioData'
import { scrollToSection } from '~/utils/scroll'

const { personalInfo } = usePortfolioData()
</script>

<style scoped>
#hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
}

/* Light mode styles */
.light #hero {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
}

.light #hero h1 {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.light #hero h2 {
  color: #374151;
}

.light #hero p {
  color: #6b7280;
}

.light #hero .w-32 {
  border-color: rgba(0, 0, 0, 0.1);
}

.light #hero .w-12 {
  background: rgba(0, 0, 0, 0.05);
}

.light #hero .w-12:hover {
  background: rgba(0, 0, 0, 0.1);
}

/* Floating geometric shapes */
.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

/* Light mode floating shapes */
.light .floating-shape {
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: 1s;
}

.shape-5 {
  width: 70px;
  height: 70px;
  top: 70%;
  left: 60%;
  animation-delay: 3s;
}

.shape-6 {
  width: 90px;
  height: 90px;
  top: 10%;
  right: 50%;
  animation-delay: 5s;
}

/* Gradient orbs */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: drift 8s ease-in-out infinite;
}

/* Light mode gradient orbs */
.light .orb-1 {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
}

.light .orb-2 {
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
}

.light .orb-3 {
  background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
}

.orb-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.orb-2 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  top: 60%;
  right: 20%;
  animation-delay: 3s;
}

.orb-3 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
  bottom: 20%;
  left: 50%;
  animation-delay: 6s;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes drift {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Fade in animations */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-shape {
    width: 60px !important;
    height: 60px !important;
  }
  
  .gradient-orb {
    width: 120px !important;
    height: 120px !important;
  }
}

/* Light mode scroll indicator */
.light #hero .text-white\/60 {
  color: rgba(0, 0, 0, 0.6);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .floating-shape,
  .gradient-orb {
    animation: none;
  }
  
  .animate-fade-in-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>