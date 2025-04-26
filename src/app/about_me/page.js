import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/MainNavbar';

export default function AboutMePage() {
  return (
    <main className="pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <section className="bg-base-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
              <p className="mb-3">
                [Your professional background summary]
              </p>
              <p>
                [Additional professional background details]
              </p>
            </section>

            <section className="bg-base-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
              <div className="mb-4">
                <h3 className="text-xl font-medium">[Degree Title]</h3>
                <p className="text-sm opacity-75">[Institution], [Years]</p>
                <p className="mt-2">[Description of focus or achievements]</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Certifications</h3>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>[Certification 1]</li>
                  <li>[Certification 2]</li>
                  <li>[Certification 3]</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-base-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="badge badge-primary">[Skill 1]</div>
                    <div className="badge badge-primary">[Skill 2]</div>
                    <div className="badge badge-primary">[Skill 3]</div>
                    <div className="badge badge-primary">[Skill 4]</div>
                    <div className="badge badge-primary">[Skill 5]</div>
                    <div className="badge badge-primary">[Skill 6]</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="badge badge-secondary">[Skill 1]</div>
                    <div className="badge badge-secondary">[Skill 2]</div>
                    <div className="badge badge-secondary">[Skill 3]</div>
                    <div className="badge badge-secondary">[Skill 4]</div>
                    <div className="badge badge-secondary">[Skill 5]</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="badge badge-accent">[Tool 1]</div>
                    <div className="badge badge-accent">[Tool 2]</div>
                    <div className="badge badge-accent">[Tool 3]</div>
                    <div className="badge badge-accent">[Tool 4]</div>
                    <div className="badge badge-accent">[Tool 5]</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-base-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Interests</h2>
              <p className="mb-3">
                [Your personal interests and hobbies]
              </p>
              <p>
                [Additional interests or personal development activities]
              </p>
            </section>
          </div>
        </div>

        <div className="mt-12 bg-base-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          
          <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-10">
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-10 top-1 w-5 h-5 rounded-full bg-primary"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-medium">[Job Title]</h3>
                <span className="text-sm font-semibold bg-primary bg-opacity-20 px-3 py-1 rounded-full">
                  [Time Period]
                </span>
              </div>
              <p className="text-base-content/70 mb-1">[Company Name]</p>
              <ul className="list-disc ml-5 mt-3 space-y-1">
                <li>[Responsibility or achievement 1]</li>
                <li>[Responsibility or achievement 2]</li>
                <li>[Responsibility or achievement 3]</li>
                <li>[Responsibility or achievement 4]</li>
              </ul>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-10 top-1 w-5 h-5 rounded-full bg-primary"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-medium">[Job Title]</h3>
                <span className="text-sm font-semibold bg-primary bg-opacity-20 px-3 py-1 rounded-full">
                  [Time Period]
                </span>
              </div>
              <p className="text-base-content/70 mb-1">[Company Name]</p>
              <ul className="list-disc ml-5 mt-3 space-y-1">
                <li>[Responsibility or achievement 1]</li>
                <li>[Responsibility or achievement 2]</li>
                <li>[Responsibility or achievement 3]</li>
                <li>[Responsibility or achievement 4]</li>
              </ul>
            </div>
            
            {/* Add more timeline items as needed */}
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
    </main>
  );
}
