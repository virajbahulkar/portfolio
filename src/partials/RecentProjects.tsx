import { ProjectGallery } from '@components/ProjectGallery';
import { SectionHeader } from '@components/SectionHeader';
import type { CollectionEntry } from 'astro:content';
import { GradientText, Section } from 'astro-boilerplate-components';

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
        />

        <div className="mt-6">
          <ProjectGallery projectList={props.projectList} />
        </div>

      </div>
  );
};

export { RecentProjects };
