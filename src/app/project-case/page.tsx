'use client';

import Image from 'next/image';

const caseStudies = [
  {
    title: 'Rear Extension with Open Plan Kitchen – Ilford, London',
    slug: 'rear-extension-ilford',
    beforeImage: '/images/projects/extension-before.jpg',
    afterImage: '/images/projects/extension-after.jpg',
    content: `This project involved demolishing an old conservatory and building a full-width rear extension to accommodate an open-plan kitchen-diner. The main challenge was working around party wall agreements and a tight site with limited access. Our team completed the project within 10 weeks, installing bifold doors, underfloor heating, and Velux skylights. The client was especially pleased with the clean brickwork and energy efficiency improvements.`,
    testimonial: '“Dream Home Construction turned our dark kitchen into a bright, modern family space. They managed everything smoothly and stuck to the promised schedule.” – Mrs. Kaur'
  },
  {
    title: 'New Roof Installation – Semi-detached Property in Redbridge',
    slug: 'new-roof-redbridge',
    beforeImage: '/images/projects/roof-before.jpg',
    afterImage: '/images/projects/roof-after.jpg',
    content: `We replaced an aging tile roof with a new breathable membrane and high-quality slate tiles. The existing roof had multiple leaks and rotten battens. After removing all defective layers, we reinforced the structure and installed new lead flashing around chimneys. The project was completed in under 2 weeks. We also replaced old gutters and fascias for a complete upgrade.`,
    testimonial: '“Quick, reliable, and very tidy work. We’re confident our roof will now last another 30 years.” – Mr. Thompson'
  }
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-10">Project Gallery & Case Studies</h1>

      {caseStudies.map(project => (
        <div key={project.slug} className="mb-16 border-b pb-10">
          <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Before</p>
              <Image src={project.beforeImage} alt="Before image" width={600} height={400} className="rounded" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">After</p>
              <Image src={project.afterImage} alt="After image" width={600} height={400} className="rounded" />
            </div>
          </div>
          <p className="mb-4 text-gray-700 whitespace-pre-line">{project.content}</p>
          <blockquote className="italic text-green-700 border-l-4 pl-4 border-green-400">
            {project.testimonial}
          </blockquote>
        </div>
      ))}
    </main>
  );
}
