import type { Project, Skill, Experience, Education, PersonalInfo, SocialLink } from '~/types'

export const usePortfolioData = () => {
  const personalInfo: PersonalInfo = {
    name: 'Olivier Recher',
    location: 'France',
    email: 'recher.olivier@outlook.fr',
    avatar: '/images/avatar.jpeg',
    resumeUrl: '/CV_Olivier_Recher.pdf',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/olivierrecher', icon: 'i-simple-icons-github' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/olivierrecher', icon: 'i-simple-icons-linkedin' },
      { name: 'Email', url: 'mailto:recher.olivier@outlook.fr', icon: 'i-heroicons-envelope' }
    ]
  }

  const skills: Skill[] = [
    // Frontend
    { name: 'Vue.js', icon: 'i-logos-vue', category: 'frontend' },
    { name: 'Nuxt.js', icon: 'i-logos-nuxt-icon', category: 'frontend' },
    { name: 'TypeScript', icon: 'i-logos-typescript-icon', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon', category: 'frontend' },
    { name: 'React', icon: 'i-logos-react', category: 'frontend' },
    { name: 'JavaScript', icon: 'i-logos-javascript', category: 'frontend' },
    { name: 'Flutter', icon: 'i-logos-flutter', category: 'frontend' },
    
    // Backend
    { name: 'Symfony', icon: 'i-logos-symfony', category: 'backend' },
    { name: 'PHP', icon: 'i-logos-php', category: 'backend' },
    { name: 'Node.js', icon: 'i-logos-nodejs-icon', category: 'backend' },
    { name: 'Express', icon: 'i-logos-express', category: 'backend' },
    { name: 'SQL', icon: 'i-logos-mysql', category: 'backend' },
    { name: 'MongoDB', icon: 'i-logos-mongodb-icon', category: 'backend' },
    { name: 'C', icon: 'i-logos-c', category: 'backend' },
    { name: 'Hugo', icon: 'i-logos-hugo', category: 'backend' },
    { name: 'Python', icon: 'i-logos-python', category: 'backend' },
    
    // Tools & DevOps
    { name: 'Git', icon: 'i-logos-git-icon', category: 'tools' },
    { name: 'GitLab', icon: 'i-logos-gitlab', category: 'tools' },
    { name: 'GitHub', icon: 'i-logos-github-icon', category: 'tools' },
    { name: 'Docker', icon: 'i-logos-docker-icon', category: 'tools' },
    { name: 'CI/CD', icon: 'i-logos-github-actions', category: 'tools' },
    { name: 'AWS', icon: 'i-logos-aws', category: 'tools' },
    { name: 'Vercel', icon: 'i-logos-vercel-icon', category: 'tools' },
    { name: 'Vite', icon: 'i-logos-vitejs', category: 'frontend' },
    { name: 'Bash', icon: 'i-logos-bash', category: 'tools' },
    { name: 'Postman', icon: 'i-logos-postman-icon', category: 'tools' },
    { name: 'Bruno', icon: 'i-simple-icons-bruno', category: 'tools' },
  ]

  // Project metadata (non-translatable data only)
  const projectMetadata: Record<string, {
    image: string
    githubUrl?: string
    liveUrl?: string
    featured: boolean
    category: 'web' | 'mobile' | 'other'
    year: number
    technologies: string[]
  }> = {
    '1': {
      image: '/images/projects/doodle-jump.jpeg',
      githubUrl: 'https://github.com/OlivierRecher/doodleGoofy',
      liveUrl: '',
      featured: true,
      category: 'web',
      year: 2024,
      technologies: ["TypeScript", "Algo génétiques", "Modèle MVC", "Tailwind CSS"]
    },
    '2': {
      image: '/images/projects/prevention.png',
      githubUrl: 'https://github.com/olivierrecher/alcoolytics',
      liveUrl: 'https://alcoolytics.com',
      featured: true,
      category: 'web',
      year: 2025,
      technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "LocalStorage"]
    },
    '3': {
      image: '/images/projects/pomodoro.png',
      githubUrl: 'https://github.com/PomoFocus/Flutter-Front',
      liveUrl: '',
      featured: false,
      category: 'mobile',
      year: 2023,
      technologies: ["Flutter", "Dart"]
    }
  }
  const experiencesMetaData: Record<string, {
    technologies: string[]
  }> = {
    'finvens': {
      technologies: ["Symfony", "Vue.js", "Nuxt.js", "PHP", "TypeScript", "Docker", "AWS", "REST API", "Tailwind CSS"],
    },
    'sopra-steria': {
      technologies: ["JavaScript", "PHP", "MySQL", "Tailwind CSS", "UI/UX"],
    },
  }

  return {
    personalInfo,
    skills,
    projectMetadata,
    experiencesMetaData,
  }
}
