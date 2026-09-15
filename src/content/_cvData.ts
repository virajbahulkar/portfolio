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
    'Senior Software Engineer with 8+ years of experience delivering production-grade systems across backend services, full-stack applications, and cloud infrastructure. Strong in Node.js and TypeScript with hands-on ownership of Docker, Kubernetes autoscaling, Azure DevOps release controls, centralized logging and monitoring, and cloud optimization across AWS and Azure. Built a foundation in product-facing application development and now apply that depth to platform reliability, production delivery, and engineering scale.',
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
      'Delivered Finance Group application workflows across React.js frontend, Node.js services, and cloud infrastructure for high-availability customer journeys.',
      'Supported production workloads serving 50K daily active users while maintaining 99.9% uptime for core finance journeys.',
      'Operated AWS and Azure microservices on Kubernetes with autoscaling policies that expanded workloads from 5 to 50 replicas under load.',
      'Integrated Azure DevOps build, validation, and deployment gates for safer multi-environment promotions and repeatable releases.',
      'Improved production visibility with centralized logs, metrics dashboards, and alerting while supporting right-sizing efforts that drove 35% cost optimization.',
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
          'Contributed to an open-source low-code platform used by 10,000+ developers with 500K+ monthly downloads.',
          'Optimized visual builder rendering by 35% and reduced backend query latency by 60% across core product workflows.',
          'Expanded automated test coverage by 65%, improving release confidence and contributor delivery quality.',
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
    title: 'NodeJS',
    description: 'Built backend services, APIs, and production-facing application logic.',
    icon: 'SiNodedotjs',
    color: '#339933',
  },
  {
    title: 'TypeScript',
    description: 'Used type-safe patterns across backend systems and full-stack applications.',
    icon: 'SiTypescript',
    color: '#3178C6',
  },
  {
    title: 'ExpressJS',
    description: 'Developed API and service layers for scalable Node.js systems.',
    icon: 'SiExpress',
    color: '#000000',
  },
  {
    title: 'PostgreSQL',
    description: 'Worked on relational schemas, joins, and query performance tuning.',
    icon: 'SiPostgresql',
    color: '#336791',
  },
  {
    title: 'MongoDB',
    description: 'Handled document data models, aggregation flows, and indexing.',
    icon: 'SiMongodb',
    color: '#47A248',
  },
  {
    title: 'Redis',
    description: 'Used caching and fast-access data patterns for responsive backend flows.',
    icon: 'SiRedis',
    color: '#DC382D',
  },
  {
    title: 'ElasticSearch',
    description: 'Built search-backed user flows and tuned data retrieval behavior.',
    icon: 'SiElasticsearch',
    color: '#005571',
  },
  {
    title: 'Docker',
    description: 'Containerized services for consistent local, CI, and deployment environments.',
    icon: 'SiDocker',
    color: '#2496ED',
  },
  {
    title: 'Kubernetes',
    description:
      'Worked with autoscaling, health checks, rollout patterns, and production orchestration.',
    icon: 'SiKubernetes',
    color: '#326CE5',
  },
  {
    title: 'Terraform',
    description:
      'Built code-backed AWS infrastructure blueprints covering VPC, IAM, EKS, ECR, and deployment foundations.',
    icon: 'SiTerraform',
    color: '#844FBA',
  },
  {
    title: 'AWS',
    description:
      'Worked across EC2, S3, Lambda, API Gateway, EKS, and cloud delivery workflows.',
    icon: 'FaAws',
    color: '#FF9900',
  },
  {
    title: 'Azure DevOps',
    description:
      'Worked with CI/CD pipelines, release controls, validation gates, and multi-environment promotions.',
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
      'Built product-facing interfaces as part of broader full-stack and platform delivery work.',
    icon: 'SiReact',
    color: '#61DAFB',
  },
];

export const skillsDetailed = skills;
