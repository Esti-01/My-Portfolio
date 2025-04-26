"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/MainNavbar';
import Image from 'next/image';

// Example project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "[Project Title]",
    description: "[Brief project description]",
    tags: ["[Technology 1]", "[Technology 2]", "[Technology 3]"],
    image: "/images/placeholder.png"
  },
  {
    id: 2,
    title: "[Project Title]",
    description: "[Brief project description]",
    tags: ["[Technology 1]", "[Technology 2]", "[Technology 3]"],
    image: "/images/placeholder.png"
  },
  {
    id: 3,
    title: "[Project Title]",
    description: "[Brief project description]",
    tags: ["[Technology 1]", "[Technology 2]"],
    image: "/images/placeholder.png"
  }
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter projects based on search term
  const filteredProjects = projectsData.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                className="input input-bordered w-full py-3 px-6 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <div key={project.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
                  <figure className="px-6 pt-6">
                    <div className="bg-base-300 w-full h-48 rounded-xl flex items-center justify-center">
                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          width={400} 
                          height={300}
                          className="rounded-xl"
                        />
                      ) : (
                        <span className="text-xl font-semibold opacity-30">Image Placeholder</span>
                      )}
                    </div>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="badge badge-primary">{tag}</span>
                      ))}
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
                <p className="opacity-70">Try adjusting your search criteria</p>
              </div>
            )}
            
          </div>
        </div>
        
        <div className="mt-12 bg-base-100 p-6 rounded-lg max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-6">
            [Your contact message]
          </p>
          <Link href="/#contact">
            <button className="btn btn-primary">Contact Me</button>
          </Link>
        </div>
      </div>
    </>
  );
}
