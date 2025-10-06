import { useState, useEffect } from 'react';

// Import Components
import CustomCursor from './Components/ui/CustomCursor';
import Navbar from './Components/ui/Navbar';
import Hero from './Components/sections/Hero';
import Projects from './Components/sections/Projects';
import Skills from './Components/sections/Skills';
import Experience from './Components/sections/Experience';
import Contact from './Components/sections/Contact';
import Footer from './Components/sections/Footer';
import { Mail } from 'lucide-react';

// Loading Screen Component
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
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-bold text-white mb-8 animate-bounce">Welcome</div>
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white mt-4 text-lg">{progress}%</p>
      </div>
    </div>
  );
};

/// Floating Action Button Component
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
      className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl 
       hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-40 animate-bounce"
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
          <CustomCursor />
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
    </>
  );
}