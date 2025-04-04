type IPaginationHeaderProps = {
  title: string;
  description: string;
  extraClasses: Object;
};

const PaginationHeader = (props: IPaginationHeaderProps) => {
  const { headerClasses, descriptionClasses, wrapperClasses } = props.extraClasses || {}
  return (
    <div className={`${wrapperClasses}`}>
      <h1 className={`${headerClasses ?? 'text-3xl font-bold'}`}>{props.title}</h1>

      <div className={`mt-3 ${descriptionClasses}`}>{props.description}</div>
    </div>
  )
};

export { PaginationHeader };
