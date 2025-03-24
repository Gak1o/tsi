import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Agricultural landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Cultivating Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Expert soil analysis and land management solutions for optimal agricultural productivity
          </p>
          <Link
            href="/contact"
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At The Soil Inventory, we're dedicated to revolutionizing agricultural practices through advanced soil analysis and sustainable land management solutions. Our expertise helps farmers maximize yields while preserving the environment for future generations.
            </p>
            <Link
              href="/about"
              className="text-green-600 font-semibold hover:text-green-700"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link
                    href={`/blog/${item.slug}`}
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
    </div>
  );
}

const services = [
  {
    id: 'soil-analysis',
    title: 'Soil Analysis',
    description: 'Comprehensive soil testing and analysis to optimize your crop yield.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 'land-management',
    title: 'Land Management',
    description: 'Strategic planning and implementation of sustainable land use practices.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'sustainable-farming',
    title: 'Sustainable Farming',
    description: 'Expert guidance on implementing eco-friendly farming practices.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'John Smith',
    role: 'Farm Owner',
    image: '/images/testimonial-1.jpg',
    quote: "The Soil Inventory analysis helped us increase our crop yield by 40% while reducing water usage.",
  },
  {
    name: 'Sarah Johnson',
    role: 'Agricultural Consultant',
    image: '/images/testimonial-2.jpg',
    quote: "Their sustainable farming solutions have transformed how we approach land management.",
  },
  {
    name: 'Michael Brown',
    role: 'Ranch Manager',
    image: '/images/testimonial-3.jpg',
    quote: "The team's expertise and dedication to sustainable practices is unmatched in the industry.",
  },
];

const news = [
  {
    title: 'New Soil Analysis Technology',
    excerpt: 'Introducing our latest soil analysis technology that provides faster and more accurate results.',
    image: '/images/news-1.jpg',
    slug: 'new-soil-analysis-technology',
  },
  {
    title: 'Sustainable Farming Workshop',
    excerpt: 'Join our upcoming workshop on implementing sustainable farming practices.',
    image: '/images/news-2.jpg',
    slug: 'sustainable-farming-workshop',
  },
  {
    title: 'Client Success Story',
    excerpt: 'How we helped a local farm increase their yield while reducing environmental impact.',
    image: '/images/news-3.jpg',
    slug: 'client-success-story',
  },
];
