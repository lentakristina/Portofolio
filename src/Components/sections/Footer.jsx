import { Github, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#586F6B] to-[#7F9183] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">
            Lenta Kristina Sianturi
          </div>
          <p className="text-[#DDD5D0] mb-6">Building digital dreams, one line of code at a time ✨</p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/lentakristina" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:lentakristina512@gmail.com" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:085183380512" 
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Phone size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/lentakristina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/lentakristina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="border-t border-white/20 pt-6 mt-6">
            <p className="text-[#DDD5D0]/70 text-sm">
              © 2025 Lenta Kristina Sianturi. Made with 💚 and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}