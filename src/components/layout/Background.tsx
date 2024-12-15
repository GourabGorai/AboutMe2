import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-purple-400/20 blur-xl" />
        <div className="absolute right-[15%] top-[30%] h-32 w-32 rounded-full bg-blue-400/20 blur-xl" />
        <div className="absolute left-[30%] bottom-[30%] h-32 w-32 rounded-full bg-pink-400/20 blur-xl" />
      </div>
    </div>
  );
}