import React from 'react';
import { GraduationCap } from 'lucide-react';

interface Education {
  school: string;
  degree: string;
  year: string;
  expected?: boolean;
}

const education: Education[] = [
  {
    school: "DR. B.C. Roy Academy of Professional Courses",
    degree: "Bachelor of Computer Application (BCA)",
    year: "2022 - 2025",
    expected: true
  },
  {
    school: "Bidhan Chandra Institution",
    degree: "Higher Secondary Education - Commerce",
    year: "2022"
  },
  {
    school: "Durgapur Ispat Vidyalaya",
    degree: "Secondary Education",
    year: "2020"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.school} className="group relative rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="absolute -left-3 top-6 h-6 w-6 rounded-full bg-blue-500 p-1 text-white">
                <GraduationCap size={16} />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.school}</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">{edu.degree}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                  {edu.year} {edu.expected && "(Expected)"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}