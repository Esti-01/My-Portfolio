"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeController from './ThemeController';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 'top') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${id}`;
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm px-4 sm:px-6 md:px-8">
      <div className="navbar-start">
        <div className="mobile-menu-container lg:hidden">
          <button
            className="p-2 bg-transparent border-none outline-none hover:bg-transparent focus:bg-transparent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <a 
                  className="block px-4 py-2 text-sm hover:bg-base-200 cursor-pointer" 
                  onClick={() => isHomePage ? scrollToSection('top') : window.location.href = '/'}
                >
                  Home
                </a>
                <a 
                  className="block px-4 py-2 text-sm hover:bg-base-200 cursor-pointer" 
                  onClick={() => isHomePage ? scrollToSection('about') : window.location.href = '/#about'}
                >
                  About Me
                </a>
                <a 
                  className="block px-4 py-2 text-sm hover:bg-base-200 cursor-pointer" 
                  onClick={() => isHomePage ? scrollToSection('projects') : window.location.href = '/#projects'}
                >
                  Projects
                </a>
              </div>
            </div>
          )}
        </div>
        
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Esti
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>{isHomePage ? <a onClick={() => scrollToSection('top')} className="cursor-pointer">Home</a> : <Link href="/">Home</Link>}</li>
          <li>{isHomePage ? <a onClick={() => scrollToSection('about')} className="cursor-pointer">About Me</a> : <Link href="/#about">About Me</Link>}</li>
          <li>{pathname === '/projects' ? <Link href="/#projects">Projects</Link> : (isHomePage ? <a onClick={() => scrollToSection('projects')} className="cursor-pointer">Projects</a> : <Link href="/projects">Projects</Link>)}</li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <div className="mr-2 sm:mr-4 md:mr-6 lg:mr-10">
          <ThemeController />
        </div>
      </div>
    </div>
  );
} 