// Central CV data for both cv.astro and Base.astro
export const profile = {
  name: 'Viraj Bahulkar',
  contact: 'virajbahulkar@gmail.com | +91-8698127190 | https://virajbahulkar.me | https://linkedin.com/in/virajbahulkar | https://github.com/virajbahulkar',
  summary:
    'Senior Software Engineer with 8+ years building, deploying and operating scalable enterprise applications. Deep expertise in cloud infrastructure (AWS/Azure), containerization (Docker/Kubernetes), CI/CD automation, and full-stack systems (React, Node.js, microservices). Proven ability to architect solutions spanning frontend, backend, and cloud platforms. Experienced in DevOps practices, infrastructure-as-code, observability, and AI/ML integration. Strong track record delivering high-impact projects for Fortune 500 companies and startups.'
};

export const education = [
  {
    title: 'Bachelor of Science (B.Sc.) in Computer Science',
    subtitle: '2011 to 2017 (Officially completed in 2014, delayed to 2017) - Trained as a freelancer during the gap.'
  },
  {
    title: '12th Grade (Higher Secondary Education)',
    subtitle: 'Completed in 2011'
  },
  {
    title: '10th Grade',
    subtitle: 'Completed in 2009'
  }
];

export const experience = [
  {
    title: 'Senior Software Engineer at Cognizant Technology Solutions, India',
    start: '2021-12-01',
    bullets: [
      'Architected and delivered enterprise Finance application combining React frontend with Node.js backend, deployed across AWS/Azure cloud infrastructure with Kubernetes orchestration.',
      'Designed and implemented CI/CD pipelines using Azure DevOps, automating deployment workflows and reducing release cycle time by 60%.',
      'Built microservices architecture, transitioning from monolithic to service-oriented design; implemented monitoring and observability using cloud-native tools.',
      'Optimized cloud infrastructure, reduced costs by 40% through container optimization and serverless migration; implemented auto-scaling policies.'
    ],
    technologies:
      'React.js, Node.js, Express, REST APIs, TypeScript, PostgreSQL, AWS, Azure, Docker, Kubernetes, Azure DevOps, CI/CD, Microservices, Monitoring & Observability'
  },
  {
    title: 'Senior Software Engineer at Saeloun Technologies Pvt. Ltd., India',
    start: '2021-04-01',
    end: '2021-12-01',
    projects: [
      {
        name: 'ToolJet (Open Source Low-Code Platform)',
        bullets: [
          'Debugged and enhanced client-facing React.js UIs, improving reliability and user satisfaction for enterprise customers.',
          'Collaborated with experts to optimize platform functionality, integrating React.js frontends with Node.js/Express backends and MongoDB databases.',
          'Improved backend performance and API reliability using Node.js, Express, and database optimization (MongoDB, SQL).',
          'Contributed to cloud deployment strategies, infrastructure automation, and DevOps for open source projects.'
        ]
      },
      {
        name: 'WanderWhale (Travel Information Portal)',
        bullets: [
          'Optimized UI/UX designs using React.js and improved backend performance with Node.js and Express techniques.',
          'Collaborated with teams to resolve issues quickly, ensuring seamless delivery and enhanced user experience across frontend and backend.',
          'Implemented CI/CD pipelines, cloud hosting, and DevOps automation for improved scalability and reliability of full-stack applications.'
        ]
      }
    ],
    technologies:
      'React.js, Node.js, Express, MongoDB, SQL, TypeScript, Git, AWS, Docker, CI/CD, DevOps'
  },
  {
    title: 'Technical Head / Senior Software Engineer / Software Developer at Autoflow Technologies Pvt. Ltd.',
    start: '2017-05-01',
    end: '2021-04-01',
    projects: [
      {
        name: 'Compass (Agent Portal App)',
        bullets: [
          'Built and architected agent portal applications with React.js frontends and Node.js/Express backends, enhancing engagement, scalability, and user experience.',
          'Transformed data into actionable reports and dashboards, leveraging UI design and backend data processing (MongoDB, SQL).',
          'Managed SDLC and DevOps workflows, ensuring 100% on-time delivery and improved productivity for full-stack projects.'
        ]
      },
      {
        name: 'Digitizer App (No-Code Platform)',
        bullets: [
          'Developed the Digitizer App using React.js, Node.js, Express, and Git, focusing on modular UI components, scalable backend, and seamless user experience.',
          'Managed both front-end and back-end functionalities, increasing user engagement and system robustness through UI/UX improvements and backend optimization.',
          'Created complex React components (Timelines, Dynamic Tables, Complex Forms) and integrated with backend APIs and databases (MongoDB, SQL).',
          'Delivered high-quality work achieving client satisfaction and business impact, leveraging full-stack and DevOps best practices.',
          'Implemented cloud-based storage, serverless functions, and automated DevOps workflows for improved performance and reliability.'
        ]
      },
      {
        name: 'Governance Framework (In-House Project)',
        bullets: [
          'Built a 360-degree organizational view application, combining React.js UI, Node.js/Express backend, and MongoDB/SQL data management to enhance collaboration and communication.',
          'Implemented UI/UX improvements and REST API development using Node.js and Express for better interface and functionality.',
          'Developed drag & drop, tree-level table features using React.js and Node.js, increasing app engagement and usability.'
        ]
      },
      {
        name: 'Vendor Management System',
        bullets: [
          'Managed SDLC and DevOps for vendor management systems, ensuring 100% on-time delivery and successful outcomes for React.js and Node.js projects.',
          'Automated vendor registration using React.js UI, Node.js/Express backend, Git, HTML, CSS, JavaScript, and database integration (MongoDB, SQL), reducing processing time and increasing accuracy.',
          'Established an approval/rejection system, enhancing efficiency and minimizing errors through UI/UX and backend improvements.',
          'Architected cloud-based workflows and automated DevOps pipelines for scalability, security, and reliability.'
        ]
      },
      {
        name: 'HR 360 Feedback Portal',
        bullets: [
          'Implemented a digital feedback system using React.js UI, Node.js/Express backend, Git, HTML, CSS, JavaScript, and database integration, replacing paper-based methods and improving usability.',
          'Deployed a new feedback mechanism for quicker processing, leveraging UI/UX improvements and backend automation.',
          'Set up an admin panel generating chart-based reports, empowering data-driven decisions through React.js dashboards and backend data processing (MongoDB, SQL).',
          'Integrated cloud analytics, reporting, and DevOps automation for leadership insights and operational efficiency.'
        ]
      }
    ],
    technologies:
      'React.js, Node.js, Express, MongoDB, SQL, TypeScript, Git, HTML, CSS, Docker, AWS, Azure, DevOps'
  },
  {
    title: 'Freelancing & Skill Development',
    start: '2014-01-01',
    end: '2017-05-01',
    bullets: [
      'Worked as a freelancer, developing skills in various web and cloud technologies, preparing for a professional career in software development and engineering leadership.'
    ],
    technologies: 'React.js, Node.js, Express, MongoDB, SQL, HTML, CSS, JavaScript, Git, DevOps'
  }
];

// Skills reorganized by engineering pillars: Cloud & DevOps first, then Backend, then Frontend, then Data/Tools
export const skills = [
  // ========== CLOUD & DEVOPS PILLAR ==========
  {
    title: 'AWS',
    description: 'EC2, S3, Lambda, API Gateway, RDS, CloudFormation, auto-scaling, and serverless architecture.',
    icon: 'FaAws',
    color: '#FF9900'
  },
  {
    title: 'Azure',
    description: 'Azure App Services, Azure DevOps, container instances, and cloud infrastructure management.',
    icon: 'SiMicrosoftazure',
    color: '#0078D4'
  },
  {
    title: 'Docker',
    description: 'Containerized full-stack applications, multi-stage builds, registry management, and production deployments.',
    icon: 'SiDocker',
    color: '#2496ED'
  },
  {
    title: 'Kubernetes',
    description: 'Deployments, services, ConfigMaps, auto-scaling, persistent volumes, and container orchestration.',
    icon: 'SiKubernetes',
    color: '#326CE5'
  },
  {
    title: 'Azure DevOps',
    description: 'CI/CD pipeline configuration, automated deployments, release workflows, and multi-stage builds.',
    icon: 'VscAzureDevops',
    color: '#0078D7'
  },
  {
    title: 'CI/CD',
    description: 'Automated testing, deployment pipelines, build orchestration, and release automation.',
    icon: 'SiGithubactions',
    color: '#2088F0'
  },
  {
    title: 'Terraform',
    description: 'Infrastructure-as-code, state management, multi-environment deployments, and cloud resource automation.',
    icon: 'SiTerraform',
    color: '#7B42BC'
  },
  {
    title: 'Monitoring & Observability',
    description: 'Prometheus, Grafana, logging, distributed tracing, alerting, and system health monitoring.',
    icon: 'SiPrometheus',
    color: '#E6522C'
  },
  {
    title: 'Git',
    description: 'Version control with branching strategies, pull requests, code review workflows, and CI integration.',
    icon: 'SiGit',
    color: '#F05032'
  },

  // ========== BACKEND & DISTRIBUTED SYSTEMS PILLAR ==========
  {
    title: 'NodeJS',
    description: 'Scalable server-side apps, RESTful APIs, microservices, serverless functions, and real-time systems.',
    icon: 'SiNodedotjs',
    color: '#339933'
  },
  {
    title: 'Express',
    description: 'Secure, performant backend frameworks, middleware architecture, and robust API development.',
    icon: 'SiExpress',
    color: '#000000'
  },
  {
    title: 'TypeScript',
    description: 'Type-safe development, strict mode configuration, and scalable enterprise applications.',
    icon: 'SiTypescript',
    color: '#3178C6'
  },
  {
    title: 'REST APIs',
    description: 'RESTful design principles, request/response handling, versioning, and API documentation.',
    icon: 'SiSwagger',
    color: '#85EA2D'
  },
  {
    title: 'Microservices',
    description: 'Service-oriented architecture, service communication, inter-service resilience, and scaling.',
    icon: 'SiMicrosoft',
    color: '#00A4EF'
  },
  {
    title: 'Serverless',
    description: 'AWS Lambda, event-driven architecture, function management, and scalable compute solutions.',
    icon: 'SiAwslambda',
    color: '#FF9900'
  },
  {
    title: 'PostgreSQL',
    description: 'Relational schemas, complex queries, performance tuning, indexing, and advanced SQL.',
    icon: 'SiPostgresql',
    color: '#336791'
  },
  {
    title: 'MongoDB',
    description: 'NoSQL data modeling, aggregation pipelines, indexing, and document-based design patterns.',
    icon: 'SiMongodb',
    color: '#47A248'
  },
  {
    title: 'WebSocket & Real-Time',
    description: 'Socket.IO, real-time communication, event broadcasting, and live data synchronization.',
    icon: 'SiSocketdotio',
    color: '#010101'
  },

  // ========== FRONTEND PILLAR ==========
  {
    title: 'React',
    description: 'Single Page Applications, hooks, context API, component composition, and performance optimization.',
    icon: 'SiReact',
    color: '#61DAFB'
  },
  {
    title: 'Next.js',
    description: 'Server-side rendering, static generation, file-based routing, API routes, and SEO optimization.',
    icon: 'SiNextdotjs',
    color: '#000000'
  },
  {
    title: 'HTML/CSS',
    description: 'Semantic HTML, responsive design, Flexbox, CSS Grid, and accessible web structures.',
    icon: 'SiHtml5',
    color: '#E34F26'
  },
  {
    title: 'SASS',
    description: 'Variables, mixins, nesting, partials, and organized stylesheet architecture.',
    icon: 'SiSass',
    color: '#CC6699'
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS, rapid prototyping, responsive design, and component-based styling.',
    icon: 'SiTailwindcss',
    color: '#06B6D4'
  },
  {
    title: 'Microfrontends',
    description: 'Module federation, component libraries, independent deployments, and large-scale UI systems.',
    icon: 'SiReact',
    color: '#61DAFB'
  },

  // ========== DATA & TOOLS PILLAR ==========
  {
    title: 'JavaScript',
    description: 'Modern ES6+ standards, async/await, functional programming, and dynamic web applications.',
    icon: 'SiJavascript',
    color: '#F7DF1E'
  },
  {
    title: 'AI/LLM Integration',
    description: 'OpenAI API integration, prompt engineering, AI-assisted code generation, and language models.',
    icon: 'SiOpenai',
    color: '#412991'
  },
  {
    title: 'System Design',
    description: 'Scalable architecture, load balancing, caching strategies, and distributed system patterns.',
    icon: 'SiAmazonec2',
    color: '#FF9900'
  },
  {
    title: 'Webpack',
    description: 'Module bundling, asset management, code splitting, and build optimization.',
    icon: 'SiWebpack',
    color: '#8DD6F9'
  }
];

// Backward-compatible alias for previous code referencing `skillsDetailed`.
export const skillsDetailed = skills;
