import { ProjectGallery } from '@components/ProjectGallery';
import { SectionHeader } from '@components/SectionHeader';
import type { CollectionEntry } from 'astro:content';

type IRecentOssProjectProps = {
  projectList: CollectionEntry<'project'>[];
};

const RecentOssProjects = (props: IRecentOssProjectProps) => {
  return (
    <div className="h-full">
      <SectionHeader
        title="Open Source"
        highlightedText="Contributions"
        link="/projects/"
        linkText="View Contributions"
        extraClasses=""
      />

      <div className="mt-6">
        <ProjectGallery projectList={props.projectList} />
      </div>
    </div>
  );
};

export { RecentOssProjects };
