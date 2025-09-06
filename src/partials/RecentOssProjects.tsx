import { ProjectGallery } from '@components/ProjectGallery';
import type { CollectionEntry } from 'astro:content';
import { GradientText, Section } from 'astro-boilerplate-components';
import { SectionHeader } from '@components/SectionHeader';

type IRecentOssProjectProps = {
  projectList: CollectionEntry<'project'>[];
};

const RecentOssProjects = (props: IRecentOssProjectProps) => {
  return (
    <div className="h-full">
      <SectionHeader
          title="Recent"
          highlightedText="Open Source Contributions"
          link="/projects/"
          linkText="View all Contributions"
          extraClasses=""
          buttonBg="bg-cyan-800 hover:bg-cyan-700"
        />

      <div className="mt-6">
        <ProjectGallery projectList={props.projectList} />
      </div>

    </div>
  );
};

export { RecentOssProjects };
