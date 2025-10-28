<template>
  <section id="experience" class="py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ $t('experience.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ $t('experience.subtitle') }}
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <!-- Experience Items -->
          <div class="space-y-12">
            <div
              class="relative flex items-start"
            >
              <!-- Timeline Dot -->
              <div class="relative z-10 flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-blue-500">
                <UIcon name="i-heroicons-briefcase" class="w-6 h-6 text-blue-500" />
              </div>

                  <!-- Header -->
              <div class="ml-8 flex-1">
                <div class="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {{ $t('experience.items.finvens.position') }}
                      </h3>
                      <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {{ $t('experience.items.finvens.company') }}
                      </h4>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <UIcon name="i-heroicons-map-pin" class="w-4 h-4 mr-1" />
                        {{ $t('experience.items.finvens.location') }}
                      </div>
                    </div>
                    <div class="mt-2 md:mt-0 text-right">
                      <div class="text-sm font-medium text-gray-900 dark:text-white">
                        {{ formatDate($t('experience.items.finvens.startDate')) }} - 
                        {{ $t('experience.items.finvens.current') ? $t('experience.present') : formatDate($t('experience.items.finvens.endDate')) }}
                      </div>
                      <div v-if="$t('experience.items.finvens.current')" class="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium mt-1">
                        <div class="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        {{ $t('experience.current') }}
                      </div>
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="mb-4">
                    <ul class="space-y-2">
                      <li
                        v-for="(item, itemIndex) in $tm('experience.items.finvens.description')"
                        :key="itemIndex"
                        class="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {{ item.loc.source }}
                      </li>
                    </ul>
                  </div>

                  <!-- Technologies -->
                  <div>
                    <h5 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">{{ $t('experience.technologies') }} :</h5>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in $tm('experience.items.finvens.technologies')"
                        :key="tech"
                        class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {{ tech.loc.source }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="relative flex items-start"
            >
              <!-- Timeline Dot -->
              <div class="relative z-10 flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-blue-500">
                <UIcon name="i-heroicons-briefcase" class="w-6 h-6 text-blue-500" />
              </div>

                  <!-- Header -->
              <div class="ml-8 flex-1">
                <div class="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {{ $t('experience.items.sopra-steria.position') }}
                      </h3>
                      <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {{ $t('experience.items.sopra-steria.company') }}
                      </h4>
                      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <UIcon name="i-heroicons-map-pin" class="w-4 h-4 mr-1" />
                        {{ $t('experience.items.sopra-steria.location') }}
                      </div>
                    </div>
                    <div class="mt-2 md:mt-0 text-right">
                      <div class="text-sm font-medium text-gray-900 dark:text-white">
                        {{ formatDate($t('experience.items.sopra-steria.startDate')) }} - {{ formatDate($t('experience.items.sopra-steria.endDate')) }}
                      </div>
                      <div v-if="$t('experience.items.sopra-steria.current')" class="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium mt-1">
                        <div class="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        {{ $t('experience.current') }}
                      </div>
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="mb-4">
                    <ul class="space-y-2">
                      <li
                        v-for="(item, itemIndex) in $tm('experience.items.sopra-steria.description')"
                        :key="itemIndex"
                        class="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <UIcon name="i-heroicons-check" class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {{ item.loc.source }}
                      </li>
                    </ul>
                  </div>

                  <!-- Technologies -->
                  <div>
                    <h5 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">{{ $t('experience.technologies') }} :</h5>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in $tm('experience.items.sopra-steria.technologies')"
                        :key="tech"
                        class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {{ tech.loc.source }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="mt-20">
          <h3 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {{ $t('experience.education.title') }}
          </h3>
          <!-- Engineering School -->
          <div class="grid md:grid-cols-2 gap-8">
            <div
              class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-white" />
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {{ $t('experience.education.items.1.degree') }} - {{ $t('experience.education.items.1.field') }}
                  </h4>
                  <h5 class="text-base font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    {{ $t('experience.education.items.1.institution') }}
                  </h5>
                  <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {{ $t('experience.education.items.1.startDate') }} - {{ $t('experience.education.items.1.endDate') }}
                  </div>
                  <p v-if="$t('experience.education.items.1.description')" class="text-sm text-gray-600 dark:text-gray-300">
                    {{ $t('experience.education.items.1.description') }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- University -->
            <div
              class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-heroicons-academic-cap" class="w-6 h-6 text-white" />
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {{ $t('experience.education.items.2.degree') }} - {{ $t('experience.education.items.2.field') }}
                  </h4>
                  <h5 class="text-base font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    {{ $t('experience.education.items.2.institution') }}
                  </h5>
                  <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {{ $t('experience.education.items.2.startDate') }} - {{ $t('experience.education.items.2.endDate') }}
                  </div>
                  <p v-if="$t('experience.education.items.2.description')" class="text-sm text-gray-600 dark:text-gray-300">
                    {{ $t('experience.education.items.2.description') }}
                  </p>
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
import { usePortfolioData } from '~/composables/usePortfolioData';

const { education } = usePortfolioData();


const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'long' 
  })
}
</script>
