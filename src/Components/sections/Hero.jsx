import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Instagram,
  Phone, 
  ChevronRight, 
  MapPin 
} from "lucide-react";
import { personalInfo } from "../../data/content";


export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20 animate-pulse" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: `scale(${0.5 + Math.random() * 1.5})`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-xl rounded-full border border-pink-500/50 shadow-lg shadow-pink-500/25">
            <Sparkles className="w-5 h-5 text-pink-600 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-semibold bg-gradient-to-r from-slate-500 to-pink-700 bg-clip-text text-transparent">
              Available for Opportunities
            </span>
          </div>
        </div>
        
        {/* Main Content - Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Photo */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-purple-500/30 backdrop-blur-sm bg-gradient-to-br from-purple-900/20 to-pink-900/20 transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={personalInfo.photo || "/profile.png"} 
                  alt={personalInfo.name}
                  className="relative w-64 h-80 md:w-72 md:h-96 object-cover object-top"
                />
                
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Icons Around Photo */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDuration: '2s' }}>
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce shadow-lg" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                <Github className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left order-1 md:order-2 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                {personalInfo.name}
              </span>
            </h1>
            
            <div className="inline-block">
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 relative">
                {personalInfo.title}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-in-out infinite' }} />
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold overflow-hidden shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-purple-500 rounded-full font-semibold backdrop-blur-sm bg-purple-500/10 hover:bg-purple-500 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl backdrop-blur-sm bg-slate-800/50 border border-purple-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-lg"
              >
                <Github className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl backdrop-blur-sm bg-slate-800/50 border border-purple-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-lg"
              >
                <Instagram className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl backdrop-blur-sm bg-slate-800/50 border border-purple-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-lg"
              >
                <Linkedin className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}