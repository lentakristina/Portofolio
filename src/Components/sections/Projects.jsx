import { useState } from 'react';
import { Code, ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState({}); 

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
      screenshots: [
        { name: 'Dashboard', url: '/dashboard.png' },
        { name: 'Transactions', url: '/transactions.png' },
        { name: 'Goals', url: '/goals.png' }
      ],
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
      screenshots: [
        { name: 'Kadiv Mengelola Akun', url: '/kadiv.jpg' },
        { name: 'Pegawai Mengajukan Cuti', url: '/user.jpg' },
        { name: 'Validasi Kadiv', url: '/kadiv2.jpg' },
        { name: 'Validasi Pimpinan', url: '/pimpinan.jpg' }
      ],
      documentUrl: '/Skripsi.pdf'
    }
  ];

  const allTech = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));

  const openLightbox = (screenshots, index) => {
    setLightboxImages(screenshots);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const nextCarousel = (projectId, totalImages) => {
  setCarouselIndex(prev => ({
    ...prev,
    [projectId]: ((prev[projectId] || 0) + 1) % Math.max(1, totalImages - 2)
  }));
};

const prevCarousel = (projectId, totalImages) => {
  setCarouselIndex(prev => ({
    ...prev,
    [projectId]: ((prev[projectId] || 0) - 1 + Math.max(1, totalImages - 2)) % Math.max(1, totalImages - 2)
  }));
};

const getVisibleScreenshots = (screenshots, projectId) => {
  if (screenshots.length <= 3) return screenshots;
  const startIndex = carouselIndex[projectId] || 0;
  return [
    screenshots[startIndex],
    screenshots[(startIndex + 1) % screenshots.length],
    screenshots[(startIndex + 2) % screenshots.length]
  ];
};

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 min-h-screen">
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
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.color}`} />
              
              {/* Screenshot Gallery Preview */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8">
                <div className="relative bg-white rounded-t-2xl shadow-2xl overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-600 flex items-center">
                      <span className="mr-2">🔒</span>
                      <span className="truncate">{project.liveUrl || 'localhost:3000'}</span>
                    </div>
                  </div>
                  
                 {/* Screenshot Carousel */}
<div className="relative">
  {/* Navigation Arrows - Only show if more than 3 screenshots */}
  {project.screenshots.length > 3 && (
    <>
      <button
        onClick={() => prevCarousel(project.id, project.screenshots.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => nextCarousel(project.id, project.screenshots.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={20} />
      </button>
    </>
  )}

  <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50">
    {getVisibleScreenshots(project.screenshots, project.id).map((screenshot, idx) => {
      const actualIndex = project.screenshots.findIndex(s => s.url === screenshot.url);
      return (
        <div
          key={idx}
          onClick={() => openLightbox(project.screenshots, actualIndex)}
          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group/img transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img 
            src={screenshot.url} 
            alt={screenshot.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-2">
            <span className="text-white text-xs font-semibold">{screenshot.name}</span>
          </div>
          <div className="absolute inset-0 ring-1 ring-purple-500 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </div>
      );
    })}
  </div>

  {/* Dots Indicator - Only show if more than 3 screenshots */}
  {project.screenshots.length > 3 && (
    <div className="flex justify-center gap-1.5 py-2 bg-gray-50">
      {Array.from({ length: Math.max(1, project.screenshots.length - 2) }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCarouselIndex(prev => ({ ...prev, [project.id]: idx }))}
          className={`transition-all duration-300 rounded-full ${
            (carouselIndex[project.id] || 0) === idx 
              ? 'w-6 h-2 bg-gradient-to-r from-purple-600 to-pink-600' 
              : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
          }`}
        />
      ))}
    </div>
  )}
</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.icon}</div>
                  <Code className={`transition-transform duration-300 text-gray-400 ${hoveredProject === project.id ? 'rotate-12 scale-110' : ''}`} size={24} />
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

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
                      target="_blank"
                      rel="noopener noreferrer"
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
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors p-3 rounded-full hover:bg-white/10"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors p-3 rounded-full hover:bg-white/10"
          >
            <ChevronRight size={40} />
          </button>

          <div className="max-w-6xl w-full">
            <img
              src={lightboxImages[currentImageIndex]?.url}
              alt={lightboxImages[currentImageIndex]?.name}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold">{lightboxImages[currentImageIndex]?.name}</h3>
              <p className="text-gray-400 mt-2">{currentImageIndex + 1} / {lightboxImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}