export interface Profile {
  name: string;
  contact: string;
  summary: string;
}

export interface EducationItem {
  title: string;
  subtitle: string;
}

export interface Project {
  name: string;
  bullets: string[];
}

export interface ExperienceItem {
  title: string;
  start?: string;
  end?: string;
  bullets?: string[];
  projects?: Project[];
  technologies?: string;
}

export interface Skill {
  title: string;
  description: string;
  icon?: string;
  color?: string;
}

export const profile: Profile = {
  name: 'Viraj Bahulkar',
  contact:
    'virajbahulkar@gmail.com | +91-8698127190 | https://virajbahulkar.me | https://linkedin.com/in/virajbahulkar | https://github.com/virajbahulkar',
  summary:
    'Senior Software Engineer with 7+ years of experience delivering production-grade platforms across frontend, backend, and cloud infrastructure. Specialized in React.js and Node.js with hands-on ownership of Docker, Kubernetes, CI/CD, observability, and cloud optimization across AWS and Azure. Proven in scaling systems, improving performance, and helping teams ship reliable production changes safely and quickly.',
};

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Science (B.Sc.) in Computer Science',
    subtitle:
      '2011 to 2017 (Officially completed in 2014, delayed to 2017) - Trained as a freelancer during the gap.',
  },
  {
    title: '12th Grade (Higher Secondary Education)',
    subtitle: 'Completed in 2011',
  },
  { title: '10th Grade', subtitle: 'Completed in 2009' },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer at Cognizant Technology Solutions, India',
    start: '2021-12-01',
    bullets: [
      'Delivered Finance Group application workflows across React.js frontend, Node.js services, and cloud infrastructure for high-availability customer journeys.',
      'Supported production workloads serving 50K daily active users while maintaining 99.9% uptime for core finance journeys.',
      'Worked across AWS and Azure microservices with Kubernetes auto-scaling policies that expanded workloads from 5 to 50 replicas under load.',
      'Integrated Azure DevOps CI/CD gates, automated validation, and release discipline for safer and repeatable deployments.',
      'Implemented centralized logging, metrics, and alerting, and contributed to infrastructure tuning that helped drive 35% cost optimization.',
    ],
    technologies:
      'React.js, Node.js, Express, REST APIs, TypeScript, AWS, Azure, Docker, Kubernetes, Azure DevOps, CI/CD, Observability, MongoDB, SQL',
  },
  {
    title: 'Senior Software Engineer at Saeloun Technologies Pvt. Ltd., India',
    start: '2021-04-01',
    end: '2021-12-01',
    projects: [
      {
        name: 'ToolJet (Open Source Low-Code Platform)',
        bullets: [
          'Contributed to a self-hosted open-source low-code platform used by 10,000+ developers with 500K+ monthly downloads.',
          'Improved visual builder performance by 35% and reduced backend query latency by 60% across core product workflows.',
          'Expanded automated test coverage by 65%, increasing release confidence and improving contributor delivery quality.',
        ],
      },
      {
        name: 'WanderWhale (Travel Information Portal)',
        bullets: [
          'Built travel platform workflows supporting 50K users and $1M+ annual transaction value across discovery, pricing, and booking journeys.',
          'Delivered ElasticSearch-powered search, multi-currency pricing, and payment reconciliation flows for reliable travel operations.',
          'Improved mobile performance to 2.1s LCP with Lighthouse 98 while supporting stable full-stack delivery workflows.',
        ],
      },
    ],
    technologies:
      'React.js, Node.js, Express, TypeScript, MongoDB, PostgreSQL, AWS, Docker, CI/CD, DevOps, ElasticSearch',
  },
  {
    title:
      'Technical Head / Senior Software Engineer / Software Developer at Autoflow Technologies Pvt. Ltd.',
    start: '2017-05-01',
    end: '2021-04-01',
    projects: [
      {
        name: 'Compass (Agent Portal App)',
        bullets: [
          'Built and architected agent portal applications with React.js frontends and Node.js/Express backends, improving engagement and business visibility.',
          'Transformed operational data into reports and dashboards for performance tracking and decision support.',
          'Managed SDLC and delivery workflows, ensuring consistent releases and improved productivity for full-stack projects.',
        ],
      },
      {
        name: 'Digitizer App (No-Code Platform)',
        bullets: [
          'Developed a no-code platform with modular React.js components, Node.js services, and flexible backend integrations.',
          'Built dynamic tables, timelines, and complex forms that improved configurability, usability, and system robustness.',
          'Implemented cloud-backed workflows and automation patterns that improved performance and delivery reliability.',
        ],
      },
      {
        name: 'Governance Framework (In-House Project)',
        bullets: [
          'Built a 360-degree organizational view application combining React.js UI, Node.js services, and MongoDB/SQL data management.',
          'Delivered REST APIs, UI/UX improvements, and interactive features such as drag-and-drop and tree-level tables.',
        ],
      },
      {
        name: 'Vendor Management System',
        bullets: [
          'Automated vendor registration and approval workflows with React.js, Node.js/Express, and database integrations.',
          'Architected cloud-based delivery flows and DevOps pipelines for scalability, security, and operational reliability.',
        ],
      },
      {
        name: 'HR 360 Feedback Portal',
        bullets: [
          'Digitized employee feedback workflows with React.js dashboards, Node.js services, and reporting automation.',
          'Built admin reporting and analytics capabilities to support faster processing and leadership insight.',
        ],
      },
    ],
    technologies:
      'React.js, Node.js, Express, JavaScript, HTML, CSS, MongoDB, SQL, Docker, AWS, Azure, DevOps',
  },
  {
    title: 'Freelancing & Skill Development',
    start: '2014-01-01',
    end: '2017-05-01',
    bullets: [
      'Worked as a freelancer while strengthening practical skills in web development, cloud technologies, and delivery workflows.',
    ],
    technologies:
      'React.js, Node.js, Express, MongoDB, SQL, HTML, CSS, JavaScript, Git, DevOps',
  },
];

export const skills: Skill[] = [
  {
    title: 'ReactJS',
    description:
      'Built SPAs and modular components with hooks and context API.',
    icon: 'SiReact',
    color: '#61DAFB',
  },
  {
    title: 'NodeJS',
    description: 'Created scalable server-side apps using RESTful APIs.',
    icon: 'SiNodedotjs',
    color: '#339933',
  },
  {
    title: 'ExpressJS',
    description: 'Developed secure, performant backends using Express.',
    icon: 'SiExpress',
    color: '#000000',
  },
  {
    title: 'MongoDB',
    description: 'Managed NoSQL data with aggregation and indexing.',
    icon: 'SiMongodb',
    color: '#47A248',
  },
  {
    title: 'PostgreSQL',
    description: 'Worked on relational schemas, joins, and performance tuning.',
    icon: 'SiPostgresql',
    color: '#336791',
  },
  {
    title: 'TypeScript',
    description: 'Ensured type safety and scalability in large apps.',
    icon: 'SiTypescript',
    color: '#3178C6',
  },
  {
    title: 'NextJS',
    description: 'Built SEO-optimized apps using SSR and file-based routing.',
    icon: 'SiNextdotjs',
    color: '#000000',
  },
  {
    title: 'Docker',
    description: 'Containerized full-stack apps for consistent environments.',
    icon: 'SiDocker',
    color: '#2496ED',
  },
  {
    title: 'Kubernetes',
    description:
      'Worked with orchestration, autoscaling, and reliable rollout patterns.',
    icon: 'SiKubernetes',
    color: '#326CE5',
  },
  {
    title: 'AWS',
    description:
      'Worked with EC2, S3, Lambda, API Gateway, and cloud delivery workflows.',
    icon: 'FaAws',
    color: '#FF9900',
  },
  {
    title: 'Git',
    description: 'Handled version control with branching strategies.',
    icon: 'SiGit',
    color: '#F05032',
  },
  {
    title: 'JavaScript',
    description: 'Wrote efficient, modern JS using ES6+ standards.',
    icon: 'SiJavascript',
    color: '#F7DF1E',
  },
  {
    title: 'HTML',
    description: 'Crafted accessible and semantic web structures.',
    icon: 'SiHtml5',
    color: '#E34F26',
  },
  {
    title: 'CSS',
    description: 'Designed responsive layouts with Flexbox and Grid.',
    icon: 'SiCss3',
    color: '#1572B6',
  },
  {
    title: 'SASS',
    description: 'Used variables, mixins, and nesting for CSS organization.',
    icon: 'SiSass',
    color: '#CC6699',
  },
  {
    title: 'Azure DevOps',
    description:
      'Worked with CI/CD pipelines, release controls, and cloud-hosted deployments.',
    icon: 'VscAzureDevops',
    color: '#0078D7',
  },
  {
    title: 'Gulp',
    description: 'Automated tasks like minification and compilation.',
    icon: 'SiGulp',
    color: '#CF4647',
  },
  {
    title: 'Grunt',
    description: 'Managed legacy JS builds with Grunt workflows.',
    icon: 'SiGrunt',
    color: '#FBA919',
  },
  {
    title: 'Webpack',
    description: 'Configured bundlers for module-based architecture.',
    icon: 'SiWebpack',
    color: '#8DD6F9',
  },
];

export const skillsDetailed = skills;
