import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Our farm fields"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl">
            Leading the way in sustainable agriculture through innovation and expertise
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/3">
                    <div className="relative h-64 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To revolutionize agricultural practices through advanced soil analysis
                  and sustainable land management solutions, ensuring food security
                  while preserving our planet for future generations.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-4">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <div>
                        <h4 className="font-bold">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const history = [
  {
    title: 'Founded in 2010',
    description: 'Started as a small soil testing laboratory with a vision to revolutionize agricultural practices through data-driven insights.',
    image: '/images/history-1.jpg',
  },
  {
    title: 'Expansion in 2015',
    description: 'Expanded our services to include comprehensive land management solutions and sustainable farming consultancy.',
    image: '/images/history-2.jpg',
  },
  {
    title: 'Innovation in 2020',
    description: 'Introduced cutting-edge soil analysis technology and AI-powered recommendations for optimal crop yield.',
    image: '/images/history-3.jpg',
  },
];

const values = [
  {
    title: 'Sustainability',
    description: 'We prioritize environmental conservation in all our practices.',
  },
  {
    title: 'Innovation',
    description: 'We continuously seek new technologies and methods to improve agricultural practices.',
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and transparency in our work.',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our services.',
  },
];

const team = [
  {
    name: 'Dr. Emily Chen',
    role: 'Chief Soil Scientist',
    bio: 'With over 15 years of experience in soil science and agricultural research.',
    image: '/images/team-1.jpg',
  },
  {
    name: 'Mark Rodriguez',
    role: 'Land Management Director',
    bio: 'Expert in sustainable land use practices and environmental conservation.',
    image: '/images/team-2.jpg',
  },
  {
    name: 'Dr. Sarah Thompson',
    role: 'Agricultural Technology Lead',
    bio: 'Specializes in implementing innovative farming technologies.',
    image: '/images/team-3.jpg',
  },
]; 