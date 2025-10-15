<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Three.js Canvas Background -->
      <ThreeBackground />
      
      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div class="mb-8">
          <h1 class="text-6xl md:text-8xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Olivier Recher
            </span>
          </h1>
          <h2 class="text-2xl md:text-4xl text-gray-300 mb-6">
            Ingénieur Développeur Web Full-Stack
          </h2>
          <p class="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Animé par l’innovation technologique, je conçois des applications web performantes et des expériences utilisateur soignées.
          </p>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <UButton 
            size="xl" 
            color="primary" 
            variant="solid"
            class="px-8 py-4 text-lg font-semibold"
            @click="scrollToSection('about')"
          >
            Découvrir mon profil
          </UButton>
          <UButton 
            size="xl" 
            color="primary" 
            variant="outline"
            class="px-8 py-4 text-lg font-semibold"
            @click="scrollToSection('contact')"
          >
            Me contacter
          </UButton>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div class="animate-bounce">
          <UIcon name="i-lucide-chevron-down" class="text-white text-2xl" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-bold text-center text-white mb-16">
          À propos de moi
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-lg text-gray-300 leading-relaxed">
              Ingénieur développeur web passionné avec une expertise en développement full-stack. 
              Je me spécialise dans la création d'applications web modernes, performantes et évolutives.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              Mon approche combine créativité technique et rigueur méthodologique pour livrer 
              des solutions qui répondent parfaitement aux besoins métier tout en offrant 
              une expérience utilisateur exceptionnelle.
            </p>
            <div class="flex flex-wrap gap-4 mt-8">
              <UBadge color="primary" variant="soft" size="lg">Full-Stack Development</UBadge>
              <UBadge color="success" variant="soft" size="lg">Architecture Web</UBadge>
              <UBadge color="info" variant="soft" size="lg">Performance</UBadge>
              <UBadge color="warning" variant="soft" size="lg">Innovation</UBadge>
            </div>
          </div>
          
          <div class="relative">
            <!-- Placeholder for professional photo -->
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-center">
              <div class="w-48 h-48 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <UIcon name="i-lucide-user" class="text-6xl text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Olivier Recher</h3>
              <p class="text-blue-100">Ingénieur Développeur Web</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-4 bg-black/20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-bold text-center text-white mb-16">
          Compétences Techniques
        </h2>
        
        <!-- 3D Skills Visualization -->
        <div class="mb-16">
          <SkillsVisualization />
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <UIcon name="i-lucide-code" class="text-4xl text-blue-400 mb-4" />
            <h3 class="text-xl font-bold text-white mb-4">Frontend</h3>
            <div class="space-y-2">
              <div class="text-gray-300">React.js, Vue.js, Nuxt.js</div>
              <div class="text-gray-300">TypeScript, JavaScript ES6+</div>
              <div class="text-gray-300">Tailwind CSS, SCSS</div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <UIcon name="i-lucide-server" class="text-4xl text-green-400 mb-4" />
            <h3 class="text-xl font-bold text-white mb-4">Backend</h3>
            <div class="space-y-2">
              <div class="text-gray-300">Node.js, PHP, Symfony</div>
              <div class="text-gray-300">Express.js, Fastify</div>
              <div class="text-gray-300">MySQL, PostgreSQL, MongoDB</div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <UIcon name="i-lucide-cloud" class="text-4xl text-purple-400 mb-4" />
            <h3 class="text-xl font-bold text-white mb-4">DevOps & Cloud</h3>
            <div class="space-y-2">
              <div class="text-gray-300">Docker, Kubernetes</div>
              <div class="text-gray-300">AWS, Vercel, Netlify</div>
              <div class="text-gray-300">CI/CD, Git</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-bold text-center text-white mb-16">
          Projets Réalisés
        </h2>
        
        <!-- 3D Projects Gallery -->
        <ProjectsGallery />
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 px-4 bg-black/20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-bold text-center text-white mb-16">
          Expérience Professionnelle
        </h2>
        
        <div class="space-y-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 class="text-2xl font-bold text-white">Développeur Full-Stack Senior</h3>
                <p class="text-blue-400 text-lg">TechCorp Solutions</p>
              </div>
              <span class="text-gray-400">2022 - Présent</span>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Développement d'applications web complexes, architecture de solutions scalables, 
              et mentorat d'équipes de développement. Technologies : React, Node.js, AWS.
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 class="text-2xl font-bold text-white">Développeur Web</h3>
                <p class="text-blue-400 text-lg">Digital Agency</p>
              </div>
              <span class="text-gray-400">2020 - 2022</span>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Création de sites web et applications pour clients variés. 
              Spécialisation en Vue.js et Symfony.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-bold text-center text-white mb-16">
          Contactez-moi
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold text-white mb-6">Parlons de votre projet</h3>
            <p class="text-gray-300 mb-8">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter 
              de vos besoins et voir comment je peux vous aider.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <UIcon name="i-lucide-mail" class="text-blue-400 text-xl" />
                <span class="text-gray-300">olivier.recher@email.com</span>
              </div>
              <div class="flex items-center space-x-4">
                <UIcon name="i-lucide-phone" class="text-blue-400 text-xl" />
                <span class="text-gray-300">+33 6 XX XX XX XX</span>
              </div>
              <div class="flex items-center space-x-4">
                <UIcon name="i-lucide-map-pin" class="text-blue-400 text-xl" />
                <span class="text-gray-300">Paris, France</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <UForm :schema="contactSchema" :state="contactForm" @submit="onSubmit">
              <UFormGroup label="Nom" name="name" class="mb-4">
                <UInput v-model="contactForm.name" placeholder="Votre nom" />
              </UFormGroup>
              
              <UFormGroup label="Email" name="email" class="mb-4">
                <UInput v-model="contactForm.email" type="email" placeholder="votre@email.com" />
              </UFormGroup>
              
              <UFormGroup label="Message" name="message" class="mb-6">
                <UTextarea v-model="contactForm.message" placeholder="Votre message..." :rows="4" />
              </UFormGroup>
              
              <UButton type="submit" color="primary" size="lg" class="w-full">
                Envoyer le message
              </UButton>
            </UForm>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// import { z } from 'zod'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Contact form schema - simplified for now
const contactSchema = {
  name: { required: true, minLength: 2 },
  email: { required: true, type: 'email' },
  message: { required: true, minLength: 10 }
}

const contactForm = reactive({
  name: '',
  email: '',
  message: ''
})

onMounted(() => {
  setupScrollAnimations()
})

const setupScrollAnimations = () => {
  // GSAP scroll animations
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.fromTo('.hero-content', 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
  )
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const onSubmit = async (event: any) => {
  // Handle form submission
  console.log('Form submitted:', contactForm)
  // Here you would typically send the form data to your backend
}
</script>

<style scoped>
.hero-content {
  position: relative;
  z-index: 10;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}
</style>