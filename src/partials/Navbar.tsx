import DarkModeToggleButton from '@components/DarkModeToggleButton';
import Hamburger from '@components/Hamburger';
import Logo from '@components/Logo';
import NavMenuItem from '@components/NavMenuItem';
import { createContext, useEffect, useRef } from 'react';

export const NavbarContext = createContext('/');

type NavbarProps = {
  path: string;
};

const Navbar = ({ path }: NavbarProps) => {
  const detailsRef = useRef<HTMLElement | null>(null);

  // Click outside to close the <details>
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const details = detailsRef.current;
      if (
        details &&
        details.hasAttribute('open') &&
        !details.contains(event.target as Node)
      ) {
        details.removeAttribute('open');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <NavbarContext.Provider value={path}>
      <nav className="sticky top-0 z-20 w-full border-base-100 shadow-md backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-4 lg:container lg:mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-xl font-bold">
            <Logo />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-6 font-medium lg:flex">
            <NavMenuItem href="/blogs/">Blogs</NavMenuItem>
            <NavMenuItem href="/projects/">Projects</NavMenuItem>
            <NavMenuItem href="/cv/">Resume</NavMenuItem>
            <NavMenuItem href="mailto:hello@virajbahulkar.me">
              Contact
            </NavMenuItem>
            <DarkModeToggleButton alwaysExpanded={true} />
          </ul>

          {/* Mobile Dropdown Menu */}
          <details className="group relative lg:hidden" ref={detailsRef}>
            <summary
              className="cursor-pointer list-none rounded-md p-2"
              aria-label="Toggle Menu"
            >
              {/* Toggle icons */}
              <Hamburger extraClass="group-open:hidden" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden size-5 group-open:inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </summary>

            {/* Mobile Menu Items */}
            <ul className="absolute right-0 top-14 z-10 flex w-52 flex-col items-center gap-4 border-t  bg-base-100 p-4 font-medium shadow-md">
              <NavMenuItem href="/blogs/">Blogs</NavMenuItem>
              <NavMenuItem href="/projects/">Projects</NavMenuItem>
              <NavMenuItem href="/cv/">Resume</NavMenuItem>
              <NavMenuItem href="mailto:hello@virajbahulkar.me">
                Contact
              </NavMenuItem>
              <li className="flex w-full justify-center border-t border-base-300 pt-2">
                <DarkModeToggleButton alwaysExpanded={true} />
              </li>
            </ul>
          </details>
        </div>
      </nav>
      {/* Add this script at the end of the component --> */}
    </NavbarContext.Provider>
  );
};

export { Navbar };
