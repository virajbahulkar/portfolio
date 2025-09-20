import { useEffect } from 'react';

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Cupcake', value: 'cupcake' },
  { name: 'Synthwave', value: 'synthwave' },
  { name: 'Retro', value: 'retro' },
  { name: 'Cyberpunk', value: 'cyberpunk' },
];

interface DarkModeToggleButtonProps { alwaysExpanded?: boolean }
const DarkModeToggleButton = ({ alwaysExpanded = false }: DarkModeToggleButtonProps) => {
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const triggerBtnClass = alwaysExpanded ? 'btn btn-sm m-0' : 'btn m-1';
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className={triggerBtnClass}>
        Theme
        <svg
          className="ml-2 size-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-box z-[1] w-64 bg-base-100 p-2 shadow"
      >
        {themes.map(({ name, value }) => (
          <li key={value}>
            <button
              onClick={() => applyTheme(value)}
              className="flex items-center justify-between gap-2 p-2"
            >
              <span>{name}</span>
              <div
                data-theme={value}
                className="grid h-6 w-20 grid-cols-4 gap-1 overflow-hidden rounded"
              >
                <div className="size-full bg-primary"></div>
                <div className="size-full bg-secondary"></div>
                <div className="size-full bg-accent"></div>
                <div className="size-full bg-base-200"></div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DarkModeToggleButton;
