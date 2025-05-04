import { FaAws } from 'react-icons/fa6';
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGrunt,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';

import SkillItem from './SkillItem';

const skills = [
  {
    title: 'ReactJS',
    description:
      'Built SPAs and modular components with hooks and context API.',
    Icon: SiReact,
  },
  {
    title: 'NodeJS',
    description: 'Created scalable server-side apps using RESTful APIs.',
    Icon: SiNodedotjs,
  },
  {
    title: 'ExpressJS',
    description: 'Developed secure, performant backends using Express.',
    Icon: SiExpress,
  },
  {
    title: 'MongoDB',
    description: 'Managed NoSQL data with aggregation and indexing.',
    Icon: SiMongodb,
  },
  {
    title: 'PostgreSQL',
    description: 'Worked on relational schemas, joins, and performance tuning.',
    Icon: SiPostgresql,
  },
  {
    title: 'TypeScript',
    description: 'Ensured type safety and scalability in large apps.',
    Icon: SiTypescript,
  },
  {
    title: 'NextJS',
    description: 'Built SEO-optimized apps using SSR and file-based routing.',
    Icon: SiNextdotjs,
  },
  {
    title: 'Docker',
    description: 'Containerized full-stack apps for consistent environments.',
    Icon: SiDocker,
  },
  {
    title: 'Kubernetes',
    description: 'Explored cluster orchestration and scaling techniques.',
    Icon: SiKubernetes,
  },
  {
    title: 'AWS',
    description: 'Worked with EC2, S3, Lambda, and API Gateway.',
    Icon: FaAws,
  },
  {
    title: 'Git',
    description: 'Handled version control with branching strategies.',
    Icon: SiGit,
  },
  {
    title: 'JavaScript',
    description: 'Wrote efficient, modern JS using ES6+ standards.',
    Icon: SiJavascript,
  },
  {
    title: 'HTML',
    description: 'Crafted accessible and semantic web structures.',
    Icon: SiHtml5,
  },
  {
    title: 'CSS',
    description: 'Designed responsive layouts with Flexbox and Grid.',
    Icon: SiCss3,
  },
  {
    title: 'SASS',
    description: 'Used variables, mixins, and nesting for CSS organization.',
    Icon: SiSass,
  },
  {
    title: 'Azure DevOps',
    description:
      'Worked with CI/CD pipelines, release boards, and cloud-hosted deployments.',
    Icon: VscAzureDevops, // ✅ Safe replacement
  },
  {
    title: 'Gulp',
    description: 'Automated tasks like minification and compilation.',
    Icon: SiGulp,
  },
  {
    title: 'Grunt',
    description: 'Managed legacy JS builds with Grunt workflows.',
    Icon: SiGrunt,
  },
  {
    title: 'Webpack',
    description: 'Configured bundlers for module-based architecture.',
    Icon: SiWebpack,
  },
];

const SkillsGrid = () => {
  return (
    <section className="w-full py-12">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill) => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            description={skill.description}
            Icon={skill.Icon}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
