import React from 'react';
import Link from 'next/link';

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-base-100 flex items-center py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Projects</h2>
            <p className="mb-4 text-sm sm:text-base">
              I've worked on various projects ranging from web applications to mobile apps.
              My portfolio showcases a blend of personal and professional projects that
              demonstrate my technical skills and problem-solving abilities.
            </p>
            <p className="mb-6 text-sm sm:text-base">
              Each project represents a unique challenge that I approached with creativity
              and technical expertise, resulting in elegant and efficient solutions.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/projects">
                <button className="btn btn-primary w-full sm:w-auto">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="p-8 sm:p-12 bg-base-200 rounded-3xl shadow-lg flex items-center justify-center h-64 sm:h-80">
              <h3 className="text-xl sm:text-2xl font-bold text-center">Coming Soon</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 