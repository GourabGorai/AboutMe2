import React from 'react';
import { Check } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const skills: Skill[] = [
  { name: "Python", level: "Intermediate" },
  { name: "Java", level: "Beginner" },
  { name: "Machine Learning", level: "Beginner" },
  { name: "DBMS", level: "Beginner" },
  { name: "HTML", level: "Intermediate" },
  { name: "CSS", level: "Beginner" },
  { name: "JavaScript", level: "Beginner" }
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-3 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{skill.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}