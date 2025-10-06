import { Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Lenta Kristina Sianturi
          </div>
          <p className="text-gray-400 mb-6">Building digital dreams, one line of code at a time ✨</p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/lentakristina" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="mailto:lentakristina512@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="tel:085183380512" className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-110">
              <Phone size={24} />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 Lenta Kristina Sianturi. Made with 💜 and React
          </p>
        </div>
      </div>
    </footer>
  );
};

// Floating Action Button
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
      className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-40 animate-bounce"
    >
      <Mail size={24} />
    </a>
  ) : null;
};