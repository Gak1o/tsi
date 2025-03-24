'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Agricultural insights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl max-w-2xl">
            Insights, guides, and resources for modern agriculture
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Search */}
            <div className="w-full md:w-96">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="soil-health">Soil Health</option>
                <option value="sustainable-farming">Sustainable Farming</option>
                <option value="technology">Technology</option>
                <option value="case-study">Case Study</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-green-600 font-semibold hover:text-green-700"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resource Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-green-600 mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const blogPosts = [
  {
    title: 'The Future of Sustainable Agriculture',
    category: 'sustainable-farming',
    image: '/images/blog-1.jpg',
    excerpt: 'Explore how modern farming practices are evolving to meet environmental challenges while maintaining productivity.',
    slug: 'future-sustainable-agriculture',
    readTime: 5,
  },
  {
    title: 'Understanding Soil Health Indicators',
    category: 'soil-health',
    image: '/images/blog-2.jpg',
    excerpt: 'Learn about key indicators that help determine the health and fertility of your soil.',
    slug: 'soil-health-indicators',
    readTime: 7,
  },
  {
    title: 'Precision Agriculture Technologies',
    category: 'technology',
    image: '/images/blog-3.jpg',
    excerpt: 'Discover how modern technology is revolutionizing farming practices and improving efficiency.',
    slug: 'precision-agriculture-tech',
    readTime: 6,
  },
  {
    title: 'Success Story: Organic Farm Transition',
    category: 'case-study',
    image: '/images/blog-4.jpg',
    excerpt: 'Read how a traditional farm successfully transitioned to organic practices with our help.',
    slug: 'organic-farm-transition',
    readTime: 8,
  },
  {
    title: 'Best Practices for Soil Conservation',
    category: 'soil-health',
    image: '/images/blog-5.jpg',
    excerpt: 'Essential techniques and strategies for preserving and improving soil quality.',
    slug: 'soil-conservation-practices',
    readTime: 6,
  },
  {
    title: 'Smart Irrigation Systems Guide',
    category: 'technology',
    image: '/images/blog-6.jpg',
    excerpt: 'A comprehensive guide to implementing smart irrigation systems for water conservation.',
    slug: 'smart-irrigation-guide',
    readTime: 7,
  },
];

const resources = [
  {
    title: 'Soil Analysis Guide',
    description: 'Complete guide to understanding soil analysis reports and implementing recommendations.',
    downloadUrl: '/resources/soil-analysis-guide.pdf',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Farming Toolkit',
    description: 'Essential tools and templates for implementing sustainable farming practices.',
    downloadUrl: '/resources/sustainable-farming-toolkit.pdf',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Crop Planning Calendar',
    description: 'Interactive calendar for optimal crop rotation and planting schedules.',
    downloadUrl: '/resources/crop-planning-calendar.pdf',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'ROI Calculator',
    description: 'Excel spreadsheet to calculate return on investment for agricultural improvements.',
    downloadUrl: '/resources/roi-calculator.xlsx',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
]; 