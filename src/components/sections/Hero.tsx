import React from 'react';
import { Linkedin, Github, Facebook, Mail } from 'lucide-react';
import { SocialLink } from '../ui/SocialLink';

export function Hero() {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col items-center text-center">
        <img
          src="img/profile.jpg"
          alt="Profile"
          className="mb-8 h-32 w-32 rounded-full object-cover shadow-lg"
        />
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Gourab Gorai
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          A passionate and ambitious individual dedicated to advancing the field of computer science. 
          Recipient of the prestigious Reliance Foundation Scholarship 2022.
        </p>
        <div className="flex space-x-4">
          <SocialLink href="https://www.linkedin.com/in/gourab-gorai-4a51541ba" icon={Linkedin} />
          <SocialLink href="https://github.com/GourabGorai" icon={Github} />
          <SocialLink href="https://www.facebook.com/gourab.gorai.986" icon={Facebook} />
          <SocialLink href="mailto:gourabg30march@gmail.com" icon={Mail} />
        </div>
      </div>
    </section>
  );
}
