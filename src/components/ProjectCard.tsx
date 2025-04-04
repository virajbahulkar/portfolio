import React, { useState } from 'react';
import type { CollectionEntry } from 'astro:content';
import { ColorTags, Tags } from 'astro-boilerplate-components';

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
      className={`grid ${project.data.imgSrc ? 'md:grid-cols-[120px_1fr]' : 'md:grid-cols-1'}
                  items-start gap-6 rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-xl`}
    >
      {/* Image Section - Only Rendered if Image is Available */}
      {project.data.imgSrc && (
        <div className="relative w-full md:w-[120px] h-[120px] bg-white rounded-md overflow-hidden shadow-md flex items-center justify-center">
          <a href={isExternalLink ? project.data.link : `/projects/${project.slug}`} className="w-full h-full">
            <div className="relative w-full h-full">
              {project.data.openSource && (
                <span className="absolute top-1 right-1 badge badge-primary z-10">
                  Open Source
                </span>
              )}
              <img
                className="w-full h-full object-contain"
                src={project.data.imgSrc}
                alt={project.data.imgAlt}
                loading="eager"
              />
            </div>
          </a>
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="flex flex-col items-start gap-y-2">
            <a
              className="hover:text-cyan-400"
              href={isExternalLink ? project.data.link : `/projects/${project.slug}`}
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
                return <Tags key={index} color={color}>{category}</Tags>;
              })}
            </div>
          </div>

          {/* Description with Read More / Read Less */}
          <div className="mt-3 text-sm text-gray-600">
            <p className={`transition-all duration-300 line-clamp-3`}>
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
