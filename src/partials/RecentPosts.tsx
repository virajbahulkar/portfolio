import { BlogGallery } from '@components/BlogGallery';
import type { CollectionEntry } from 'astro:content';
import { GradientText, Section } from 'astro-boilerplate-components';
import { SectionHeader } from '@components/SectionHeader';

type IRecentPostsProps = {
  postList: CollectionEntry<'post'>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <div className="h-full">
    <SectionHeader
      title="Recent"
      highlightedText="Blogs"
      link="/blogs/"
      linkText="View all blogs"
      extraClasses=""
    />

    <div className="mt-6">
      <BlogGallery postList={props.postList} />
    </div>

  </div>

);

export { RecentPosts };
