import { useState } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Finance Dashboard Web App',
      date: 'Aug 2025 - Sep 2025',
      description: 'Financial management app for tracking transactions, expenses, income, and savings goals with real-time updates.',
      tech: ['Laravel', 'React', 'PostgreSQL', 'Recharts'],
      features: ['RESTful APIs', 'CRUD Operations', 'Interactive Dashboards', 'Glassmorphism UI'],
      color: 'from-blue-400 to-cyan-400',
      icon: '💰',
      liveUrl: 'https://finance-ashen-psi.vercel.app/',
      githubUrl: 'https://github.com/lentakristina/Finance'
    },
    {
      id: 2,
      title: 'Leave Application System',
      date: 'Feb 2023 - Jul 2023',
      description: 'HR management system digitizing leave requests, approvals, and record-keeping with role-based access.',
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Figma'],
      features: ['Role-Based Auth', 'Workflow Automation', 'Black-box Testing', 'SDLC Methodology'],
      color: 'from-purple-400 to-pink-400',
      icon: '📋',
      documentUrl: '#contact'
    }
  ];

  const allTech = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg">Building real-world solutions with modern tech stacks</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTech.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === tech 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r ${project.color}`} />
              
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.icon}</div>
                <Code className={`transition-transform duration-300 ${hoveredProject === project.id ? 'rotate-12 scale-110' : ''}`} size={24} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{project.date}</p>
              <p className="text-gray-600 mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold border border-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600
                     to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                )}
                
                {project.documentUrl && (
                  <a
                    href={project.documentUrl}
                    className="flex items-center gap-2 px-5 py-2.5 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    View Document
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}