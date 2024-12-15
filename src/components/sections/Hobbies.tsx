import React from 'react';
import { Film, Tv, Newspaper } from 'lucide-react';

interface Hobby {
  name: string;
  icon: typeof Film;
  description: string;
}

const hobbies: Hobby[] = [
  {
    name: "Movies",
    icon: Film,
    description: "Exploring diverse genres and storytelling through cinema"
  },
  {
    name: "Web Series",
    icon: Tv,
    description: "Following engaging long-form narratives and character development"
  },
  {
    name: "Tech News",
    icon: Newspaper,
    description: "Staying updated with the latest technological advancements"
  }
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">Hobbies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <div key={hobby.name} className="group rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{hobby.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{hobby.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}