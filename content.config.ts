import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yaml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        github: z.string(),
        linkedin: z.string(),
        experience: z.object({
          title: z.string(),
          description: z.string(),
          items: z.array(
            z.object({
              date: z.string(),
              title: z.string(),
              role: z.string(),
              description: z.string(),
              highlights: z.array(z.string()),
              tags: z.array(z.string()),
            }),
          ),
        }),
        skill: z.object({
          title: z.string(),
          description: z.string(),
          items: z.array(
            z.object({
              title: z.string(),
              icon: z.string(),
              items: z.array(z.string()),
            }),
          ),
        }),
        blog: z.object({
          title: z.string(),
          description: z.string(),
        }),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog.yaml',
    }),
    posts: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.string(),
        image: z.object({
          src: property(z.string()).editor({ input: 'media' }),
        }),
        badge: z.object({ label: z.string().nonempty() }),
      }),
    }),
  },
})
