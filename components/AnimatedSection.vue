<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePerformance } from '~/composables/usePerformance'

interface Props {
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn'
  delay?: number
  duration?: number
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'fadeInUp',
  delay: 0,
  duration: 0.6,
  threshold: 0.1
})

const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)
const { prefersReducedMotion } = usePerformance()

let observer: IntersectionObserver | null = null

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isVisible.value) {
      if (prefersReducedMotion.value) {
        isVisible.value = true
      } else {
        setTimeout(() => {
          isVisible.value = true
        }, props.delay * 1000)
      }
    }
  })
}

onMounted(() => {
  if (!sectionRef.value) return

  observer = new IntersectionObserver(handleIntersection, {
    threshold: props.threshold,
    rootMargin: '0px 0px -50px 0px'
  })

  observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div
    ref="sectionRef"
    class="animated-section"
    :class="{ 'animate-on-scroll': isVisible }"
  >
    <slot />
  </div>
</template>

<style scoped>
.animated-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.animated-section.animate-on-scroll {
  opacity: 1;
  transform: translateY(0);
}

.animated-section[data-animation="fadeInLeft"] {
  transform: translateX(-30px);
}

.animated-section[data-animation="fadeInLeft"].animate-on-scroll {
  transform: translateX(0);
}

.animated-section[data-animation="fadeInRight"] {
  transform: translateX(30px);
}

.animated-section[data-animation="fadeInRight"].animate-on-scroll {
  transform: translateX(0);
}

.animated-section[data-animation="scaleIn"] {
  transform: scale(0.9);
}

.animated-section[data-animation="scaleIn"].animate-on-scroll {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .animated-section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
