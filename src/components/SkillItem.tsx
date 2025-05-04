// components/SkillItem.tsx
import type { IconType } from 'react-icons';

interface SkillItemProps {
  title: string;
  description: string;
  Icon: IconType;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({
  title,
  description,
  Icon,
  color,
}) => {
  return (
    <div className="bg-base group relative flex flex-col items-center rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition  hover:shadow-md">
      <Icon color={color} className="text-4xl text-base-content" />
      <h4 className="mt-2 font-semibold text-base-content">{title}</h4>
      <p className="mt-1 text-center text-sm text-base-content opacity-0 transition group-hover:opacity-100">
        {description}
      </p>
    </div>
  );
};

export default SkillItem;
