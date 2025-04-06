import DarkModeToggleButton from "@components/DarkModeToggleButton";
import Logo from "@components/Logo";
import NavMenuItem from "@components/NavMenuItem";
import { createContext } from "react";

export const NavbarContext = createContext("/");

type NavbarProps = {
  path: string;
};

const Navbar = ({ path }: NavbarProps) => {
  return (
    <NavbarContext.Provider value={path} client:load >
      <nav className="sticky top-0 z-20 w-full  backdrop-blur-lg shadow-md border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between p-4 px-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-xl font-bold">
            <Logo client:load  />

          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 font-medium">
            <NavMenuItem href="/blogs/">Blogs</NavMenuItem>
            <NavMenuItem href="/projects/">Projects</NavMenuItem>
            <NavMenuItem href="/cv/">Resume</NavMenuItem>
            <NavMenuItem href="mailto:hello@virajbahulkar.com">Contact</NavMenuItem>
            <DarkModeToggleButton alwaysExpanded={true} />
          </ul>

          {/* Mobile Menu Button */}
          <label htmlFor="menu-toggle" className="lg:hidden p-2 rounded-md cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>

        {/* Mobile Menu */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <ul className="peer-checked:flex hidden lg:hidden absolute top-20 left-0 w-full bg-white shadow-md border-t border-gray-200 flex-col items-center gap-4 p-4 font-medium">
          <NavMenuItem href="/blogs/">Blogs</NavMenuItem>
          <NavMenuItem href="/projects/">Projects</NavMenuItem>
          <NavMenuItem href="/cv/">Resume</NavMenuItem>
          <NavMenuItem href="mailto:hello@virajbahulkar.com">Contact</NavMenuItem>
          <li className="w-full border-t  pt-2 flex flex-col items-center">
            {/* Render DarkModeToggleButton directly expanded here */}
            <div className="flex flex-col items-center">
              <DarkModeToggleButton alwaysExpanded={true} />
            </div>
          </li>
        </ul>
      </nav>
    </NavbarContext.Provider>
  );
};

export { Navbar };
