import React from 'react';
import { cn } from '../../utils/cn';

interface NavLinksProps {
  className?: string;
  mobile?: boolean;
  onClick?: () => void;
}

const navItems = ['About', 'Projects', 'Education', 'Skills', 'Hobbies', 'Gallery', 'Certifications'];

export function NavLinks({ className, mobile, onClick }: NavLinksProps) {
  const baseStyles = mobile
    ? "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
    : "rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white";

  return (
    <div className={cn(mobile ? "space-y-1 px-2 pb-3 pt-2" : "ml-10 flex items-baseline space-x-4", className)}>
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={baseStyles}
          onClick={onClick}
        >
          {item}
        </a>
      ))}
    </div>
  );
}