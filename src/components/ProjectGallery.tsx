import type { CollectionEntry } from 'astro:content';
import { useState } from 'react';

import { ProjectCard } from './ProjectCard';

interface ProjectGalleryProps {
  projectList: CollectionEntry<'project'>[];
  isotopeMode?: boolean;
}

const gradientBorders = [
  'from-[#FFDEE9] to-[#B5FFFC]',
  'from-[#C6FFDD] to-[#FBD786]',
  'from-[#FDCB82] to-[#FFAAFC]',
  'from-[#A1C4FD] to-[#C2E9FB]',
  'from-[#D4FC79] to-[#96E6A1]',
  'from-[#84FAB0] to-[#8FD3F4]',
  'from-[#FF9A8B] to-[#FF6A88]',
  'from-[#FAACA8] to-[#DDD6F3]',
  'from-[#FCE38A] to-[#F38181]',
];

const CURRENT_YEAR = new Date().getFullYear();
const RECENT_YEARS = [
  CURRENT_YEAR,
  CURRENT_YEAR - 1,
  CURRENT_YEAR - 2,
  CURRENT_YEAR - 3,
];

const getYears = (projectList: CollectionEntry<'project'>[]) => {
  return Array.from(
    new Set(
      projectList.map((project) => {
        const date = new Date(project.data.startDate);
        if (isNaN(date.getTime())) return null;
        return date.getFullYear();
      })
    )
  )
    .filter(Boolean)
    .sort((a, b) => b - a);
};

const getMonths = (projectList: CollectionEntry<'project'>[], year: number) => {
  return Array.from(
    new Set(
      projectList.map((project) => {
        const date = new Date(project.data.startDate);
        if (isNaN(date.getTime()) || date.getFullYear() !== year) return null;
        return date.toLocaleString('default', { month: 'long' });
      })
    )
  ).filter(Boolean);
};

const ProjectGallery = ({
  projectList,
  isotopeMode = false,
}: ProjectGalleryProps) => {
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
            {years
              .filter((year) => !RECENT_YEARS.includes(year))
              .map((year) => (
                <button
                  key={year}
                  className={`rounded-lg border px-2 py-1 text-sm`}
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
                  className={`rounded-lg border px-2 py-1 text-sm`}
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
            {filteredProjects.map((project, index) => (
              <div
                key={project.data.link}
                className={`hover relative mb-6 overflow-hidden rounded-2xl p-[2px] transition-transform hover:scale-[102%]`}
              >
                <div className={`rounded-2xl  border   p-1   `}>
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.data.link}
              className="relative mb-6 rounded-2xl border  p-0 transition-transform duration-300 hover:scale-[102%] "
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
