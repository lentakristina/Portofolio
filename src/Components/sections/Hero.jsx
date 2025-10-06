
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
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
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-500 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl text-center space-y-8 relative z-10">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 mb-4 animate-pulse">
          <Sparkles className="inline w-4 h-4 mr-2" />
          Available for Opportunities
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            {personalInfo.name}
          </span>
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300">
          {personalInfo.title}
        </h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex gap-4 justify-center items-center pt-6">
          <button
            onClick={scrollToProjects}
            className="hoverable px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:scale-110 transition-transform duration-300 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2"
          >
            View Projects <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href={personalInfo.resume}
            download
            className="hoverable px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 flex items-center gap-2"
          >
            <Download className="w-5 h-5" /> Resume
          </a>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-125 hover:rotate-12"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hoverable p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-125 hover:rotate-12"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-125 hover:rotate-12"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="flex gap-4 justify-center items-center pt-4 text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>{personalInfo.location}</span>
          <span>•</span>
          <Phone className="w-4 h-4" />
          <span>{personalInfo.phone}</span>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
}