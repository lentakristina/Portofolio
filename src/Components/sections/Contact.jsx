import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#B8B8AA]/20 to-[#DDD5D0]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Mail className="w-12 h-12 text-[#7F9183] animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#586F6B] to-[#7F9183] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-[#586F6B]/70 text-lg">Let's work together on your next project</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#DDD5D0]/50">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#586F6B] font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#B8B8AA]/30 focus:border-[#7F9183] focus:outline-none transition-colors bg-[#DDD5D0]/10 text-[#586F6B]"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#586F6B] font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#B8B8AA]/30 focus:border-[#7F9183] focus:outline-none transition-colors bg-[#DDD5D0]/10 text-[#586F6B]"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#586F6B] font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#B8B8AA]/30 focus:border-[#7F9183] focus:outline-none transition-colors resize-none bg-[#DDD5D0]/10 text-[#586F6B]"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#586F6B] to-[#7F9183] text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={20} />
            </button>
          </div>
        </form>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#DDD5D0]/50">
            <div className="w-12 h-12 bg-gradient-to-r from-[#7F9183] to-[#586F6B] rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="text-white" size={24} />
            </div>
            <h4 className="font-semibold text-[#586F6B] mb-1">Email</h4>
            <a href="mailto:lentakristina512@gmail.com" className="text-[#7F9183] text-sm hover:underline">
              lentakristina512@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#DDD5D0]/50">
            <div className="w-12 h-12 bg-gradient-to-r from-[#7F9183] to-[#586F6B] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-[#586F6B] mb-1">Phone</h4>
            <a href="tel:085183380512" className="text-[#7F9183] text-sm hover:underline">
              +62 851-8338-0512
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#DDD5D0]/50">
            <div className="w-12 h-12 bg-gradient-to-r from-[#7F9183] to-[#586F6B] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h4 className="font-semibold text-[#586F6B] mb-1">Location</h4>
            <p className="text-[#7F9183] text-sm">
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
