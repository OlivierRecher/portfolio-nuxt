<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Projets
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Découvrez mes réalisations récentes et les technologies que j'utilise
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <UButton
            v-for="category in categories"
            :key="category.value"
            :color="selectedCategory === category.value ? 'primary' : ''"
            :variant="selectedCategory === category.value ? 'solid' : 'outline'"
            @click="selectedCategory = category.value"
            class="px-6 py-2"
          >
            {{ category.label }}
          </UButton>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Featured Badge -->
              <div v-if="project.featured" class="absolute top-4 left-4">
                <span class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ Projet phare
                </span>
              </div>

              <!-- Year Badge -->
              <div class="absolute top-4 right-4">
                <span class="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                  {{ project.year }}
                </span>
              </div>

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="flex space-x-4">
                  <UButton
                    v-if="project.githubUrl"
                    :to="project.githubUrl"
                    target="_blank"
                    color="white"
                    variant="solid"
                    size="lg"
                    class="px-6"
                  >
                    <UIcon name="i-simple-icons-github" class="w-5 h-5 mr-2" />
                    Code
                  </UButton>
                  <UButton
                    v-if="project.liveUrl"
                    :to="project.liveUrl"
                    target="_blank"
                    color="primary"
                    variant="solid"
                    size="lg"
                    class="px-6"
                  >
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-5 h-5 mr-2" />
                    Demo
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.technologies.length > 3"
                  class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>

              <!-- Project Actions -->
              <div class="flex justify-between items-center">
                <UButton
                  color="gray"
                  variant="ghost"
                  size="sm"
                  @click="selectedProject = project"
                >
                  <UIcon name="i-heroicons-eye" class="w-4 h-4 mr-2" />
                  Détails
                </UButton>
                <div class="flex space-x-2">
                  <UButton
                    v-if="project.githubUrl"
                    :to="project.githubUrl"
                    target="_blank"
                    color="gray"
                    variant="ghost"
                    size="sm"
                    :aria-label="`Voir le code de ${project.title}`"
                  >
                    <UIcon name="i-simple-icons-github" class="w-4 h-4" />
                  </UButton>
                  <UButton
                    v-if="project.liveUrl"
                    :to="project.liveUrl"
                    target="_blank"
                    color="gray"
                    variant="ghost"
                    size="sm"
                    :aria-label="`Voir la démo de ${project.title}`"
                  >
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4" />
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--TODO: rework Project Detail Modal -->
        <UModal v-model="isModalOpen">
          <UCard v-if="selectedProject">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold">{{ selectedProject.title }}</h3>
                <div class="flex space-x-2">
                  <UButton
                    v-if="selectedProject.githubUrl"
                    :to="selectedProject.githubUrl"
                    target="_blank"
                    color="gray"
                    variant="outline"
                    size="sm"
                  >
                    <UIcon name="i-simple-icons-github" class="w-4 h-4 mr-2" />
                    Code
                  </UButton>
                  <UButton
                    v-if="selectedProject.liveUrl"
                    :to="selectedProject.liveUrl"
                    target="_blank"
                    color="primary"
                    variant="solid"
                    size="sm"
                  >
                    <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-2" />
                    Demo
                  </UButton>
                </div>
              </div>
            </template>

            <div class="space-y-6">
              <img
                :src="selectedProject.image"
                :alt="selectedProject.title"
                class="w-full h-48 object-cover rounded-lg"
              />
              
              <div>
                <h4 class="font-semibold mb-2">Description :</h4>
                <p class="text-gray-600 dark:text-gray-300">{{ selectedProject.longDescription }}</p>
              </div>

              <div>
                <h4 class="font-semibold mb-2">Technologies utilisées :</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in selectedProject.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Année : {{ selectedProject.year }}</span>
                <span>Catégorie : {{ getCategoryLabel(selectedProject.category) }}</span>
              </div>
            </div>
          </UCard>
        </UModal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePortfolioData } from '~/composables/usePortfolioData'
import type { Project } from '~/types'

const { projects } = usePortfolioData()

const selectedProject = ref<Project | null>(null)
const selectedCategory = ref('all')

const isModalOpen = computed(() => !!selectedProject.value)

const categories = [
  { label: 'Tous', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Desktop', value: 'desktop' },
  { label: 'Autres', value: 'other' }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

const getCategoryLabel = (category: string): string => {
  const labels = {
    web: 'Web',
    mobile: 'Mobile',
    desktop: 'Desktop',
    other: 'Autres'
  }
  return labels[category as keyof typeof labels] || 'Autres'
}
</script>
