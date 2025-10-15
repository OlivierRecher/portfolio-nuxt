<template>
  <div ref="container" class="absolute inset-0 z-0"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'

const container = ref<HTMLElement>()

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particles: THREE.Points
let wireframe: THREE.LineSegments
let animationId: number

onMounted(() => {
  initThreeJS()
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
  if (!container.value) return;

  // Scene setup
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ 
    alpha: true, 
    antialias: true,
    powerPreference: 'high-performance'
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  // Create particle system
  createParticleSystem()
  createWireframeGeometry()
  
  // Camera position
  camera.position.z = 8

  // Start animation loop
  animate()
  
  // Handle resize
  window.addEventListener('resize', onWindowResize)
}

const createParticleSystem = () => {
  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    // Create a sphere distribution
    const radius = Math.random() * 15 + 5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)

    // Blue to purple gradient
    const color = new THREE.Color()
    const hue = 0.6 + Math.random() * 0.3
    color.setHSL(hue, 0.8, 0.6)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b

    sizes[i] = Math.random() * 0.02 + 0.01
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

const createWireframeGeometry = () => {
  const geometry = new THREE.IcosahedronGeometry(3, 1)
  const material = new THREE.LineBasicMaterial({
    color: 0x3b82f6,
    transparent: true,
    opacity: 0.3
  })
  
  wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    material
  )
  
  scene.add(wireframe)
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  const time = Date.now() * 0.001
  
  if (particles) {
    particles.rotation.x = time * 0.1
    particles.rotation.y = time * 0.05
    
    // Animate particle positions
    const positions = particles.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.001
    }
    particles.geometry.attributes.position.needsUpdate = true
  }
  
  if (wireframe) {
    wireframe.rotation.x = time * 0.2
    wireframe.rotation.y = time * 0.1
  }
  
  renderer.render(scene, camera)
}

const onWindowResize = () => {
  if (!camera || !renderer) return
  
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
</script>
