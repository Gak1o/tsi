import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Agricultural services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive agricultural solutions for sustainable farming
          </p>
        </div>
      </section>

      {/* Services Categories */}
      {services.map((category, index) => (
        <section
          key={index}
          id={category.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12">
                {/* Service Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">{category.title}</h2>
                  <p className="text-gray-600 mb-8">{category.description}</p>

                  {/* Service Features */}
                  <ul className="space-y-4 mb-8">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-3">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold mb-4">Pricing</h3>
                    <p className="text-gray-600 mb-4">{category.pricing}</p>
                    <p className="text-sm text-gray-500">
                      * Prices may vary based on project scope and requirements
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg text-center hover:bg-green-700 transition-colors"
                    >
                      Request a Quote
                    </Link>
                    <Link
                      href="/contact"
                      className="border border-green-600 text-green-600 px-8 py-3 rounded-lg text-center hover:bg-green-50 transition-colors"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

const services = [
  {
    id: 'soil-analysis',
    title: 'Soil Analysis & Testing',
    description: "Our comprehensive soil analysis services provide detailed insights into your soil's composition, health, and potential for optimal crop growth.",
    image: '/images/service-soil.jpg',
    features: [
      'Complete nutrient profile analysis',
      'pH level testing and adjustment recommendations',
      'Organic matter content assessment',
      'Soil structure and texture analysis',
      'Contamination testing',
      'Custom fertilization recommendations',
    ],
    pricing: 'Starting from $299 per comprehensive soil analysis report',
  },
  {
    id: 'land-management',
    title: 'Land Management Solutions',
    description: 'Expert land management services to optimize your agricultural operations while maintaining environmental sustainability.',
    image: '/images/service-land.jpg',
    features: [
      'Sustainable land use planning',
      'Erosion control strategies',
      'Irrigation system optimization',
      'Crop rotation planning',
      'Environmental impact assessment',
      'Conservation practices implementation',
    ],
    pricing: 'Custom pricing based on land size and project scope',
  },
  {
    id: 'sustainable-farming',
    title: 'Sustainable Farming Consultation',
    description: 'Transform your farming practices with our expert consultation services focused on sustainability and efficiency.',
    image: '/images/service-farming.jpg',
    features: [
      'Organic farming transition support',
      'Precision agriculture implementation',
      'Resource optimization strategies',
      'Pest management solutions',
      'Yield improvement techniques',
      'Certification assistance',
    ],
    pricing: 'Consultation packages starting from $499/month',
  },
]; 