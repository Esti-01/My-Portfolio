import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-base-100 flex items-center py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4 text-sm sm:text-base">
              I'm a passionate developer with experience in building modern web applications.
              I specialize in front-end development, creating responsive and user-friendly interfaces.
            </p>
            <p className="mb-6 text-sm sm:text-base">
              With a strong foundation in JavaScript, React, and related technologies,
              I continuously strive to enhance my skills and stay updated with the latest trends.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/about_me">
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