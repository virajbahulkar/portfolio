import type { CollectionEntry } from 'astro:content';

interface ProjectCardProps {
  project: CollectionEntry<'project'>;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  const categories = project.data.category.split(', ');
  const note = project.data.projectNote?.trim();
  const showNoteOnCard = !project.data.hideNoteOnCard;

  const isExternalLink = project.data.openSource && project.data.link;

  return (
    <div
      key={project.data.link}
      className={`grid ${
        project.data.imgSrc ? 'xl:grid-cols-[120px_1fr]' : 'xl:grid-cols-1'
      }
                  min-w-0 items-start gap-4 p-4 transition-all duration-300 sm:gap-6 sm:p-5 `}
    >
      {/* Image Section - Only Rendered if Image is Available */}
      {project.data.imgSrc && (
        <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-md shadow-md sm:h-[120px] xl:w-[120px]">
          <a
            href={
              isExternalLink ? project.data.link : `/projects/${project.slug}`
            }
            className="size-full"
            title={project.data.title}
          >
            <div className="relative size-full">
              {project.data.openSource && (
                <span className="badge badge-primary absolute right-1 top-1 z-10">
                  Open Source
                </span>
              )}
              <img
                className="size-full object-contain"
                src={project.data.imgSrc}
                alt={project.data.imgAlt}
                loading="eager"
              />
            </div>
          </a>
        </div>
      )}

      {/* Content Section */}
      <div className="flex w-full min-w-0 flex-col justify-between">
        <div>
          <div className="flex flex-col items-start gap-y-2">
            <a
              className="max-w-full hover:text-cyan-400"
              href={
                isExternalLink ? project.data.link : `/projects/${project.slug}`
              }
              target={isExternalLink ? '_blank' : ''}
              title={project.data.title}
            >
              <div className="break-words text-lg font-semibold leading-7">
                {project.data.title}
              </div>
            </a>

            <div className="flex flex-wrap gap-2">
              {categories.map((category: string, index: number) => {
                // Accessible color palette
                const palette = [
                  { bg: '#1e40af', color: '#fff' }, // blue
                  { bg: '#047857', color: '#fff' }, // emerald
                  { bg: '#be185d', color: '#fff' }, // pink
                  { bg: '#f59e42', color: '#222' }, // orange
                  { bg: '#7c3aed', color: '#fff' }, // violet
                  { bg: '#f43f5e', color: '#fff' }, // rose
                  { bg: '#059669', color: '#fff' }, // green
                  { bg: '#eab308', color: '#222' }, // yellow
                ];
                const color = palette[index % palette.length]!;
                return (
                  <span
                    key={index}
                    className="badge max-w-full whitespace-normal break-words py-2 text-center leading-tight"
                    style={{ backgroundColor: color.bg, color: color.color }}
                  >
                    {category}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Description with Read More / Read Less */}
          <div className="mt-3 text-sm leading-6">
            <p className="line-clamp-3 break-words transition-all duration-300">
              {project.data.description}
            </p>
            {note && showNoteOnCard && (
              <p className="mt-2 break-words text-xs font-semibold leading-5 text-cyan-500">
                {note}
              </p>
            )}
            <a
              className="mt-2 inline-flex max-w-full items-center text-blue-500 hover:underline focus:outline-none"
              href={`/projects/${project.slug}`}
              title={`Read more about ${project.data.title}`}
            >
              {'Read More'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
