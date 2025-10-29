<template>
  <div class="relative">
    <UButton
      color="gray"
      variant="ghost"
      size="sm"
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2"
    >
      <UIcon name="i-heroicons-language" class="w-4 h-4" />
      <span class="hidden sm:inline">{{ currentLocale.name }}</span>
      <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
    </UButton>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      class="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
    >
      <div class="py-2">
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="switchLanguage(locale.code)"
          class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3"
          :class="{ 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400': locale.code === currentLocale.code }"
        >
          <span class="text-lg">{{ getFlag(locale.code) }}</span>
          <span>{{ locale.name }}</span>
          <UIcon
            v-if="locale.code === currentLocale.code"
            name="i-heroicons-check"
            class="w-4 h-4 ml-auto"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { locale, locales, setLocale } = useI18n()

const isOpen = ref(false)

const availableLocales = computed(() => locales.value)
const currentLocale = computed(() => 
  availableLocales.value.find(l => l.code === locale.value) || availableLocales.value[0]
)

const getFlag = (code: string) => {
  const flags: Record<string, string> = {
    fr: '🇫🇷',
    en: '🇺🇸'
  }
  return flags[code] || '🌐'
}

const switchLanguage = async (newLocale: string) => {
  await setLocale(newLocale)
  isOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target?.closest('.relative')) {
      isOpen.value = false
    }
  })
})
</script>
