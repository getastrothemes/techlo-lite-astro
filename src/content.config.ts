import config from ".astro/config.generated.json";
import { defineCollection } from "astro:content";
import { button, sectionsSchema } from "./sections.schema";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogFolder = config.settings.blogFolder || "blog";
const servicesFolder = config.settings.servicesFolder || "services";

const contentLoader = (base: string) =>
  glob({ pattern: "**/[^_]*.{md,mdx}", base });

// Universal Page Schema
export const page = z.object({
  title: z.string(),
  author: z.string().optional(),
  categories: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  date: z.date().optional(), // example date format 2022-01-01 or 2022-01-01T00:00:00+00:00 (Year-Month-Day Hour:Minute:Second+Timezone)
  description: z.string().optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
  button: button.optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  robots: z.string().optional(),
  excludeFromSitemap: z.boolean().optional(),
  excludeFromCollection: z.boolean().optional(),
  customSlug: z.string().optional(),
  canonical: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  disableTagline: z.boolean().optional(),
  hasFooterDarkBackground: z.boolean().optional(),
  ...sectionsSchema,
});

// Marquee Schema
export const marqueeConfig = z.object({
  elementWidth: z.string(),
  elementWidthAuto: z.boolean(),
  elementWidthResponsive: z.string(),
  pauseOnHover: z.boolean(),
  reverse: z.enum(["reverse", ""]).optional(), // Optional: "reverse" or an empty string
  duration: z.string(),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: contentLoader("./src/content/pages"),
  schema: page,
});

// Service collection schema
const serviceCollection = defineCollection({
  loader: contentLoader(`./src/content/${servicesFolder}`),
  schema: page.extend({
    icon: z.string().optional(),
    servicesSection: sectionsSchema.servicesSection.optional(),
  }),
});

// Post collection schema
const blogCollection = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: contentLoader(`./src/content/${blogFolder}`),
  schema: page.extend({
    author: z.string().optional(),
    options: z
      .object({
        layout: z
          .enum(["grid", "creative", "horizontal", "overlay"])
          .optional(),
        appearance: z.enum(["dark", "light"]).optional(),
        columns: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
        limit: z.union([z.number().int(), z.literal(false)]).optional(),
      })
      .optional(),
  }),
});

// Team Collection
export const teamCollection = defineCollection({
  // Load Markdown and MDX files in the `src/content/team` directory.
  loader: contentLoader("./src/content/team"),
  schema: page.extend({
    image: z.string().optional(),
    profession: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    social: z
      .array(
        z.object({
          enable: z.boolean(),
          label: z.string(),
          icon: z.string(),
          url: z.string(),
        }),
      )
      .optional(),
  }),
});

// Export collections
export const collections = {
  // To prevent, getEntry (Content fetching API) throws error when collection does not exist, we specify a default collection along with the schema of each required collection
  [blogFolder]: blogCollection,
  blog: blogCollection,

  [servicesFolder]: serviceCollection,
  services: serviceCollection,

  pages: pagesCollection,
  sections: defineCollection({
    loader: contentLoader("./src/content/sections"),
  }),
  homepage: defineCollection({
    loader: contentLoader("./src/content/homepage"),
    schema: page,
  }),
  team: teamCollection,
  author: defineCollection({
    loader: contentLoader("./src/content/author"),
  }),
};
