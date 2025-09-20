interface PaginationHeaderExtraClasses {
  headerClasses?: string;
  descriptionClasses?: string;
  wrapperClasses?: string;
}

interface PaginationHeaderProps {
  title: string;
  description: string;
  extraClasses?: PaginationHeaderExtraClasses;
}

const PaginationHeader = ({ title, description, extraClasses }: PaginationHeaderProps) => {
  const { headerClasses, descriptionClasses, wrapperClasses } = extraClasses || {};
  return (
    <div className={wrapperClasses}>
      <h1 className={headerClasses ?? 'text-3xl font-bold'}>{title}</h1>
      <div className={`mt-3 ${descriptionClasses ?? ''}`}>{description}</div>
    </div>
  );
};

export { PaginationHeader };
