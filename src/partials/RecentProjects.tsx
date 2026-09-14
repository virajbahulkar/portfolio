import { ProjectGallery } from '@components/ProjectGallery';
import { SectionHeader } from '@components/SectionHeader';
import type { CollectionEntry } from 'astro:content';

type IRecentProjectProps = {
  projectList: CollectionEntry<'project'>[];
};

const RecentProjects = (props: IRecentProjectProps) => {
  return (
    <div className="h-full">
      <SectionHeader
        title="Flagship"
        highlightedText="Case Studies"
        link="/projects/"
        linkText="View Engineering Work"
        extraClasses=""
      />

      <div className="mt-6">
        <ProjectGallery projectList={props.projectList} />
      </div>
    </div>
  );
};

export { RecentProjects };
