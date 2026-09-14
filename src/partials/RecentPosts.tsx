import { BlogGallery } from '@components/BlogGallery';
import type { CollectionEntry } from 'astro:content';
import { SectionHeader } from '@components/SectionHeader';

type IRecentPostsProps = {
  postList: CollectionEntry<'post'>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <div className="h-full">
    <SectionHeader
      title="Technical"
      highlightedText="Writing"
      link="/blogs/"
      linkText="View all writing"
      extraClasses=""
    
    />

    <div className="mt-6">
      <BlogGallery postList={props.postList} />
    </div>

  </div>

);

export { RecentPosts };
