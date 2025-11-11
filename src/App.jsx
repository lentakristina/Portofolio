import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

// Import Components
import Navbar from './Components/ui/Navbar';
import Hero from './Components/sections/Hero';
import Projects from './Components/sections/Projects';
import Skills from './Components/sections/Skills';
import Experience from './Components/sections/Experience';
import Contact from './Components/sections/Contact';
import Footer from './Components/sections/Footer';

// Geometric Loading Screen Component
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#586F6B] via-[#7F9183] to-[#B8B8AA] z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Welcome Text */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-pulse">
          Welcome
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-12 font-light tracking-wide">
          Crafting Digital Experiences
        </p>
        
        {/* Geometric Animation */}
        <div className="relative inline-block mb-12">
          {/* Outer rotating square */}
          <div 
            className="w-32 h-32 border-4 rounded-lg animate-spin"
            style={{ 
              borderColor: 'rgba(221, 213, 208, 0.3)',
              animationDuration: '3s' 
            }}
          >
            {/* Inner rotating square */}
            <div 
              className="absolute inset-0 border-4 rounded-lg animate-spin"
              style={{ 
                borderTopColor: '#DDD5D0',
                borderRightColor: 'transparent',
                borderBottomColor: 'transparent',
                borderLeftColor: 'transparent',
                animationDuration: '1.5s' 
              }}
            />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-3">
            <div 
              className="h-full bg-white transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white text-sm font-light">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

// Floating Action Button Component
const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <a
      href="#contact"
      className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#586F6B] to-[#7F9183] text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-40 animate-bounce"
      style={{ animationDuration: '2s' }}
    >
      <Mail size={24} />
    </a>
  ) : null;
};

// Main App Component
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="relative overflow-x-hidden">
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
          <FloatingActionButton />
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.6;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide default scrollbar on desktop but keep functionality */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #DDD5D0;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #7F9183, #586F6B);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #586F6B, #7F9183);
        }

        /* Hide cursor on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .fixed.w-8.h-8,
          .fixed.w-2.h-2 {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}