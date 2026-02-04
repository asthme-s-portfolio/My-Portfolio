import { Code, ExternalLink, Github } from 'lucide-react';

function ProjectsPage({ setActiveSection }) {
  const projects = [
    {
      title: 'Race Registration & Management System',
      description: 'An online booking system for marathons that allows seamless registration and secure payment processing for runners and event organizers.',
      tech: ['React', 'Vite', 'Material UI', 'PostgreSQL', 'NestJS'],
      image: '/onespan.jpeg',
      link: '#',
      github: '#'
    },
    {
      title: 'School Admissions Portal',
      description: 'A comprehensive school management system for handling student admissions, enrollment, and administrative processes.',
      tech: ['HTML', 'CSS', 'PHP'],
      image: '/school.png',
      link: '#',
      github: '#'
    },
    {
      title: 'Personal Portfolio',
      description: 'My personal portfolio website showcasing my projects, skills, and experience as a software developer with modern design and animations.',
      tech: ['React', 'Tailwind CSS', 'Lucide Icons'],
      image: '/Kaasa.jpeg',
      link: '#',
      github: '#'
    },
     {
      title: 'Solar Tracking System ',
      description: 'Arduino-based solar-powered prototype designed to demonstrate basic energy harvesting and control. It uses an Arduino microcontroller to monitor and manage power from a small solar panel, with supporting components such as sensors, wiring, and a battery for storage. The system is mounted on a custom frame to showcase how Arduino can be used to build simple renewable energy and automation projects.',
      tech: ['Arduino', 'C++', 'Electronics'],
      image: '/solar.jpeg',
      link: '#',
      github: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-purple-600">
            My Projects
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects showcasing my skills in web development and design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 group/btn"
                  >
                    View Project
                    <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                    title="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-3xl mx-auto border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              I'm always open to discussing new projects and creative ideas.
            </p>
            <button
              onClick={() => setActiveSection && setActiveSection('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300 group"
            >
              Get In Touch
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;