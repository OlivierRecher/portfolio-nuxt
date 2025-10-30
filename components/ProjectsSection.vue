<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ $t('projects.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {{ $t('projects.subtitle') }}
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <UButton
            v-for="category in categories"
            :key="category.value"
            :color="''"
            :variant="selectedCategory === category.value ? 'solid' : 'outline'"
            @click="selectedCategory = category.value"
            :class="['px-6 py-2 hover:cursor-pointer', selectedCategory === category.value ? 'gradient-button' : '']"
          >
            {{ category.label }}
          </UButton>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="projectId in projectIds"
            :key="projectId"
            class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden">
              <img
                :src="projectMetadata[projectId].image"
                :alt="$t(`projects.items.${projectId}.title`)"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Featured Badge -->
              <div v-if="projectMetadata[projectId].featured" class="absolute top-4 left-4">
                <span class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ {{ $t('projects.featured') }}
                </span>
              </div>

              <!-- Year Badge -->
              <div class="absolute top-4 right-4">
                <span class="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                  {{ projectMetadata[projectId].year }}
                </span>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="flex space-x-4">
                  <UButton
                    v-if="projectMetadata[projectId].githubUrl"
                    :to="projectMetadata[projectId].githubUrl"
                    target="_blank"
                    color="neutral"
                    variant="solid"
                    size="lg"
                    class="px-6"
                  >
                    <UIcon name="i-simple-icons-github" class="w-5 h-5 mr-2" />
                    {{ $t('projects.actions.code') }}
                  </UButton>
                  <UButton
                    v-if="projectMetadata[projectId].liveUrl"
                    :to="projectMetadata[projectId].liveUrl"
                    target="_blank"
                    color="primary"
                    variant="solid"
                    size="lg"
                    class="px-6 gradient-button"
                  >
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-5 h-5 mr-2" />
                    {{ $t('projects.actions.demo') }}
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {{ $t(`projects.items.${projectId}.title`) }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {{ $t(`projects.items.${projectId}.description`) }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="(tech, techIndex) in projectMetadata[projectId].technologies"
                  :key="techIndex"
                  class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="projectMetadata[projectId].technologies.length > 3"
                  class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  +{{ projectMetadata[projectId].technologies.length - 3 }}
                </span>
              </div>

              <!-- Project Actions -->
              <div class="flex justify-end items-center">
                <div class="flex space-x-2">
                  <UButton
                    v-if="projectMetadata[projectId].githubUrl"
                    :to="projectMetadata[projectId].githubUrl"
                    target="_blank"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    :aria-label="`${$t('projects.actions.code')} - ${$t(`projects.items.${projectId}.title`)}`"
                  >
                    <UIcon name="i-simple-icons-github" class="w-4 h-4" />
                  </UButton>
                  <UButton
                    v-if="projectMetadata[projectId].liveUrl"
                    :to="projectMetadata[projectId].liveUrl"
                    target="_blank"
                    color="neutral"
                    variant="ghost"
                    size="sm"
                    :aria-label="`${$t('projects.actions.demo')} - ${$t(`projects.items.${projectId}.title`)}`"
                  >
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4" />
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePortfolioData } from '~/composables/usePortfolioData'

const { projectMetadata } = usePortfolioData()
const { tm } = useI18n()

const selectedCategory = ref('all')

const categories = computed(() => [
  { label: $t('projects.filters.all'), value: 'all' },
  { label: $t('projects.filters.web'), value: 'web' },
  { label: $t('projects.filters.mobile'), value: 'mobile' },
  { label: $t('projects.filters.other'), value: 'other' }
])

const projectIds = computed(() => {
  const ids = Object.keys(projectMetadata)
  if (selectedCategory.value === 'all') {
    return ids
  }
  return ids.filter(id => projectMetadata[id].category === selectedCategory.value)
})

</script>
