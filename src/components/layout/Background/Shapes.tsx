import React from 'react';

export function Shapes() {
  return (
    <div className="absolute inset-0">
      {/* Floating spheres */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float-slow rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-1/4 top-1/3 h-64 w-64 animate-float-slower rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 h-64 w-64 animate-float rounded-full bg-pink-500/10 blur-3xl" />
      
      {/* 3D rotating cube */}
      <div className="absolute left-1/2 top-1/2 [perspective:1000px]">
        <div className="h-32 w-32 animate-rotate-cube [transform-style:preserve-3d]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-full border border-white/10 bg-white/5 backdrop-blur-sm"
              style={{
                transform: `rotateY(${i * 90}deg) rotateX(${i > 3 ? 90 : 0}deg) translateZ(64px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}