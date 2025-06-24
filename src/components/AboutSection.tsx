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
    <section className="py-20 bg-gray-50 dark:bg-[#181616]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#254194] mb-4 dark:text-[#e2e2e2]">About Me</h2>
          <div className="w-24 h-1 bg-[#254194] mx-auto dark:bg-[#e2e2e2]"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed dark:text-[#e2e2e2]">
              I'm a dedicated <span className="text-xl font-semibold text-[#254194] dark:text-[#2542b4]">Computer Science student</span> with a passion for software engineering and technology innovation. 
              My journey in programming started with curiosity and has evolved into a deep commitment to creating 
              meaningful and fun digital experiences!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed dark:text-[#e2e2e2]">
              <span className="text-xl italic font-semibold text-[#fabc2d]">When I'm not coding,</span> you'll find me exploring the outdoors through <u>cycling, hiking, or kayaking.</u> 🚴 
              I believe that staying active and experiencing nature helps me bring fresh perspectives to my work 
              and maintains the creativity essential for problem-solving in software development. Additionally, I like to play &nbsp;
              <strong className="align-middle inline-block overflow-hidden whitespace-nowrap border-r-2 border-[#254194] font-pixel text-lg text-purple-700 animate-typing">
                  computer games
              </strong> 
              {/* This is done to ensure the interest and hobbies card doesnt shift when its animation */}
              <span className="block h-[2.5rem]"> as well! 🎮</span> 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed dark:text-[#e2e2e2]">
              I'm always eager to learn new technologies and take on challenging projects that push my boundaries 
              as a developer. I seek to contribute to innovative software solutions that make a positive impact for society. Additionally, 
              I am learning <span className=" text-xl font-semibold text-[#254194] dark:text-[#2542b4]"> Deutsch <span className='text-lg'>(german)</span></span> too! Initially I believed that learning a programming language would be 
              similar to learning a spoken language. But I quickly realised it's completely <strong>different!</strong> 😂
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#254194] mb-6 dark:text-[#2542b4]">Interests <span className='text-gray-600 font-normal dark:text-[#e2e2e2]'>&</span> <span className='text-[#fabc2d]'>Hobbies</span></h3>
            {/* Interest & Hobbies Card */}
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-120 hover:shadow-xl transition-shadow duration-300 
              dark:shadow-[#1b3080] dark:bg-[#e2e2e2]">
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
