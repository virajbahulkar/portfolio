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
        title="Recent"
        highlightedText="Projects"
        link="/projects/"
        linkText="Explore All Projects"
        extraClasses=""
        buttonBg="bg-cyan-800 hover:bg-cyan-700"
      />

      <div className="mt-6">
        <ProjectGallery projectList={props.projectList} />
      </div>
    </div>
  );
};

export { RecentProjects };
