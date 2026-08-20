import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: "page",
      source: "index.yaml",
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
});
