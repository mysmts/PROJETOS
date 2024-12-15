import Image from 'next/image';

const Carousel = () => {
  const slides = [
    { id: 1, src: '/slide1.jpg', alt: 'Slide 1' },
    { id: 2, src: '/slide2.jpg', alt: 'Slide 2' },
    { id: 3, src: '/slide3.jpg', alt: 'Slide 3' },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500">
        {slides.map(slide => (
          <div key={slide.id} className="min-w-full">
            <Image src={slide.src} alt={slide.alt} layout="responsive" width={1200} height={600} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
