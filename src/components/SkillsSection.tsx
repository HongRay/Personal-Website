
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL']
    },
    {
      title: 'Frontend Technologies',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'VS Code', 'Linux', 'Agile']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#254194] mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-[#254194] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I've been working with during my Computer Science studies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#254194] mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#254194] rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
