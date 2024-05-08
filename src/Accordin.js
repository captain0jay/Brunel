import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="rounded mb-4 overflow-hidden">
      <div className="flex justify-between items-center bg-gray-100 p-4 cursor-pointer" onClick={toggleAccordion}>
        <div className="text-lg">{title}</div>
        <div className="w-6 h-6" dangerouslySetInnerHTML={{ __html: isOpen ? minusIcon : plusIcon }} />
      </div>
      <div className={`transition-max-height duration-500 ease-in-out overflow-hidden bg-gray-100 text-black ${isOpen ? 'h-auto' : 'h-0'}`}>
        <div className="p-4 text-gray-500 text-sm">{children}</div>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-2"></div>
   </>
  );
}

// SVG icons
const plusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
const minusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>';

export default Accordion;
