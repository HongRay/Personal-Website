
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import ContactSection from '../components/ContactSection';

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();

  const experiences = [
    {
      id: '1',
      title: 'Software Engineering Intern',
      company: 'TechCorp Solutions',
      duration: 'June 2024 - August 2024',
      location: 'San Francisco, CA',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes. Participated in code reviews and agile development processes.',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop',
      skills: ['React', 'Node.js', 'MongoDB', 'Git'],
      achievements: [
        'Built a user dashboard that improved customer engagement by 35%',
        'Optimized database queries, reducing load times by 50%',
        'Collaborated with a team of 8 developers using Agile methodology',
        'Wrote comprehensive unit tests achieving 90% code coverage'
      ],
      projects: [
        {
          name: 'Customer Analytics Dashboard',
          description: 'Real-time analytics dashboard for tracking user behavior and engagement metrics',
          technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL']
        },
        {
          name: 'API Performance Optimization',
          description: 'Refactored legacy APIs to improve response times and scalability',
          technologies: ['Node.js', 'Express', 'Redis', 'Docker']
        }
      ]
    },
    {
      id: '2',
      title: 'Junior Developer',
      company: 'StartupXYZ',
      duration: 'January 2024 - May 2024',
      location: 'Austin, TX',
      description: 'Built responsive web interfaces and implemented RESTful APIs. Worked closely with design team to translate mockups into functional components.',
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop',
      skills: ['TypeScript', 'React', 'Express.js', 'PostgreSQL'],
      achievements: [
        'Developed mobile-first responsive designs for 5+ client projects',
        'Implemented authentication system used by 1000+ users',
        'Reduced bundle size by 40% through code splitting and optimization',
        'Mentored 2 junior interns in web development best practices'
      ],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with payment integration and inventory management',
          technologies: ['React', 'TypeScript', 'Express.js', 'Stripe API']
        },
        {
          name: 'Real-time Chat Application',
          description: 'WebSocket-based chat application with file sharing capabilities',
          technologies: ['Socket.io', 'React', 'Node.js', 'MongoDB']
        }
      ]
    },
    {
      id: '3',
      title: 'Frontend Developer',
      company: 'WebDev Agency',
      duration: 'September 2023 - December 2023',
      location: 'Remote',
      description: 'Created modern, responsive websites for various clients. Implemented interactive features and animations.',
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop',
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      achievements: [
        'Delivered 12+ client websites with 100% on-time completion rate',
        'Improved website performance scores by average of 60%',
        'Created reusable component library used across 10+ projects',
        'Achieved 98% client satisfaction rating'
      ],
      projects: [
        {
          name: 'Restaurant Booking System',
          description: 'Online reservation system with calendar integration and SMS notifications',
          technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Twilio API']
        },
        {
          name: 'Portfolio Showcase Platform',
          description: 'CMS-powered portfolio platform for creative professionals',
          technologies: ['Nuxt.js', 'Contentful', 'GSAP', 'Netlify']
        }
      ]
    }
  ];

  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Experience not found</h1>
          <Link to="/experience" className="text-[#254194] hover:underline">
            Back to Experience
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/experience" 
            className="inline-flex items-center text-[#254194] hover:text-[#1a2d6b] mb-8 transition-colors duration-300 hover:translate-x-1 transform"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Experience
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-start gap-6">
                <img 
                  src={experience.logo} 
                  alt={`${experience.company} logo`}
                  className="w-20 h-20 rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-grow">
                  <h1 className="text-3xl font-bold text-[#254194] mb-2">{experience.title}</h1>
                  <h2 className="text-2xl text-gray-700 font-semibold mb-4">{experience.company}</h2>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Overview</h3>
                    <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-[#254194] text-white text-sm rounded-full hover:bg-[#1a2d6b] transition-colors duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-2 h-2 bg-[#254194] rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-600 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Notable Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {experience.projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[#254194] transition-colors duration-300" />
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 bg-white text-gray-700 text-xs rounded border hover:border-[#254194] transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default ExperienceDetail;
