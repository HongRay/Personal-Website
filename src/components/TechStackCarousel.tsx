
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const TechStackCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  const techStacks = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', placeholder: '⚛️' },
        { name: 'HTML5', placeholder: '🌐' },
        { name: 'CSS3', placeholder: '🎨' },
        { name: 'Tailwind CSS', placeholder: '💨' },
        { name: 'TypeScript', placeholder: '📘' },
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', placeholder: '🟢' },
        { name: 'Express.js', placeholder: '🚀' },
        { name: 'Python', placeholder: '🐍' },
        { name: 'Java', placeholder: '☕' },
        { name: 'C++', placeholder: '⚡' },
      ]
    },
    {
      category: 'Database & Tools',
      technologies: [
        { name: 'MongoDB', placeholder: '🍃' },
        { name: 'PostgreSQL', placeholder: '🐘' },
        { name: 'Git', placeholder: '📚' },
        { name: 'Docker', placeholder: '🐳' },
        { name: 'AWS', placeholder: '☁️' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Carousel 
        className="w-full" 
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {techStacks.map((stack, index) => (
            <CarouselItem key={index}>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#254194] mb-6 text-center">
                  {stack.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105"
                    >
                      <div className="text-4xl mb-2">{tech.placeholder}</div>
                      <h4 className="font-medium text-gray-800">{tech.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TechStackCarousel;
