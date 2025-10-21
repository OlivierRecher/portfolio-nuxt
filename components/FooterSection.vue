<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Main Footer Content -->
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Brand -->
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {{ personalInfo.name }}
            </h3>
            <p class="text-gray-300 mb-6 max-w-md">
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
                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
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
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  @click="scrollToSection('skills')"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  @click="scrollToSection('projects')"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Projets
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  @click="scrollToSection('experience')"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Expérience
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  @click="scrollToSection('contact')"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
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
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                recher.olivier@outlook.fr
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-blue-400" />
                <span class="text-gray-300">{{ personalInfo.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-400 text-sm mb-4 md:mb-0">
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
