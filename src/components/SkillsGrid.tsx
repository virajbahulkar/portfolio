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
    color: '#61DAFB',
  },
  {
    title: 'NodeJS',
    description: 'Created scalable server-side apps using RESTful APIs.',
    Icon: SiNodedotjs,
    color: '#339933',
  },
  {
    title: 'ExpressJS',
    description: 'Developed secure, performant backends using Express.',
    Icon: SiExpress,
    color: '#000000',
  },
  {
    title: 'MongoDB',
    description: 'Managed NoSQL data with aggregation and indexing.',
    Icon: SiMongodb,
    color: '#47A248',
  },
  {
    title: 'PostgreSQL',
    description: 'Worked on relational schemas, joins, and performance tuning.',
    Icon: SiPostgresql,
    color: '#336791',
  },
  {
    title: 'TypeScript',
    description: 'Ensured type safety and scalability in large apps.',
    Icon: SiTypescript,
    color: '#3178C6',
  },
  {
    title: 'NextJS',
    description: 'Built SEO-optimized apps using SSR and file-based routing.',
    Icon: SiNextdotjs,
    color: '#000000',
  },
  {
    title: 'Docker',
    description: 'Containerized full-stack apps for consistent environments.',
    Icon: SiDocker,
    color: '#2496ED',
  },
  {
    title: 'Kubernetes',
    description: 'Explored cluster orchestration and scaling techniques.',
    Icon: SiKubernetes,
    color: '#326CE5',
  },
  {
    title: 'AWS',
    description: 'Worked with EC2, S3, Lambda, and API Gateway.',
    Icon: FaAws,
    color: '#FF9900',
  },
  {
    title: 'Git',
    description: 'Handled version control with branching strategies.',
    Icon: SiGit,
    color: '#F05032',
  },
  {
    title: 'JavaScript',
    description: 'Wrote efficient, modern JS using ES6+ standards.',
    Icon: SiJavascript,
    color: '#F7DF1E',
  },
  {
    title: 'HTML',
    description: 'Crafted accessible and semantic web structures.',
    Icon: SiHtml5,
    color: '#E34F26',
  },
  {
    title: 'CSS',
    description: 'Designed responsive layouts with Flexbox and Grid.',
    Icon: SiCss3,
    color: '#1572B6',
  },
  {
    title: 'SASS',
    description: 'Used variables, mixins, and nesting for CSS organization.',
    Icon: SiSass,
    color: '#CC6699',
  },
  {
    title: 'Azure DevOps',
    description:
      'Worked with CI/CD pipelines, release boards, and cloud-hosted deployments.',
    Icon: VscAzureDevops,
    color: '#0078D7',
  },
  {
    title: 'Gulp',
    description: 'Automated tasks like minification and compilation.',
    Icon: SiGulp,
    color: '#CF4647',
  },
  {
    title: 'Grunt',
    description: 'Managed legacy JS builds with Grunt workflows.',
    Icon: SiGrunt,
    color: '#FBA919',
  },
  {
    title: 'Webpack',
    description: 'Configured bundlers for module-based architecture.',
    Icon: SiWebpack,
    color: '#8DD6F9',
  },
];

const SkillsGrid = () => {
  return (
    <section className="w-full py-4">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill) => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            description={skill.description}
            Icon={skill.Icon}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
