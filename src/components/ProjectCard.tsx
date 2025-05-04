import type { CollectionEntry } from 'astro:content';
import { ColorTags, Tags } from 'astro-boilerplate-components';
import React from 'react';

interface ProjectCardProps {
  project: CollectionEntry<'project'>;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  const categories = project.data.category.split(', ');

  const isExternalLink = project.data.openSource && project.data.link;

  return (
    <div
      key={project.data.link}
      className={`grid ${
        project.data.imgSrc ? 'xl:grid-cols-[120px_1fr]' : 'xl:grid-cols-1'
      }
                  items-start gap-6   p-4 transition-all duration-300 `}
    >
      {/* Image Section - Only Rendered if Image is Available */}
      {project.data.imgSrc && (
        <div className="relative flex h-[120px] w-full  items-center justify-center overflow-hidden rounded-md shadow-md md:w-[120px]">
          <a
            href={
              isExternalLink ? project.data.link : `/projects/${project.slug}`
            }
            className="size-full"
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
      <div className="flex w-full flex-col justify-between">
        <div>
          <div className="flex flex-col items-start gap-y-2">
            <a
              className="hover:text-cyan-400"
              href={
                isExternalLink ? project.data.link : `/projects/${project.slug}`
              }
              target={isExternalLink ? '_blank' : ''}
            >
              <div className="text-lg font-semibold">{project.data.title}</div>
            </a>

            <div className="flex flex-wrap gap-2">
              {categories.map((category: string, index) => {
                const color =
                  Object.values(ColorTags)[
                    Math.floor(Math.random() * Object.values(ColorTags).length)
                  ];
                return (
                  <Tags key={index} color={color}>
                    {category}
                  </Tags>
                );
              })}
            </div>
          </div>

          {/* Description with Read More / Read Less */}
          <div className="mt-3 text-sm ">
            <p className={`line-clamp-3 transition-all duration-300`}>
              {project.data.description}
            </p>
            <a
              className="mt-2 text-blue-500 hover:underline focus:outline-none"
              href={`/projects/${project.slug}`}
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
