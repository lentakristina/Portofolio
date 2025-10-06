import { MapPin, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Marketing Data Analyst Staff',
      company: 'PT WOM Finance',
      location: 'Jakarta, Indonesia',
      date: 'May 2024 - Oct 2024',
      icon: '💼',
      highlights: [
        'Increased reporting accuracy by 15% and reduced errors by 40%',
        'Designed customer segmentation models for targeted campaigns',
        'Collaborated with cross-functional teams for data-driven insights'
      ]
    },
    {
      type: 'work',
      title: 'UI/UX Developer Intern',
      company: 'Dewan Perwakilan Rakyat Daerah',
      location: 'Yogyakarta, Indonesia',
      date: 'Sep 2022 - Nov 2022',
      icon: '🎨',
      highlights: [
        'Designed digital prototype reducing manual processing by 25%',
        'Digitized SOP workflows for efficient leave management',
        'Conducted requirement analysis with stakeholders'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Information Systems',
      company: 'Universitas Kristen Duta Wacana',
      location: 'Yogyakarta, Indonesia',
      date: 'Sep 2019 - Aug 2023',
      icon: '🎓',
      highlights: [
        'GPA: 3.47/4.00',
        'Courses: Software Engineering, Database Systems, Frontend Engineering'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-600 text-lg">My professional journey</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-orange-400 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-0 md:pl-20">
                <div className="absolute left-5 top-6 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hidden md:flex items-center justify-center text-white font-bold shadow-lg">
                  {exp.icon}
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-purple-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                        <MapPin size={14} /> {exp.location}
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <ChevronRight className="text-purple-600 flex-shrink-0 mt-1" size={16} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};