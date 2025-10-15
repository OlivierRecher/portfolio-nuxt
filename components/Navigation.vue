<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <UIcon name="i-lucide-code" class="text-white text-sm" />
          </div>
          <span class="text-xl font-bold text-white">Olivier Recher</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            :href="`#${item.id}`"
            class="text-gray-300 hover:text-white transition-colors duration-200"
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <UButton
          v-if="!isMobileMenuOpen"
          icon="i-lucide-menu"
          color="white"
          variant="ghost"
          class="md:hidden"
          @click="isMobileMenuOpen = true"
        />
        
        <!-- Mobile Menu Close Button -->
        <UButton
          v-else
          icon="i-lucide-x"
          color="white"
          variant="ghost"
          class="md:hidden"
          @click="isMobileMenuOpen = false"
        />
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 py-4 border-t border-white/10"
      >
        <div class="flex flex-col space-y-4">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            :href="`#${item.id}`"
            class="text-gray-300 hover:text-white transition-colors duration-200 py-2"
            @click="scrollToSection(item.id); isMobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)

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

// Close mobile menu on scroll
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false
    }
  })
})
</script>
