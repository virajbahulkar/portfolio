import { AppConfig } from './AppConfig';

export const personSchemaMarkup = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: AppConfig.site_name,
  alternateName: 'Viraj Bahulkar',
  url: AppConfig.site_url,
  image: `${AppConfig.site_url}/profile-pic.png`,
  sameAs: [
    'https://facebook.com/virajbahulkar',
    'https://instagram.com/virajbahulkar',
    'https://github.com/virajbahulkar',
    'https://linkedin.com/in/virajbahulkar',
  ],
  jobTitle: 'Senior Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Cognizant Technology Solutions Pvt Ltd',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Pune university',
  },
};

export const websiteSchemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  description:
    'Senior software engineer with 7+ years of experience across full-stack delivery, cloud infrastructure, and DevOps.',
  headline: 'Viraj Bahulkar',
  image: `${AppConfig.site_url}/profile-pic.png`,
  name: 'Viraj Bahulkar',
  sameAs: [
    'https://facebook.com/virajbahulkar',
    'https://instagram.com/virajbahulkar',
    'https://github.com/virajbahulkar',
    'https://linkedin.com/in/virajbahulkar',
  ],
  url: AppConfig.site_url,
};
