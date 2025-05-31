import React from 'react';
import { Bike, Mountain, Waves, Headset } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    { icon: <Bike className="w-8 h-8" />, title: 'Cycling', description: 'Love exploring trails and city routes' },
    { icon: <Mountain className="w-8 h-8" />, title: 'Hiking', description: 'Enjoy challenging mountain trails and national parks' },
    { icon: <Waves className="w-8 h-8" />, title: 'Kayaking', description: 'Passionate about water sports and water adventure' },
    { icon: <Headset className="w-8 h-8" />, title: 'Gaming', description: 'Never say no to a good gaming session with friends' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#254194] mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#254194] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated Computer Science student with a passion for software engineering and technology innovation. 
              My journey in programming started with curiosity and has evolved into a deep commitment to creating 
              meaningful and fun digital experiences!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring the outdoors through cycling, hiking, or kayaking. 
              I believe that staying active and experiencing nature helps me bring fresh perspectives to my work 
              and maintains the creativity essential for problem-solving in software development. Additionally, I like to play
              computer games as well!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm always eager to learn new technologies and take on challenging projects that push my boundaries 
              as a developer. My seek to contribute to innovative software solutions that make a positive impact for society!
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#254194] mb-6">Interests & Hobbies</h3>
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#254194]">{interest.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{interest.title}</h4>
                  <p className="text-gray-600">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
