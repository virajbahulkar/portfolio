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
    <div className="bg-base group relative flex h-full flex-col items-start rounded-2xl border border-base-300 bg-base-100 p-4 text-left shadow-sm transition hover:shadow-md sm:items-center sm:text-center">
      <Icon color={color} className="text-4xl text-base-content" />
      <h4 className="mt-2 break-words font-semibold text-base-content">
        {title}
      </h4>
      <p className="skill-description mt-2 break-words text-sm leading-6 text-base-content opacity-100 transition lg:opacity-0 lg:group-hover:opacity-100">
        {description}
      </p>
    </div>
  );
};

export default SkillItem;
