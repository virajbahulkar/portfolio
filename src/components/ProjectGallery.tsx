import type { CollectionEntry } from 'astro:content';
import { ProjectCard } from './ProjectCard';
import { useState } from 'react';

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
const RECENT_YEARS = [CURRENT_YEAR, CURRENT_YEAR - 1, CURRENT_YEAR - 2, CURRENT_YEAR - 3];

const getYears = (projectList: CollectionEntry<'project'>[]) => {
  return Array.from(new Set(projectList.map(project => {
    const date = new Date(project.data.startDate);
    if (isNaN(date.getTime())) return null;
    return date.getFullYear();
  })))
  .filter(Boolean)
  .sort((a, b) => b - a);
};

const getMonths = (projectList: CollectionEntry<'project'>[], year: number) => {
  return Array.from(new Set(projectList.map(project => {
    const date = new Date(project.data.startDate);
    if (isNaN(date.getTime()) || date.getFullYear() !== year) return null;
    return date.toLocaleString('default', { month: 'long' });
  })))
  .filter(Boolean);
};

const ProjectGallery = ({ projectList, isotopeMode = false }: ProjectGalleryProps) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const years = getYears(projectList);
  const months = selectedYear ? getMonths(projectList, selectedYear) : [];

  const filteredProjects = projectList.filter(project => {
    const date = new Date(project.data.startDate);
    if (isNaN(date.getTime())) return false;

    if (selectedYear && date.getFullYear() !== selectedYear) return false;
    if (selectedMonth && date.toLocaleString('default', { month: 'long' }) !== selectedMonth) return false;

    return true;
  });

  return (
    <div className="h-full  space-y-6">
      {isotopeMode ? (
        <>
          {/* Year Filter Buttons */}
          <div className="flex flex-wrap gap-1 mb-4">
            {years.filter(year => !RECENT_YEARS.includes(year)).map(year => (
              <button
                key={year}
                className={`px-2 py-1 text-sm rounded-lg ${selectedYear === year ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
            <div className="flex flex-wrap gap-1 mb-4">
              {months.map(month => (
                <button
                  key={month}
                  className={`px-2 py-1 text-sm rounded-lg ${selectedMonth === month ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
              className="text-red-500 text-xl mb-4"
              onClick={() => {
                setSelectedYear(null);
                setSelectedMonth(null);
              }}
            >
              ✖
            </button>
          )}

          {/* Projects Display */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.data.link}
                className={`relative mb-6 p-[2px] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[102%]`}
              >
                <div className={`bg-white rounded-2xl p-1 bg-gradient-to-r ${gradientBorders[index % gradientBorders.length]}`}>
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
              className="relative mb-6 p-2 rounded-2xl border border-gray-300 transition-transform duration-300 hover:scale-[102%] "
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
