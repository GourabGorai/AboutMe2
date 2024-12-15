import React from 'react';
import { Particles } from './Particles';
import { Gradient } from './Gradient';
import { Grid } from './Grid';
import { Shapes } from './Shapes';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-gray-900">
      <Gradient />
      <Grid />
      <Shapes />
      <Particles />
    </div>
  );
}