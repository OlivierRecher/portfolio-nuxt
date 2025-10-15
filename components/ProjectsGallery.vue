<template>
  <div class="projects-gallery">
    <div 
      v-for="(project, index) in projects" 
      :key="index"
      class="project-card"
      @mouseenter="onProjectHover(index)"
      @mouseleave="onProjectLeave(index)"
    >
      <div class="project-image">
        <div ref="threeContainer" :data-project-index="index" class="three-container"></div>
        <div class="project-overlay">
          <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
          <p class="text-gray-300 text-sm mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <UBadge 
              v-for="tech in project.technologies" 
              :key="tech"
              :color="getTechColor(tech)"
              variant="soft"
              size="sm"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { gsap } from 'gsap'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plateforme e-commerce complète avec panier, paiement et gestion admin.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 0x3b82f6
  },
  {
    title: 'Mobile App',
    description: 'Application mobile cross-platform développée avec Flutter.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    color: 0x4fc08d
  },
  {
    title: 'Corporate Website',
    description: 'Site vitrine moderne avec CMS headless et optimisations SEO.',
    technologies: ['Nuxt.js', 'Tailwind', 'Strapi', 'Vercel'],
    color: 0x8b5cf6
  }
]

const threeContainers = ref<HTMLElement[]>([])
const scenes: THREE.Scene[] = []
const cameras: THREE.PerspectiveCamera[] = []
const renderers: THREE.WebGLRenderer[] = []
const projectMeshes: THREE.Mesh[] = []
const animationIds: number[] = []

onMounted(() => {
  nextTick(() => {
    initThreeJS()
  })
})

onUnmounted(() => {
  animationIds.forEach(id => cancelAnimationFrame(id))
  renderers.forEach(renderer => renderer.dispose())
})

const initThreeJS = () => {
  threeContainers.value.forEach((container, index) => {
    if (!container) return
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(300, 200)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    
    scenes.push(scene)
    cameras.push(camera)
    renderers.push(renderer)
    
    // Create project-specific geometry
    createProjectGeometry(scene, index)
    
    // Position camera
    camera.position.z = 5
    
    // Start animation
    animate(index)
  })
}

const createProjectGeometry = (scene: THREE.Scene, index: number) => {
  const project = projects[index]
  
  // Create a unique geometry for each project
  let geometry: THREE.BufferGeometry
  
  switch (index) {
    case 0: // E-commerce - Cube
      geometry = new THREE.BoxGeometry(2, 2, 2)
      break
    case 1: // Mobile App - Cylinder
      geometry = new THREE.CylinderGeometry(1, 1, 2, 8)
      break
    case 2: // Corporate Website - Octahedron
      geometry = new THREE.OctahedronGeometry(1.5)
      break
    default:
      geometry = new THREE.SphereGeometry(1, 16, 16)
  }
  
  const material = new THREE.MeshPhongMaterial({
    color: project.color,
    transparent: true,
    opacity: 0.8,
    emissive: project.color,
    emissiveIntensity: 0.1
  })
  
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
  projectMeshes.push(mesh)
  
  // Add lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
  scene.add(ambientLight)
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)
}

const animate = (index: number) => {
  const animateLoop = () => {
    if (projectMeshes[index]) {
      projectMeshes[index].rotation.x += 0.01
      projectMeshes[index].rotation.y += 0.01
    }
    
    if (renderers[index] && scenes[index] && cameras[index]) {
      renderers[index].render(scenes[index], cameras[index])
    }
    
    animationIds[index] = requestAnimationFrame(animateLoop)
  }
  
  animateLoop()
}

const onProjectHover = (index: number) => {
  if (projectMeshes[index]) {
    gsap.to(projectMeshes[index].scale, {
      x: 1.2,
      y: 1.2,
      z: 1.2,
      duration: 0.3,
      ease: 'power2.out'
    })
    
    gsap.to(projectMeshes[index].material, {
      opacity: 1,
      duration: 0.3
    })
  }
}

const onProjectLeave = (index: number) => {
  if (projectMeshes[index]) {
    gsap.to(projectMeshes[index].scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
    
    gsap.to(projectMeshes[index].material, {
      opacity: 0.8,
      duration: 0.3
    })
  }
}

const getTechColor = (tech: string): string => {
  const colorMap: Record<string, string> = {
    'React': 'info',
    'Vue.js': 'green',
    'Node.js': 'green',
    'MongoDB': 'green',
    'Flutter': 'info',
    'Dart': 'info',
    'Firebase': 'orange',
    'Nuxt.js': 'green',
    'Tailwind': 'info',
    'Strapi': 'purple',
    'Vercel': 'secondary'
  }
  return colorMap[tech] || 'secondary'
}
</script>

<style scoped>
.projects-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.project-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.three-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.project-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}
</style>
