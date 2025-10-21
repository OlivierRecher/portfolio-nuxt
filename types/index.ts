export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'desktop' | 'other'
  year: number
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  description?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  current: boolean
  description: string[]
  technologies: string[]
  location: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  description: string
  location: string
  email: string
  phone?: string
  avatar: string
  resumeUrl?: string
  socialLinks: SocialLink[]
}
