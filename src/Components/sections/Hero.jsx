import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Instagram
} from "lucide-react";
import { personalInfo } from "../../data/content";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #DDD5D0 0%, #CFC0BD 50%, #B8B8AA 100%)',
        perspective: '1000px'
      }}
    >
      {/* Animated 3D Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1 - Far back */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translate3d(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px, -100px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#7F9183]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#586F6B]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Layer 2 - Middle */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            transform: `translate3d(${mousePosition.x * -1}px, ${mousePosition.y * -1}px, -50px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#B8B8AA]/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#CFC0BD]/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        {/* Floating 3D Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float3D ${4 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(127, 145, 131, 0.6), transparent)`,
                  boxShadow: '0 0 20px rgba(127, 145, 131, 0.3)',
                  transform: `rotateX(${i * 30}deg) rotateY(${i * 20}deg)`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* 3D Floating Badge */}
        <div 
          className={`flex justify-center mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl rounded-full border-2 shadow-xl hoverable"
            style={{
              background: 'rgba(255, 255, 255, 0.3)',
              borderColor: 'rgba(127, 145, 131, 0.3)',
              transform: `perspective(1000px) rotateX(${mousePosition.y * -0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
              boxShadow: '0 20px 40px rgba(127, 145, 131, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              transition: 'transform 0.3s ease-out'
            }}
          >
            <Sparkles className="w-5 h-5 text-[#7F9183] animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-semibold text-[#586F6B]">
              Available for Opportunities
            </span>
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Photo Card */}
          <div 
            className={`flex justify-center md:justify-end order-2 md:order-1 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative group perspective-1000">
              {/* 3D Glow Layer */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-60 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #7F9183, #586F6B)',
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />
              
              {/* Main 3D Card */}
              <div 
                className="relative overflow-hidden rounded-3xl backdrop-blur-sm shadow-2xl transition-all duration-500 hoverable"
                style={{
                  border: '3px solid rgba(255, 255, 255, 0.5)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                  transform: `perspective(1000px) rotateX(${mousePosition.y * -0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(20px)`,
                  boxShadow: `
                    0 30px 60px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.6),
                    0 0 40px rgba(127, 145, 131, 0.2)
                  `
                }}
              >
                <img 
                  src={personalInfo.photo || "/profile.png"} 
                  alt={personalInfo.name}
                  className="relative w-64 h-80 md:w-72 md:h-96 object-cover object-top"
                />
                
                {/* 3D Overlay Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(88, 111, 107, 0.3), rgba(127, 145, 131, 0.3))'
                  }}
                />

                {/* Shine Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                    animation: 'shine 2s infinite'
                  }}
                />
              </div>

              {/* 3D Floating Icons */}
              <div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hoverable"
                style={{
                  background: 'linear-gradient(135deg, #7F9183, #586F6B)',
                  transform: `perspective(1000px) translateZ(40px) rotateX(${mousePosition.y * 0.5}deg)`,
                  boxShadow: '0 10px 30px rgba(127, 145, 131, 0.4)',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <div 
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hoverable"
                style={{
                  background: 'linear-gradient(135deg, #586F6B, #7F9183)',
                  transform: `perspective(1000px) translateZ(40px) rotateY(${mousePosition.x * 0.5}deg)`,
                  boxShadow: '0 10px 30px rgba(88, 111, 107, 0.4)',
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: '1s'
                }}
              >
                <Github className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Text Content with 3D Effects */}
          <div 
            className={`text-center md:text-left order-1 md:order-2 space-y-6 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              style={{
                transform: `perspective(1000px) translateZ(30px)`,
                textShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
              }}
            >
              <span 
                className="bg-gradient-to-r from-[#586F6B] via-[#7F9183] to-[#586F6B] bg-clip-text text-transparent"
                style={{
                  filter: 'drop-shadow(0 4px 10px rgba(127, 145, 131, 0.3))'
                }}
              >
                {personalInfo.name}
              </span>
            </h1>
            
            <div className="inline-block">
              <h2 
                className="text-2xl md:text-3xl font-semibold text-[#7F9183] relative"
                style={{
                  transform: `perspective(1000px) translateZ(20px)`,
                  textShadow: '0 5px 15px rgba(127, 145, 131, 0.2)'
                }}
              >
                {personalInfo.title}
                <div 
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #7F9183, #586F6B)',
                    boxShadow: '0 5px 15px rgba(127, 145, 131, 0.4)'
                  }}
                />
              </h2>
            </div>
            
            <p 
              className="text-lg text-[#586F6B]/80 leading-relaxed max-w-xl"
              style={{
                transform: `perspective(1000px) translateZ(10px)`
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* 3D Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hoverable"
                style={{
                  background: 'linear-gradient(135deg, #586F6B, #7F9183)',
                  transform: 'perspective(1000px) translateZ(20px)',
                  boxShadow: '0 10px 30px rgba(88, 111, 107, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) translateZ(30px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) translateZ(20px) scale(1)';
                }}
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  View Projects 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F9183] to-[#586F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 shadow-lg hoverable flex items-center gap-2"
                style={{
                  border: '2px solid #7F9183',
                  background: 'rgba(255, 255, 255, 0.3)',
                  color: '#586F6B',
                  transform: 'perspective(1000px) translateZ(20px)',
                  boxShadow: '0 10px 30px rgba(127, 145, 131, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) translateZ(30px) scale(1.05)';
                  e.currentTarget.style.background = '#7F9183';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) translateZ(20px) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.color = '#586F6B';
                }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Resume
              </a>
            </div>

            {/* 3D Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              {[
                { Icon: Github, href: personalInfo.github },
                { Icon: Instagram, href: personalInfo.instagram },
                { Icon: Linkedin, href: personalInfo.linkedin }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg hoverable"
                  style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: '2px solid rgba(184, 184, 170, 0.5)',
                    transform: `perspective(1000px) translateZ(${15 + idx * 5}px)`,
                    boxShadow: '0 5px 20px rgba(127, 145, 131, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `perspective(1000px) translateZ(${25 + idx * 5}px) rotateZ(-6deg)`;
                    e.currentTarget.style.background = '#586F6B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `perspective(1000px) translateZ(${15 + idx * 5}px) rotateZ(0deg)`;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                  }}
                >
                  <Icon className="w-6 h-6 text-[#586F6B] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: perspective(1000px) translateY(0px) translateZ(40px); }
          50% { transform: perspective(1000px) translateY(-20px) translateZ(50px); }
        }
        
        @keyframes float3D {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) translateZ(0px) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) translateX(15px) translateZ(30px) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}