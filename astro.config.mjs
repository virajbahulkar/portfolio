import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import * as astroImageTools from  'astro-imagetools';

// https://astro.build/config
export default defineConfig({
  site: 'https://virajbahulkar.com', // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'ignore', // Keep trailing slashes on URLs
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
  integrations: [
    react({
      experimentalDisableStreaming: true,
    }),
    tailwind({}),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: ['/cdn-cgi/'],
          crawlDelay: 2,
        },
        {
          userAgent: 'Bingbot',
          allow: '/',
          disallow: ['/cdn-cgi/'],
          crawlDelay: 2,
        },
        {
          userAgent: 'AhrefsBot',
          allow: '/',
          disallow: ['/cdn-cgi/'],
          crawlDelay: 2,
        },
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 10,
        },
      ],
    }),
  ],
});
