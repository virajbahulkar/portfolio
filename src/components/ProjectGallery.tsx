import type { CollectionEntry } from 'astro:content';
import { useState } from 'react';

import { ProjectCard } from './ProjectCard';

interface ProjectGalleryProps {
  projectList: CollectionEntry<'project'>[];
  isotopeMode?: boolean;
}

// Removed unused gradientBorders and RECENT_YEARS constants

const getYears = (projectList: CollectionEntry<'project'>[]): number[] => {
  return Array.from(
    new Set(
      projectList.map((project) => {
        const date = new Date(project.data.startDate);
        if (isNaN(date.getTime())) return null;
        return date.getFullYear();
      })
    )
  )
    .filter((y): y is number => y !== null)
    .sort((a, b) => b - a);
};

const getMonths = (
  projectList: CollectionEntry<'project'>[],
  year: number
): string[] => {
  return Array.from(
    new Set(
      projectList.map((project) => {
        const date = new Date(project.data.startDate);
        if (isNaN(date.getTime()) || date.getFullYear() !== year) return null;
        return date.toLocaleString('default', { month: 'long' });
      })
    )
  ).filter((m): m is string => m !== null);
};

const ProjectGallery = (props: ProjectGalleryProps | undefined) => {
  // Distinguish between undefined props (loading/misuse) vs provided empty list (valid empty state)
  if (!props) {
    return (
      <div className="h-full space-y-6">
        <div className="text-sm italic text-base-content/60">Loading projects...</div>
      </div>
    );
  }
  const { projectList, isotopeMode = false } = props;
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const years = getYears(projectList);
  const months = selectedYear ? getMonths(projectList, selectedYear) : [];

  const filteredProjects = projectList.filter((project) => {
    const date = new Date(project.data.startDate);
    if (isNaN(date.getTime())) return false;

    if (selectedYear && date.getFullYear() !== selectedYear) return false;
    if (
      selectedMonth &&
      date.toLocaleString('default', { month: 'long' }) !== selectedMonth
    )
      return false;

    return true;
  });

  return (
    <div className="h-full  space-y-6">
      {isotopeMode ? (
        <>
          {/* Year Filter Buttons */}
          <div className="mb-4 flex flex-wrap gap-1">
            {years.map((year) => (
              <button
                key={year}
                className={`rounded-lg border   border-base-300 px-2 py-1 text-sm`}
                onClick={() => {
                  setSelectedYear(year);
                  setSelectedMonth(null);
                }}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Month Filter Buttons */}
          {selectedYear && (
            <div className="mb-4 flex flex-wrap gap-1">
              {months.map((month) => (
                <button
                  key={month}
                  className={`rounded-lg border   border-base-300 px-2 py-1 text-sm`}
                  onClick={() => setSelectedMonth(month)}
                >
                  {month}
                </button>
              ))}
            </div>
          )}

          {/* Reset Filter Button (Now Cross Icon) */}
          {(selectedYear || selectedMonth) && (
            <button
              className="mb-4 text-xl text-red-500"
              onClick={() => {
                setSelectedYear(null);
                setSelectedMonth(null);
              }}
            >
              ✖
            </button>
          )}

          {/* Projects Display */}
          <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {filteredProjects.map((project) => (
              <div
                key={project.data.link}
                className={`hover relative mb-6 overflow-hidden rounded-2xl border border-base-300   p-[2px] transition-transform hover:scale-[102%]`}
              >
                <div className={`rounded-2xl    p-1   `}>
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          {filteredProjects.map((project) => (
            <div
              key={project.data.link}
              className="relative mb-6 rounded-2xl border border-base-300   p-0 transition-transform duration-300  hover:scale-[102%]  "
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { ProjectGallery };
