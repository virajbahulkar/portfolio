import type { CollectionEntry } from 'astro:content';
import { format } from 'date-fns';

interface BlogCardProps {
  blog: CollectionEntry<'post'>;
}

const BlogCard = (props: BlogCardProps) => {
  const { blog } = props;
  const updatedDate = blog.data.updatedDate
    ? format(new Date(blog.data.updatedDate), 'LLL d, yyyy')
    : null;

  return (
    <a
      className="block h-full hover:translate-y-1"
      href={blog.data.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100">
        <div className="aspect-h-2 aspect-w-3">
          <img
            className="size-full object-cover object-center"
            src={blog.data.imgSrc}
            alt={blog.data.imgAlt}
            loading="eager"
          />
        </div>

        <div className="px-4 pb-6 pt-4 text-center">
          <h2 className="break-words text-xl font-semibold">
            {blog.data.title}
          </h2>

          <div className="mt-2 text-xs text-base-content/70">
            <span>{format(new Date(blog.data.pubDate), 'LLL d, yyyy')}</span>
            <span> · {blog.data.readTime}</span>
            {updatedDate ? <span> · Updated {updatedDate}</span> : null}
          </div>

          <div className="mt-2 break-words text-sm leading-6">
            {blog.data.description}
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {blog.data.tags.map((tag) => (
              <span key={tag} className="badge badge-outline text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export { BlogCard };
