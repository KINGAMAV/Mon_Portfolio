export interface Testimonial {
  id?: string
  name: string
  email: string
  message: string
  rating: number
  company?: string
  role?: string
  created_at?: string
  approved?: boolean
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  stack: string[]
  features: string[]
  image: string
  demoLink?: string
  codeLink?: string
}

export interface Skill {
  name: string
  level: number
  icon: string
  category: 'frontend' | 'backend' | 'design' | 'other'
}
