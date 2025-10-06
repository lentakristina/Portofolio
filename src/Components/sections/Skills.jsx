import { Award } from 'lucide-react';

export default function Skills() {
  const skills = {
    'Frontend': ['React', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Tailwind'],
    'Backend': ['PHP', 'Laravel', 'REST API'],
    'Database': ['PostgreSQL', 'MySQL'],
    'Tools': ['Git', 'Figma'],
    'Soft Skills': ['Communication', 'Problem Solving', 'Teamwork', 'Time Management']
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div 
              key={category}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <Award className="text-purple-600" size={24} />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};