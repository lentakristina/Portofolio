import { useState } from 'react';
import { Code } from 'lucide-react';

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
      icon: '💰'
    },
    {
      id: 2,
      title: 'Leave Application System',
      date: 'Feb 2023 - Jul 2023',
      description: 'HR management system digitizing leave requests, approvals, and record-keeping with role-based access.',
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Figma'],
      features: ['Role-Based Auth', 'Workflow Automation', 'Black-box Testing', 'SDLC Methodology'],
      color: 'from-purple-400 to-pink-400',
      icon: '📋'
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

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold border border-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};