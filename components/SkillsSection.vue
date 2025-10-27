<template>
  <section id="skills" class="py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ $t('skills.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ $t('skills.subtitle') }}
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <!-- Skills Grid -->
        <div class="space-y-12">
          <!-- Frontend Skills -->
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <UIcon name="i-heroicons-computer-desktop" class="w-6 h-6 mr-3 text-blue-500" />
              {{ $t('skills.categories.frontend') }}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div
                v-for="skill in frontendSkills"
                :key="skill.name"
                class="group relative bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div class="text-center">
                  <div class="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <UIcon :name="skill.icon" class="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ skill.name }}</h4>
                </div>
                
                <!-- Hover effect -->
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <UIcon name="i-heroicons-server" class="w-6 h-6 mr-3 text-green-500" />
              {{ $t('skills.categories.backend') }}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div
                v-for="skill in backendSkills"
                :key="skill.name"
                class="group relative bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div class="text-center">
                  <div class="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <UIcon :name="skill.icon" class="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ skill.name }}</h4>
                </div>
                
                <!-- Hover effect -->
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <!-- Tools Skills -->
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <UIcon name="i-heroicons-wrench-screwdriver" class="w-6 h-6 mr-3 text-purple-500" />
              {{ $t('skills.categories.tools') }}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div
                v-for="skill in toolsSkills"
                :key="skill.name"
                class="group relative bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div class="text-center">
                  <div class="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <UIcon :name="skill.icon" class="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ skill.name }}</h4>
                </div>
                
                <!-- Hover effect -->
                <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioData } from '~/composables/usePortfolioData'

const { skills } = usePortfolioData()


const frontendSkills = computed(() => 
  skills.filter(skill => skill.category === 'frontend')
)

const backendSkills = computed(() => 
  skills.filter(skill => skill.category === 'backend')
)

const toolsSkills = computed(() => 
  skills.filter(skill => skill.category === 'tools')
)
</script>
