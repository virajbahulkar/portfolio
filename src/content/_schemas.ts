import { z } from 'astro:content';

export const postSchema = z.object({
  layout: z.string(),
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  url: z.string(),
  imgSrc: z.string(),
  imgAlt: z.string(),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string().optional(),
  imgSrc: z.string().optional(),
  startDate: z.date(),
  imgAlt: z.string().optional(),
  openSource: z.boolean(),
  category: z.string(),
  runningOrder: z.number(),
});

export type BlogFrontMatter = z.infer<typeof postSchema>;
export type ProjectFrontMatter = z.infer<typeof projectSchema>;
