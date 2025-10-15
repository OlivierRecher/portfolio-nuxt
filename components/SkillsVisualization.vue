<template>
  <div ref="container" class="w-full h-96 relative">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl"></div>
    <div ref="threeContainer" class="absolute inset-0 rounded-2xl"></div>
    
    <!-- Skill labels overlay -->
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <div class="text-center">
        <h3 class="text-2xl font-bold text-white mb-2">Compétences Techniques</h3>
        <p class="text-gray-300">Hover sur les sphères pour explorer</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { gsap } from 'gsap'

const container = ref<HTMLElement>()
const threeContainer = ref<HTMLElement>()

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let skillSpheres: THREE.Mesh[] = []
let animationId: number
let mouse = new THREE.Vector2()
let raycaster = new THREE.Raycaster()

const skills = [
  { name: 'JavaScript', level: 95, color: 0xf7df1e },
  { name: 'React', level: 90, color: 0x61dafb },
  { name: 'Vue.js', level: 88, color: 0x4fc08d },
  { name: 'Node.js', level: 85, color: 0x68a063 },
  { name: 'TypeScript', level: 92, color: 0x3178c6 },
  { name: 'PHP', level: 80, color: 0x777bb4 },
  { name: 'Symfony', level: 75, color: 0x000000 },
  { name: 'Python', level: 70, color: 0x3776ab }
]

onMounted(() => {
  initThreeJS()
  createSkillSpheres()
  animate()
  
  // Mouse interaction
  if (threeContainer.value) {
    threeContainer.value.addEventListener('mousemove', onMouseMove)
    threeContainer.value.addEventListener('click', onMouseClick)
  }
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
  camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(400, 400)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  threeContainer.value.appendChild(renderer.domElement)

  camera.position.z = 8
}

const createSkillSpheres = () => {
  const radius = 2
  const sphereCount = skills.length
  
  for (let i = 0; i < sphereCount; i++) {
    const angle = (i / sphereCount) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    const y = (Math.random() - 0.5) * 2
    
    const geometry = new THREE.SphereGeometry(0.3, 16, 16)
    const material = new THREE.MeshPhongMaterial({
      color: skills[i].color,
      transparent: true,
      opacity: 0.8,
      emissive: skills[i].color,
      emissiveIntensity: 0.2
    })
    
    const sphere = new THREE.Mesh(geometry, material)
    sphere.position.set(x, y, z)
    sphere.userData = { skill: skills[i], originalY: y }
    
    scene.add(sphere)
    skillSpheres.push(sphere)
  }
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
  scene.add(ambientLight)
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  const time = Date.now() * 0.001
  
  // Rotate spheres around center
  skillSpheres.forEach((sphere, index) => {
    const angle = (index / skillSpheres.length) * Math.PI * 2 + time * 0.1
    const radius = 2
    sphere.position.x = Math.cos(angle) * radius
    sphere.position.z = Math.sin(angle) * radius
    sphere.position.y = sphere.userData.originalY + Math.sin(time + index) * 0.2
    
    // Gentle rotation
    sphere.rotation.x += 0.01
    sphere.rotation.y += 0.01
  })
  
  // Update raycaster
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(skillSpheres)
  
  // Reset all spheres
  skillSpheres.forEach(sphere => {
    sphere.scale.setScalar(1)
    sphere.material.opacity = 0.8
  })
  
  // Highlight hovered sphere
  if (intersects.length > 0) {
    const hoveredSphere = intersects[0].object as THREE.Mesh
    hoveredSphere.scale.setScalar(1.2)
    hoveredSphere.material.opacity = 1
    
    // Show skill info
    const skill = hoveredSphere.userData.skill
    console.log(`${skill.name}: ${skill.level}%`)
  }
  
  renderer.render(scene, camera)
}

const onMouseMove = (event: MouseEvent) => {
  if (!threeContainer.value) return
  
  const rect = threeContainer.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
}

const onMouseClick = (event: MouseEvent) => {
  const intersects = raycaster.intersectObjects(skillSpheres)
  if (intersects.length > 0) {
    const clickedSphere = intersects[0].object as THREE.Mesh
    const skill = clickedSphere.userData.skill
    
    // Animate click
    gsap.to(clickedSphere.scale, {
      x: 1.5,
      y: 1.5,
      z: 1.5,
      duration: 0.2,
      yoyo: true,
      repeat: 1
    })
    
    console.log(`Clicked on ${skill.name} - Level: ${skill.level}%`)
  }
}
</script>
