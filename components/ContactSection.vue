<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ $t('contact.title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ $t('contact.subtitle') }}
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {{ $t('contact.info.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-8">
                {{ $t('contact.info.description') }}
              </p>
            </div>

            <!-- Contact Details -->
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.info.email') }}</h4>
                  <a 
                    :href="`mailto:recher.olivier@outlook.fr`"
                    class="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    recher.olivier@outlook.fr
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.info.location') }}</h4>
                  <p class="text-gray-600 dark:text-gray-300">{{ personalInfo.location }}</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-clock" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.info.availability') }}</h4>
                  <p class="text-gray-600 dark:text-gray-300">{{ $t('contact.info.response') }}</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-4">{{ $t('contact.info.social') }}</h4>
              <div class="flex space-x-4">
                <a
                  v-for="link in personalInfo.socialLinks"
                  :key="link.name"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all duration-300 hover:scale-110 shadow-lg"
                  :aria-label="link.name"
                >
                  <UIcon :name="link.icon" class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {{ $t('contact.form.title') }}
            </h3>

            <UForm
              :state="form"
              :schema="schema"
              @submit="onSubmit"
              class="space-y-6"
            >
              <UFormGroup :label="$t('contact.form.fields.name')" name="name" required>
                <UInput
                  v-model="form.name"
                  :placeholder="$t('contact.form.placeholders.name')"
                  size="lg"
                />
              </UFormGroup>

              <UFormGroup :label="$t('contact.form.fields.email')" name="email" required>
                <UInput
                  v-model="form.email"
                  type="email"
                  placeholder="votre@email.com"
                  size="lg"
                />
              </UFormGroup>

              <UFormGroup :label="$t('contact.form.fields.subject')" name="subject" required>
                <UInput
                  v-model="form.subject"
                  :placeholder="$t('contact.form.placeholders.subject')"
                  size="lg"
                />
              </UFormGroup>

              <UFormGroup :label="$t('contact.form.fields.message')" name="message" required>
                <UTextarea
                  v-model="form.message"
                  :placeholder="$t('contact.form.placeholders.message')"
                  :rows="5"
                  size="lg"
                />
              </UFormGroup>

              <UButton
                type="submit"
                color="primary"
                size="lg"
                :loading="isSubmitting"
                class="w-full gradient-button"
              >
                <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5 mr-2" />
                {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.submit') }}
              </UButton>
            </UForm>

            <!-- Success Message -->
            <UAlert
              v-if="isSuccess"
              color="success"
              variant="soft"
              :title="$t('contact.form.success.title')"
              :description="$t('contact.form.success.description')"
              class="mt-6"
            />

            <!-- Error Message -->
            <UAlert
              v-if="isError"
              color="error"
              variant="soft"
              :title="$t('contact.form.error.title')"
              :description="errorMessage"
              class="mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import { usePortfolioData } from '~/composables/usePortfolioData'
import { useContactForm } from '~/composables/useContactForm'
import type { ContactForm } from '~/types'

const { personalInfo } = usePortfolioData()
const { sendEmail } = useContactForm()

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const schema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const isError = ref(false)
const errorMessage = ref('')

const onSubmit = async (event: any) => {
  isSubmitting.value = true
  isSuccess.value = false
  isError.value = false

  try {
    const result = await sendEmail(form)
    
    if (result.success) {
      // Reset form
      Object.assign(form, {
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      isSuccess.value = true
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        isSuccess.value = false
      }, 5000)
    } else {
      throw new Error('Failed to send email')
    }
    
  } catch (error) {
    isError.value = true
    errorMessage.value = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

