import type { Project, Skill, Experience, Education, PersonalInfo, SocialLink } from '~/types'

export const usePortfolioData = () => {
  const personalInfo: PersonalInfo = {
    name: 'Olivier Recher',
    title: 'Développeur Full-Stack',
    subtitle: 'Créateur d\'expériences web modernes',
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

  const projects: Project[] = [
    {
      id: '1',
      title: 'Portfolio 3D Interactif',
      description: 'Portfolio moderne avec animations Three.js et design épuré',
      longDescription: 'Un portfolio développé avec Nuxt 3, TypeScript et Three.js, mettant en avant des animations fluides et une expérience utilisateur immersive.',
      image: '/images/projects/portfolio.jpg',
      technologies: ['Nuxt.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'GSAP'],
      githubUrl: 'https://github.com/olivierrecher/portfolio',
      liveUrl: 'https://olivierrecher.dev',
      featured: true,
      category: 'web',
      year: 2024
    },
    {
      id: '2',
      title: 'E-commerce Vue.js',
      description: 'Plateforme e-commerce complète avec panier et paiement',
      longDescription: 'Application e-commerce développée avec Vue.js, incluant gestion des produits, panier, système de paiement et dashboard administrateur.',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/olivierrecher/ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true,
      category: 'web',
      year: 2023
    },
    {
      id: '3',
      title: 'Dashboard Analytics',
      description: 'Tableau de bord avec visualisations de données en temps réel',
      longDescription: 'Dashboard interactif pour l\'analyse de données avec graphiques dynamiques, filtres avancés et export de rapports.',
      image: '/images/projects/dashboard.jpg',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/olivierrecher/dashboard',
      liveUrl: 'https://dashboard-demo.vercel.app',
      featured: false,
      category: 'web',
      year: 2023
    }
  ]

  const experiences: Experience[] = [
    {
      id: '1',
      company: 'TechCorp',
      position: 'Développeur Full-Stack Senior',
      startDate: '2022-01',
      current: true,
      description: [
        'Développement d\'applications web modernes avec Vue.js et Node.js',
        'Architecture et optimisation de bases de données PostgreSQL',
        'Mentorat d\'une équipe de 3 développeurs juniors',
        'Mise en place de pipelines CI/CD avec Docker et AWS'
      ],
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      location: 'Paris, France'
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Développeur Frontend',
      startDate: '2020-06',
      endDate: '2021-12',
      current: false,
      description: [
        'Développement d\'interfaces utilisateur avec React et TypeScript',
        'Intégration d\'APIs REST et GraphQL',
        'Optimisation des performances et SEO',
        'Collaboration avec l\'équipe design pour l\'UX'
      ],
      technologies: ['React', 'TypeScript', 'GraphQL', 'Tailwind CSS'],
      location: 'Lyon, France'
    }
  ]

  const education: Education[] = [
    {
      id: '1',
      institution: 'École Supérieure d\'Informatique',
      degree: 'Master',
      field: 'Informatique et Technologies Web',
      startDate: '2018',
      endDate: '2020',
      description: 'Spécialisation en développement web et technologies émergentes'
    },
    {
      id: '2',
      institution: 'Université de Technologie',
      degree: 'Licence',
      field: 'Informatique',
      startDate: '2015',
      endDate: '2018'
    }
  ]

  return {
    personalInfo,
    skills,
    projects,
    experiences,
    education
  }
}
