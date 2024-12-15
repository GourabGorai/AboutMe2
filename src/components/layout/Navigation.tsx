import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NavLinks } from './NavLinks';

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isDarkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen }: NavigationProps) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Gourab Gorai</h1>
          </div>
          
          <NavLinks className="hidden md:block" />

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}