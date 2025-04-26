"use client";
import React from 'react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content text-center px-4 sm:px-6 md:px-8">
        <div className="max-w-md sm:max-w-lg md:max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold">Hello there</h1>
          <p className="py-4 sm:py-6 text-sm sm:text-base md:text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="btn btn-primary w-full sm:w-auto">Download CV</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary w-full sm:w-auto">Contact me</button>
          </div>
        </div>
      </div>
    </div>
  );
} 