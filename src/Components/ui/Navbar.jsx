import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#DDD5D0]/95 backdrop-blur-lg shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#586F6B] to-[#7F9183] bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-1 bg-[#B8B8AA]/30 rounded-full px-2 py-2">
            {menuItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'bg-[#586F6B] text-white shadow-lg scale-105'
                    : 'text-[#586F6B] hover:bg-[#CFC0BD]/50 hover:scale-105'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#586F6B] hover:text-[#7F9183] hover:rotate-90 transition-all duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#DDD5D0]/98 backdrop-blur-lg shadow-2xl animate-slideDown">
          {menuItems.map(item => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 transition-all duration-300 border-l-4 ${
                activeSection === item.id
                  ? 'bg-[#586F6B]/10 text-[#586F6B] border-[#586F6B] font-bold'
                  : 'text-[#586F6B]/80 hover:bg-[#CFC0BD]/30 hover:border-[#7F9183] border-transparent'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}