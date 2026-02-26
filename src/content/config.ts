import { defineCollection, z } from "astro:content";

const skills = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        lede: z.string(),
        icon: z.string().optional(),
        // Optional: add later when you want structured galleries
        gallery: z.array(z.object({
            src: z.string(),
            alt: z.string(),
            caption: z.string().optional(),
        })).optional(),
    }),
});

export const collections = { skills };