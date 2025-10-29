import emailjs from '@emailjs/browser'
import type { ContactForm } from '~/types'

export const useContactForm = () => {
  const config = useRuntimeConfig()
  
  const sendEmail = async (formData: ContactForm) => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Olivier Recher'
      }

      const response = await emailjs.send(
        config.public.emailjsServiceId,
        config.public.emailjsTemplateId,
        templateParams,
        config.public.emailjsPublicKey
      )

      return { success: true, response }
    } catch (error) {
      console.error('EmailJS error:', error)
      return { success: false, error }
    }
  }

  return {
    sendEmail
  }
}
