import React from 'react';
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="text-center">
          <img
            src="public/images/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-xl"
          />
          <h1 className="text-5xl font-bold mb-4">Gourab <span className="text-blue-500">Gorai</span></h1>
          <p className="text-xl text-gray-300 mb-6">Computer Science Student & ML Enthusiast</p>
          <div className="flex justify-center space-x-4">
            <SocialLink href="https://github.com/GourabGorai" icon={<Github className="w-6 h-6" />} />
            <SocialLink href="https://www.linkedin.com/in/gourab-gorai-4a51541ba" icon={<Linkedin className="w-6 h-6" />} />
            <SocialLink href="https://www.facebook.com/gourab.gorai.986" icon={<Facebook className="w-6 h-6" />} />
            <SocialLink href="mailto:gourabg30march@gmail.com" icon={<Mail className="w-6 h-6" />} />
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300">
            Hello! I'm a passionate and ambitious individual dedicated to advancing the field of computer science. 
            As a recipient of the prestigious Reliance Foundation Scholarship of 2022, I am driven to excel in 
            technology and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
}
