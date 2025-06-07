import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  images: string[]; // Array of image paths like ['/img1.jpg', '/img2.png']
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images }) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const intervalId = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className="max-w-4xl mx-auto mb-2">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-4">
                <img
                  src={src}
                  alt={`Project Screenshot ${index + 1}`}
                  className="rounded-lg shadow-md object-cover w-full h-[300px] sm:h-[400px]"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
