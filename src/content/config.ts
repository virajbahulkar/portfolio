import { defineCollection } from 'astro:content';

import { postSchema, projectSchema, socialIconsSchema } from './_schemas';

const post = defineCollection({
  schema: postSchema,
});

const project = defineCollection({
  schema: projectSchema,
});

const social = defineCollection({
  schema: socialIconsSchema,
});

export const collections = { post, project, social };
