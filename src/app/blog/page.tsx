'use client';

import Link from "next/link";

const blogPosts = [
  {
    title: "How to Plan a Home Extension in London",
    slug: "how-to-plan-home-extension",
    description: "A complete guide for homeowners in London looking to plan a home extension — from permits to contractors."
  },
  {
    title: "Signs Your Roof Needs Repair",
    slug: "signs-your-roof-needs-repair",
    description: "Common symptoms of roof damage and when it's time to call a professional roofer."
  },
  {
    title: "Driveway Materials: Resin vs. Block Paving",
    slug: "driveway-materials-resin-vs-block",
    description: "Compare resin-bound vs. block paving driveways for cost, aesthetics, and durability."
  },
  {
    title: "Bathroom Plumbing Checklist",
    slug: "bathroom-plumbing-checklist",
    description: "Ensure your next bathroom renovation is leak-free and code-compliant with this practical checklist."
  },
  {
    title: "Electrical Safety Regulations in UK Home Renovations",
    slug: "electrical-safety-uk-home-renovations",
    description: "Learn about Part P regulations, EICs, and certified electricians for your renovation projects."
  }
];

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Construction Tips & Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map(post => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="block p-4 border border-gray-300 rounded-xl shadow hover:shadow-lg transition duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
