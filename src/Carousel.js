import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(currentItem => (currentItem + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentItem(index);
  };

  return (
    <div className="relative">
      <div className="flex">
        <div className="w-full flex">
          <div className="w-full flex h-auto min-h-[220px]">
            <CarouselItem active={currentItem === 0}><div className='text-5xl lato-regular'>Enhance fortune 50 company's insights teams research capabilities</div></CarouselItem>
            <CarouselItem active={currentItem === 1}><div className='text-5xl lato-regular'>Use Artificial intelligence to filter candidates</div></CarouselItem>
            <CarouselItem active={currentItem === 2}><div className='text-5xl lato-regular'>Hire Better and faster</div></CarouselItem>
          </div>
        </div>
      </div>
      <div className="absolute left-8 mt-10 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map(index => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentItem ? 'bg-green-500' : 'bg-gray-200 hover:bg-gray-400'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselItem({ children, active }) {
  return (
    <div className={`w-full ${active ? 'block' : 'hidden'}`}>
      <p className="text-xl">{children}</p>
    </div>
  );
}

export default Carousel;
