<template>
  <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ $t('about.title') }}
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {{ personalInfo.subtitle }}
              </h3>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {{ personalInfo.description }}
              </p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionné par l'innovation et les technologies émergentes, je mets mon expertise 
                au service de projets ambitieux. Mon approche combine créativité technique et 
                rigueur méthodologique pour livrer des solutions robustes et évolutives.
              </p>
            </div>

            <!-- Key Points -->
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <UIcon name="i-heroicons-code-bracket" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Développement Full-Stack</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Expertise en frontend et backend avec les technologies modernes
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <UIcon name="i-heroicons-paint-brush" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Design & UX</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Sensibilité artistique et focus sur l'expérience utilisateur
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <UIcon name="i-heroicons-rocket-launch" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Performance</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Optimisation et mise en production d'applications scalables
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <UIcon name="i-heroicons-academic-cap" class="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Formation Continue</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Veille technologique constante et apprentissage permanent
                  </p>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-4 pt-6">
              <UButton
                color="primary"
                size="lg"
                :to="personalInfo.resumeUrl"
                target="_blank"
                class="px-6 py-3"
              >
                <UIcon name="i-heroicons-document-arrow-down" class="w-5 h-5 mr-2" />
                Télécharger CV
              </UButton>
              <UButton
                color="neutral"
                variant="outline"
                size="lg"
                @click="scrollToSection('contact')"
                class="px-6 py-3"
              >
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-2" />
                Me contacter
              </UButton>
            </div>
          </div>

          <!-- Image -->
          <div class="relative">
            <div class="relative z-10">
              <img 
                :src="personalInfo.avatar" 
                :alt="personalInfo.name"
                class="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20"></div>
            
            <!-- Floating cards -->
            <div class="absolute top-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm font-medium text-gray-900 dark:text-white">Disponible</span>
              </div>
            </div>
            
            <div class="absolute bottom-8 -right-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-500">4+</div>
                <div class="text-xs text-gray-600 dark:text-gray-300">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioData } from '~/composables/usePortfolioData'
import { scrollToSection } from '~/utils/scroll'

const { personalInfo } = usePortfolioData()
</script>
