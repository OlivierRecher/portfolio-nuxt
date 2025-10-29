<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales - Olivier Recher',
  ogTitle: 'Mentions légales - Olivier Recher',
  description: 'Mentions légales du site portfolio d\'Olivier Recher',
  ogDescription: 'Mentions légales du site portfolio d\'Olivier Recher',
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <NavigationBar />
    
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          {{ $t('legal.title') }}
        </h1>

        <div class="space-y-8">
          <!-- Éditeur du site -->
          <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ $t('legal.sections.editor.title') }}
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>{{ $t('legal.sections.editor.name') }}</strong></p>
              <p>{{ $t('legal.sections.editor.address') }}</p>
              <p>{{ $t('legal.sections.editor.phone') }}</p>
              <p>
                <a 
                  :href="`mailto:recher.olivier@outlook.fr`"
                  class="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  recher.olivier@outlook.fr
                </a>
              </p>
            </div>
          </section>

          <!-- Hébergement -->
          <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ $t('legal.sections.hosting.title') }}
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>{{ $t('legal.sections.hosting.provider') }}</strong></p>
              <p>{{ $t('legal.sections.hosting.address') }}</p>
              <p>
                <a 
                  :href="$t('legal.sections.hosting.website')"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  {{ $t('legal.sections.hosting.website') }}
                </a>
              </p>
            </div>
          </section>

          <!-- Directeur de publication -->
          <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ $t('legal.sections.director.title') }}
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>{{ $t('legal.sections.director.name') }}</strong></p>
            </div>
          </section>

          <!-- Protection des données personnelles -->
          <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ $t('legal.sections.dataProtection.title') }}
            </h2>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <p>{{ $t('legal.sections.dataProtection.description') }}</p>
              <p>{{ $t('legal.sections.dataProtection.rights') }}</p>
            </div>
          </section>

          <!-- Cookies -->
          <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ $t('legal.sections.cookies.title') }}
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <p>{{ $t('legal.sections.cookies.description') }}</p>
            </div>
          </section>

          <!-- Propriété intellectuelle -->
          <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ $t('legal.sections.intellectualProperty.title') }}
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <p>{{ $t('legal.sections.intellectualProperty.description') }}</p>
            </div>
          </section>

          <!-- Limitation de responsabilité -->
          <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ $t('legal.sections.liability.title') }}
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <p>{{ $t('legal.sections.liability.description') }}</p>
            </div>
          </section>

          <!-- Liens externes -->
          <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {{ $t('legal.sections.externalLinks.title') }}
            </h2>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <p>{{ $t('legal.sections.externalLinks.description') }}</p>
            </div>
          </section>
        </div>

        <!-- Back to home link -->
        <div class="mt-8">
          <NuxtLink
            to="/"
            class="inline-flex items-center space-x-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
          >
            <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
            <span>{{ $t('common.backToHome') }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

