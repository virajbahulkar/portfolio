import { FaAws } from 'react-icons/fa6';
import { VscAzureDevops } from 'react-icons/vsc';
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
import SkillItem from './SkillItem';
import { skillsDetailed } from '../content/cvData';

// Map string icon keys from data to actual imported icon components.
const iconMap = {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  FaAws,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  VscAzureDevops,
  SiGulp,
  SiGrunt,
  SiWebpack,
} as const;

type IconKey = keyof typeof iconMap;

interface SkillData {
  title: string;
  description: string;
  icon: IconKey;
  color: string;
}

const SkillsGrid = () => (
  <section className="w-full py-4">
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {(skillsDetailed as SkillData[]).map((skill) => {
        const Icon = iconMap[skill.icon];
        if (!Icon) return null;
        return (
          <SkillItem
            key={skill.title}
            title={skill.title}
            description={skill.description}
            Icon={Icon}
            color={skill.color}
          />
        );
      })}
    </div>
  </section>
);

export default SkillsGrid;
