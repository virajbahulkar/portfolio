import { BlogCard } from '@components/BlogCard';
import type { CollectionEntry } from 'astro:content';

type IRecentPostsProps = {
  postList: CollectionEntry<'post'>[];
};

const BlogGallery = (props: IRecentPostsProps) => {
  const count = props.postList.length;
  let columns = 'grid-cols-3'; // Default to 3 columns

  if (count > 2) columns = 'grid-cols-2';
  else if (count === 1) columns = 'grid-cols-1';

  return (
    <div className={`md:grid ${columns} w-full md:gap-6`}>
      {props.postList.map((elt) => (
        <BlogCard key={elt.data.url} blog={elt} />
      ))}
    </div>
  );
};

export { BlogGallery };
