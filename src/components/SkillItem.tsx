// components/SkillItem.tsx
import type { IconType } from 'react-icons';

interface SkillItemProps {
  title: string;
  description: string;
  Icon: IconType;
}

const SkillItem: React.FC<SkillItemProps> = ({ title, description, Icon }) => {
  return (
    <div className="group relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <Icon className="text-4xl text-blue-600 dark:text-blue-400" />
      <h4 className="mt-2 font-semibold text-gray-800 dark:text-white">
        {title}
      </h4>
      <p className="mt-1 text-center text-sm text-gray-500 opacity-0 transition group-hover:opacity-100 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default SkillItem;
