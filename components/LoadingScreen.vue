<template>
  <div 
    v-if="isLoading" 
    class="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
  >
    <div class="text-center">
      <!-- Three.js Loading Animation -->
      <div ref="threeContainer" class="w-32 h-32 mx-auto mb-8"></div>\
      
      <!-- Loading Text -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white">Olivier Recher</h2>
        <p class="text-gray-300">Chargement du portfolio...</p>
        
        <!-- Progress Bar -->
        <div class="w-64 mx-auto bg-gray-700 rounded-full h-2">
          <div 
            class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            :style="{ width: `${loadingProgress}%` }"
          ></div>
        </div>
        
        <p class="text-sm text-gray-400">{{ loadingProgress }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'

const isLoading = ref(true)
const loadingProgress = ref(0)
const threeContainer = ref<HTMLElement>()

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let cube: THREE.Mesh
let animationId: number

onMounted(() => {
  initThreeJS()
  simulateLoading()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (renderer) {
    renderer.dispose()
  }
})

const initThreeJS = () => {
  if (!threeContainer.value) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  
  renderer.setSize(128, 128)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  threeContainer.value.appendChild(renderer.domElement)

  // Create rotating cube
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshPhongMaterial({
    color: 0x3b82f6,
    transparent: true,
    opacity: 0.8,
    emissive: 0x3b82f6,
    emissiveIntensity: 0.2
  })
  
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  
  // Add lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
  scene.add(ambientLight)
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)
  
  camera.position.z = 5
  
  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  if (cube) {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
  }
  
  renderer.render(scene, camera)
}

const simulateLoading = () => {
  const duration = 3000 // 3 seconds
  const startTime = Date.now()
  
  const updateProgress = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min((elapsed / duration) * 100, 100)
    
    loadingProgress.value = Math.round(progress)
    
    if (progress < 100) {
      requestAnimationFrame(updateProgress)
    } else {
      // Loading complete
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    }
  }
  
  updateProgress()
}
</script>
