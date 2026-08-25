import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

export const CATEGORIES = [
  'Event Flyer',
  'Travel Flyer',
  'Brand Flyer',
  'Birthday Design',
  'Citation',
  'Seasonal',
  'Letterhead',
  'Business Card',
  'Invitation',
  'Brochure',
  'Calendar',
  'T-Shirt/Mockup',
  'Certificate',
  'Label',
  'ID Card',
  'Brand Identity',
] as const

const portfolio = defineCollection({
  name: 'portfolio',
  directory: 'content/portfolio',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.enum(CATEGORIES),
    description: z.string(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    year: z.string().optional(),
    tools: z.array(z.string()).default([]),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
})

const services = defineCollection({
  name: 'services',
  directory: 'content/services',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    price: z.string(),
    priceNote: z.string().optional(),
    summary: z.string(),
    category: z.enum(CATEGORIES).optional(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
})

const testimonials = defineCollection({
  name: 'testimonials',
  directory: 'content/testimonials',
  include: '**/*.md',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
})

const faqs = defineCollection({
  name: 'faqs',
  directory: 'content/faqs',
  include: '**/*.md',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
})

export default defineConfig({
  collections: [portfolio, services, testimonials, faqs],
})
