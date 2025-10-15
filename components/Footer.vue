<template>
  <footer class="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <UIcon name="i-lucide-code" class="text-white text-sm" />
            </div>
            <span class="text-xl font-bold text-white">Olivier Recher</span>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Animé par l’innovation technologique, je conçois des applications web performantes et des expériences utilisateur soignées.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Navigation</h3>
          <div class="space-y-2">
            <a 
              v-for="item in navigationItems" 
              :key="item.id"
              :href="`#${item.id}`"
              class="block text-gray-400 hover:text-white transition-colors duration-200"
              @click="scrollToSection(item.id)"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
        
        <!-- Contact & Social -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Contact</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-mail" class="text-blue-400" />
              <span class="text-gray-400">olivier.recher@email.com</span>
            </div>
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-phone" class="text-blue-400" />
              <span class="text-gray-400">+33 6 XX XX XX XX</span>
            </div>
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-map-pin" class="text-blue-400" />
              <span class="text-gray-400">Paris, France</span>
            </div>
          </div>
          
          <!-- Social Links -->
          <div class="flex space-x-4 pt-4">
            <a 
              href="https://linkedin.com/in/olivier-recher" 
              target="_blank"
              class="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <UIcon name="i-lucide-linkedin" class="text-xl" />
            </a>
            <a 
              href="https://github.com/olivierrecher" 
              target="_blank"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <UIcon name="i-lucide-github" class="text-xl" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} Olivier Recher. Tous droits réservés.
        </p>
        <p class="text-gray-400 text-sm mt-2 md:mt-0">
          Développé avec ❤️ en Nuxt.js & Three.js
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navigationItems = [
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Expérience' },
  { id: 'contact', label: 'Contact' }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
