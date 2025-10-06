import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together!
          </h2>
          <p className="text-gray-600 text-lg">Have a project in mind? Let's create something amazing!</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 h-32"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </div>

          {showSuccess && (
            <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl text-green-700 text-center font-semibold flex items-center justify-center gap-2">
              <CheckCircle size={24} />
              Message sent successfully! I'll get back to you soon!
            </div>
          )}

          <div className="mt-8 pt-8 border-t-2 border-gray-200">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <a href="mailto:lentakristina512@gmail.com" className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                <Mail className="mx-auto mb-2 text-purple-600" size={24} />
                <p className="text-sm font-semibold text-gray-700">lentakristina512@gmail.com</p>
              </a>
              <a href="tel:085183380512" className="p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
                <Phone className="mx-auto mb-2 text-pink-600" size={24} />
                <p className="text-sm font-semibold text-gray-700">085183380512</p>
              </a>
              <div className="p-4 bg-orange-50 rounded-xl">
                <MapPin className="mx-auto mb-2 text-orange-600" size={24} />
                <p className="text-sm font-semibold text-gray-700">Yogyakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};