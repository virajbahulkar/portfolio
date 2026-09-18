import { BlogCard } from '@components/BlogCard';
import type { CollectionEntry } from 'astro:content';

type IRecentPostsProps = {
  postList: CollectionEntry<'post'>[];
};

const BlogGallery = (props: IRecentPostsProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {props.postList.map((elt) => (
        <div className="lg:mb-0">
          <BlogCard key={elt.data.url} blog={elt} />
        </div>
      ))}
    </div>
  );
};

export { BlogGallery };
