import React from 'react';

export function Gradient() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
}