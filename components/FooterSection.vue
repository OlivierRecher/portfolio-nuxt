<template>
  <footer class="bg-gray-900 dark:bg-gray-900 text-white dark:text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Main Footer Content -->
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Brand -->
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {{ personalInfo.name }}
            </h3>
            <p class="text-gray-300 dark:text-gray-300 mb-6 max-w-md">
              {{ personalInfo.description }}
            </p>
            
            <!-- Social Links -->
            <div class="flex space-x-4">
              <a
                v-for="link in personalInfo.socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all duration-300 hover:scale-110 shadow-lg"
                :aria-label="link.name"
              >
                <UIcon :name="link.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Navigation</h4>
            <ul class="space-y-2">
              <li>
                <a 
                  href="#about" 
                  @click="scrollToSection('about')"
                  class="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  @click="scrollToSection('skills')"
                  class="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  @click="scrollToSection('projects')"
                  class="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300"
                >
                  Projets
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  @click="scrollToSection('experience')"
                  class="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300"
                >
                  Expérience
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  @click="scrollToSection('contact')"
                  class="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-blue-400" />
                <a 
                  :href="`mailto:recher.olivier@outlook.fr`"
                  class="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300"
                >
                recher.olivier@outlook.fr
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-blue-400" />
                <span class="text-gray-300 dark:text-gray-300">{{ personalInfo.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 dark:border-gray-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {{ currentYear }} {{ personalInfo.name }}. Tous droits réservés.
            </div>
            
            <!-- Back to Top Button -->
            <UButton
              color="neutral"
              variant="ghost"
              size="sm"
              @click="scrollToTop"
              class="flex items-center space-x-2"
            >
              <UIcon name="i-heroicons-arrow-up" class="w-4 h-4" />
              <span>Retour en haut</span>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioData } from '~/composables/usePortfolioData'
import { scrollToSection, scrollToTop } from '~/utils/scroll'

const { personalInfo } = usePortfolioData()

const currentYear = computed(() => new Date().getFullYear())

</script>

<style scoped>
/* Light mode styles for footer */
.light footer {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  color: #1f2937;
}

.light footer h3 {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.light footer .text-gray-300 {
  color: #6b7280;
}

.light footer .bg-gray-800 {
  background-color: #e5e7eb;
}


.light footer .border-gray-800 {
  border-color: #d1d5db;
}

.light footer .text-gray-400 {
  color: #9ca3af;
}

.light footer .hover\:text-white:hover {
  color: #1f2937;
}
</style>
