import { BlogCard } from '@components/BlogCard';
import type { CollectionEntry } from 'astro:content';

type IRecentPostsProps = {
  postList: CollectionEntry<'post'>[];
};

const BlogGallery = (props: IRecentPostsProps) => {
  return (
    <div className={`w-full grid-cols-2 md:grid md:gap-6`}>
      {props.postList.map((elt) => (
        <div className="mb-5 lg:mb-0">
          <BlogCard key={elt.data.url} blog={elt} />
        </div>
      ))}
    </div>
  );
};

export { BlogGallery };
