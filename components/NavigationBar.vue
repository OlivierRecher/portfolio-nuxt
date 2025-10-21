<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="size-16 flex items-center justify-center">
            <img 
              src="/images/logo_light.png" 
              alt="Logo" 
              class="size-16 dark:hidden"
            />
            <img 
              src="/images/logo_dark.png"
              alt="Logo" 
              class="size-16 hidden dark:block"
            />
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white">
            {{ personalInfo.name.split(' ')[0] }}
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navigationItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="scrollToSection(item.id)"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            :class="{ 'text-blue-600 dark:text-blue-400': activeSection === item.id }"
          >
            {{ $t(`nav.${item.id}`) }}
          </a>
        </div>

        <!-- Theme Toggle, Language Switcher & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <LanguageSwitcher />
          
          <!-- Theme Toggle -->
          <UButton
            color="neutral"
            variant="ghost"
            size="sm"
            @click="toggleTheme"
            :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
          >
            <UIcon 
              :name="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'" 
              class="w-5 h-5" 
            />
          </UButton>

          <!-- Mobile Menu Button -->
          <UButton
            color="neutral"
            variant="ghost"
            size="sm"
            class="md:hidden"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          >
            <UIcon 
              :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" 
              class="w-5 h-5" 
            />
          </UButton>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
      >
        <div class="py-4 space-y-2">
          <a
            v-for="item in navigationItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="scrollToSection(item.id); isMobileMenuOpen = false"
            class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 font-medium"
            :class="{ 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800': activeSection === item.id }"
          >
            {{ $t(`nav.${item.id}`) }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePortfolioData } from '~/composables/usePortfolioData'
import { scrollToSection } from '~/utils/scroll'

const { personalInfo } = usePortfolioData()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navigationItems = [
  { id: 'about', label: 'À Propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Expérience' },
  { id: 'contact', label: 'Contact' }
]

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const loading = ref(true)
onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Update active section based on scroll position
  const sections = navigationItems.map(item => document.getElementById(item.id)).filter(Boolean)
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
