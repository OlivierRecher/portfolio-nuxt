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
    { name: 'Vue.js', icon: 'i-logos-vue', category: 'frontend', level: 'expert', description: 'Framework JavaScript moderne' },
    { name: 'Nuxt.js', icon: 'i-logos-nuxt-icon', category: 'frontend', level: 'expert', description: 'Framework Vue.js full-stack' },
    { name: 'React', icon: 'i-logos-react', category: 'frontend', level: 'intermediate', description: 'Bibliothèque UI JavaScript' },
    { name: 'TypeScript', icon: 'i-logos-typescript-icon', category: 'frontend', level: 'advanced', description: 'JavaScript typé' },
    { name: 'JavaScript', icon: 'i-logos-javascript', category: 'frontend', level: 'advanced', description: 'JavaScript' },
    { name: 'Tailwind CSS', icon: 'i-logos-tailwindcss-icon', category: 'frontend', level: 'expert', description: 'Framework CSS utilitaire' },
    { name: 'Flutter', icon: 'i-logos-flutter', category: 'frontend', level: 'intermediate', description: 'Framework mobile cross-platform' },
    
    // Backend
    { name: 'Symfony', icon: 'i-logos-symfony', category: 'backend', level: 'advanced', description: 'Framework PHP' },
    { name: 'PHP', icon: 'i-logos-php', category: 'backend', level: 'advanced', description: 'PHP' },
    { name: 'Node.js', icon: 'i-logos-nodejs-icon', category: 'backend', level: 'advanced', description: 'Runtime JavaScript' },
    { name: 'Express', icon: 'i-logos-express', category: 'backend', level: 'advanced', description: 'Framework web Node.js' },
    { name: 'SQL', icon: 'i-logos-mysql', category: 'backend', level: 'advanced', description: 'Langage de requête base de données' },
    { name: 'MongoDB', icon: 'i-logos-mongodb-icon', category: 'backend', level: 'intermediate', description: 'Base de données NoSQL' },
    { name: 'C', icon: 'i-logos-c', category: 'backend', level: 'intermediate', description: 'Langage de programmation système' },
    { name: 'Hugo', icon: 'i-logos-hugo', category: 'backend', level: 'beginner', description: 'Générateur de site statique' },
    { name: 'Python', icon: 'i-logos-python', category: 'backend', level: 'intermediate', description: 'Langage de programmation polyvalent' },
    
    // Tools & DevOps
    { name: 'Git', icon: 'i-logos-git-icon', category: 'tools', level: 'expert', description: 'Contrôle de version' },
    { name: 'GitLab', icon: 'i-logos-gitlab', category: 'tools', level: 'advanced', description: 'DevOps et Git' },
    { name: 'GitHub', icon: 'i-logos-github-icon', category: 'tools', level: 'intermediate', description: 'Plateforme Git' },
    { name: 'Docker', icon: 'i-logos-docker-icon', category: 'tools', level: 'advanced', description: 'Conteneurisation' },
    { name: 'CI/CD', icon: 'i-logos-github-actions', category: 'tools', level: 'intermediate', description: 'Intégration et déploiement continu' },
    { name: 'AWS', icon: 'i-logos-aws', category: 'tools', level: 'intermediate', description: 'Cloud computing' },
    { name: 'Vercel', icon: 'i-logos-vercel-icon', category: 'tools', level: 'advanced', description: 'Plateforme de déploiement' },
    { name: 'Vite', icon: 'i-logos-vitejs', category: 'frontend', level: 'intermediate', description: 'Build tool moderne' },
    { name: 'Bash', icon: 'i-logos-bash', category: 'tools', level: 'advanced', description: 'Scripting shell Unix/Linux' },
    { name: 'Postman', icon: 'i-logos-postman-icon', category: 'tools', level: 'intermediate', description: 'Test d\'APIs' },
    { name: 'Bruno', icon: 'i-simple-icons-bruno', category: 'tools', level: 'advanced', description: 'Client API alternatif' },
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
