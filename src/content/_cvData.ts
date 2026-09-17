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
    'Senior Software Engineer focused on backend, platform and cloud engineering, with over 8 years of professional experience. I build Node.js and TypeScript services, integrate databases, and operate production infrastructure on AWS and Azure. My work includes Kubernetes autoscaling, Azure DevOps release controls, centralized logging, monitoring and production troubleshooting. I started in full-stack development with React and Node.js and managed development and releases as a Technical Head before expanding into backend systems and cloud operations.',
};

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Computer Science',
    subtitle: 'Completed in 2017',
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
      'Delivered production finance workflows across React interfaces, Node.js services and cloud infrastructure.',
      'Supported customer-facing production services and investigated application and deployment issues.',
      'Operated AWS and Azure microservices on Kubernetes with autoscaling policies and health checks.',
      'Integrated Azure DevOps build, validation and deployment gates across environments.',
      'Improved production visibility with centralized logs, metrics dashboards and alerts; contributed to the team’s infrastructure right-sizing and cost optimization work.',
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
        name: 'ToolJet (Open Source Contributions)',
        bullets: [
          'Contributed to ToolJet’s React frontend through reviewed and merged pull requests.',
          'Fixed widget search and duplicate table-edit updates.',
          'Added organization-user form validation and corrected application launch behaviour when no deployed version was available.',
        ],
      },
      {
        name: 'WanderWhale (Travel Information Portal)',
        bullets: [
          'Built and optimized production travel workflows across discovery, pricing, booking and payment reconciliation.',
          'Delivered ElasticSearch-powered search and multi-currency pricing, with PostgreSQL for transactional data and Redis for caching.',
          'Improved mobile and desktop application performance and supported backend services and deployments.',
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
          'Architected and built agent portal applications with React.js frontends and Node.js/Express backends.',
          'Created reports and dashboards for tracking sales performance and business targets.',
          'Managed the software development lifecycle and release workflows for full-stack projects.',
        ],
      },
      {
        name: 'Digitizer App (No-Code Platform)',
        bullets: [
          'Developed a no-code platform with modular React.js components, Node.js services, and flexible backend integrations.',
          'Built configurable tables, timelines and complex forms that teams could reuse across application pages.',
          'Implemented cloud integrations and workflow automation.',
        ],
      },
      {
        name: 'Governance Framework (In-House Project)',
        bullets: [
          'Built an organizational planning application with React.js, Node.js and MongoDB/SQL data management.',
          'Delivered REST APIs, UI/UX improvements, and interactive features such as drag-and-drop and tree-level tables.',
        ],
      },
      {
        name: 'Vendor Management System',
        bullets: [
          'Automated vendor registration and approval workflows with React.js, Node.js/Express, and database integrations.',
          'Architected cloud delivery workflows and DevOps pipelines for application deployment and operational reliability.',
        ],
      },
      {
        name: 'HR 360 Feedback Portal',
        bullets: [
          'Digitized employee feedback workflows with React.js dashboards, Node.js services, and reporting automation.',
          'Built admin reports and dashboards for reviewing feedback.',
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
      'Worked on freelance projects while developing my skills in web development, cloud technologies and application delivery.',
    ],
    technologies:
      'React.js, Node.js, Express, MongoDB, SQL, HTML, CSS, JavaScript, Git, DevOps',
  },
];

export const skills: Skill[] = [
  {
    title: 'NodeJS',
    description:
      'Built production backend services, APIs and application logic.',
    icon: 'SiNodedotjs',
    color: '#339933',
  },
  {
    title: 'TypeScript',
    description:
      'Used TypeScript across backend services and web applications.',
    icon: 'SiTypescript',
    color: '#3178C6',
  },
  {
    title: 'ExpressJS',
    description:
      'Built API routes and service layers for Node.js applications.',
    icon: 'SiExpress',
    color: '#000000',
  },
  {
    title: 'PostgreSQL',
    description:
      'Worked on relational schemas, joins, and query performance tuning.',
    icon: 'SiPostgresql',
    color: '#336791',
  },
  {
    title: 'MongoDB',
    description:
      'Handled document data models, aggregation flows, and indexing.',
    icon: 'SiMongodb',
    color: '#47A248',
  },
  {
    title: 'Redis',
    description: 'Used Redis to cache application data.',
    icon: 'SiRedis',
    color: '#DC382D',
  },
  {
    title: 'ElasticSearch',
    description: 'Built search features and worked on query behaviour.',
    icon: 'SiElasticsearch',
    color: '#005571',
  },
  {
    title: 'Docker',
    description:
      'Containerized services for consistent local, CI, and deployment environments.',
    icon: 'SiDocker',
    color: '#2496ED',
  },
  {
    title: 'Kubernetes',
    description:
      'Operated production workloads with autoscaling, health checks and application rollouts.',
    icon: 'SiKubernetes',
    color: '#326CE5',
  },
  {
    title: 'Terraform',
    description:
      'Built a personal AWS infrastructure blueprint covering VPC, IAM, EKS and ECR.',
    icon: 'SiTerraform',
    color: '#844FBA',
  },
  {
    title: 'AWS',
    description:
      'Worked with EC2, S3, Lambda, API Gateway, EKS and application deployments.',
    icon: 'FaAws',
    color: '#FF9900',
  },
  {
    title: 'Azure DevOps',
    description:
      'Worked with CI/CD pipelines, validation gates and releases across environments.',
    icon: 'VscAzureDevops',
    color: '#0078D7',
  },
  {
    title: 'GitHub Actions',
    description:
      'Automated validation and deployment workflows for application, Kubernetes, and Terraform changes.',
    icon: 'SiGithubactions',
    color: '#2088FF',
  },
  {
    title: 'ReactJS',
    description:
      'Built application interfaces, reusable components, dashboards and forms.',
    icon: 'SiReact',
    color: '#61DAFB',
  },
];

export const skillsDetailed = skills;
