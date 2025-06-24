import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { techStacks } from '@/lib/configs';

const TechStackCarousel = ({ isIndexPage = false }: { isIndexPage?: boolean }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const intervalId = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className="max-w-4xl mx-auto">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {techStacks.map((stack, index) => (
            <CarouselItem key={index}>
              <div className="p-6">
                <h3 className={`text-2xl font-semibold mb-6 text-center ${isIndexPage ? 'text-white dark:text-[#e2e2e2]' : 'text-[#254194] dark:text-[#e2e2e2]'}`}>
                  {stack.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105 dark:bg-[#e2e2e2]"
                    >
                      <img
                        src={tech.placeholder}
                        alt={tech.name}
                        className="w-12 h-12 mx-auto mb-2 object-contain"
                        loading="lazy"
                      />
                      <h4 className="font-medium text-gray-800">{tech.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`hidden sm:flex transition-transform duration-300 hover:scale-110 ${
          isIndexPage ? "bg-white text-[#254194] dark:bg-[#e2e2e2] dark:hover:bg-[#254194]" : "dark:bg-[#e2e2e2] text-[#254194] dark:hover:bg-[#254194]"}`
          } />
        <CarouselNext className={`hidden sm:flex transition-transform duration-300 hover:scale-110 ${
          isIndexPage ? "bg-white text-[#254194] dark:bg-[#e2e2e2] dark:hover:bg-[#254194]" : "dark:bg-[#e2e2e2] text-[#254194] dark:hover:bg-[#254194]"}`
          } />
      </Carousel>
    </div>
  );
};

export default TechStackCarousel;
