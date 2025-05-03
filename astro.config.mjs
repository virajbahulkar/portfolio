import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import * as astroImageTools from 'astro-imagetools';

export default defineConfig({
  site: 'https://virajbahulkar.me',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@pages': '/src/pages',
      },
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
        { userAgent: '*', allow: '/', crawlDelay: 10 },
      ],
    }),
  ],
});
