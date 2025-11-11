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
    <section id="skills" className="py-20 bg-gradient-to-br from-[#DDD5D0] via-[#CFC0BD] to-[#B8B8AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Award className="w-12 h-12 text-[#7F9183] animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#586F6B] to-[#7F9183] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-[#586F6B]/70 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div 
              key={category}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#DDD5D0]/50"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-[#586F6B] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7F9183] animate-pulse" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-[#7F9183] to-[#586F6B] text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
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
}