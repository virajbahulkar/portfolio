import { AppConfig } from '@utils/AppConfig';
import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="flex flex-col items-center justify-center space-y-2 border-t  pt-6  text-sm">
      <div className="text-center">
        © {new Date().getFullYear()} {AppConfig.author}. All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center space-x-1 text-center">
        <span>Crafted with precision using</span>
        <a
          href="https://astro.build"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          AstroJS 🚀
        </a>
        <span>and deployed seamlessly on</span>
        <a
          href="https://www.netlify.com/"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          Netlify 🌐
        </a>
        .
      </div>
    </div>
  </Section>
);

export { Footer };
