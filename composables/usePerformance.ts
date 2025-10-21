import { ref, onMounted, onUnmounted } from 'vue'

export const usePerformance = () => {
  const isLowEndDevice = ref(false)
  const prefersReducedMotion = ref(false)
  const connectionSpeed = ref<'slow' | 'fast' | 'unknown'>('unknown')

  const checkDeviceCapabilities = () => {
    // Check for low-end device
    const memory = (navigator as any).deviceMemory
    const cores = navigator.hardwareConcurrency
    
    if (memory && memory <= 4) {
      isLowEndDevice.value = true
    }
    
    if (cores && cores <= 2) {
      isLowEndDevice.value = true
    }

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      prefersReducedMotion.value = true
    }

    // Check connection speed
    const connection = (navigator as any).connection
    if (connection) {
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        connectionSpeed.value = 'slow'
      } else if (connection.effectiveType === '4g') {
        connectionSpeed.value = 'fast'
      }
    }
  }

  const optimizeForDevice = () => {
    if (isLowEndDevice.value) {
      // Disable heavy animations
      document.documentElement.style.setProperty('--animation-duration', '0.1s')
      document.documentElement.style.setProperty('--particle-count', '100')
    }

    if (prefersReducedMotion.value) {
      // Disable all animations
      document.documentElement.style.setProperty('--animation-duration', '0s')
      document.documentElement.style.setProperty('--particle-count', '0')
    }

    if (connectionSpeed.value === 'slow') {
      // Reduce image quality
      document.documentElement.style.setProperty('--image-quality', '0.7')
    }
  }

  const preloadCriticalResources = () => {
    // Preload critical images
    const criticalImages = [
      '/images/avatar.jpg',
      '/images/projects/portfolio.jpg'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }

  const enableServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    }
  }

  const optimizeImages = () => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src!
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))
  }

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  onMounted(() => {
    checkDeviceCapabilities()
    optimizeForDevice()
    preloadCriticalResources()
    enableServiceWorker()
    optimizeImages()
  })

  return {
    isLowEndDevice,
    prefersReducedMotion,
    connectionSpeed,
    debounce,
    throttle
  }
}
