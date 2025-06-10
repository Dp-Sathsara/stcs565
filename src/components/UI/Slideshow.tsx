import React, { useEffect, useState } from 'react';
interface SlideshowProps {
  images: string[];
  interval?: number;
}
const Slideshow: React.FC<SlideshowProps> = ({
  images,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  if (images.length === 0) return null;
  return <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>)}
      {/* Indicators */}
      {images.length > 1 && <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />)}
        </div>}
    </div>;
};
export default Slideshow;