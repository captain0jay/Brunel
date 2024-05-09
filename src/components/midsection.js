import React from 'react'
import Surprised from './svgs/Image.svg';
import Plane from './svgs/plane.svg';
import fourty from './svgs/fourty.svg';
import Arrow from './svgs/Arrow.svg'
import Carousel from './Carousel';

export default function Midsection() {
  return (
    <>
    <div className="col-span-2 lg:col-span-1 relative flex justify-center items-center p-6 sm:p-20">
    <img src={Surprised} alt="My SVG" className="w-[370px] h-[500px] rounded-xl mb-36 sm:mb-0" />
    <div className="absolute bottom-20 right-4 sm:right-20 w-[230px] h-[180px] border-10 border-gray-600 bg-green-900 rounded-3xl flex flex-col p-8 gap-4">
    <div className="flex text-white">
        <div className="text-5xl">$0.5</div>
        <div className="text-md mt-auto ml-2 text-gray-300">MILLION</div>
    </div>
    <div className="text-sm text-gray-300">Reduced client expenses by saving on hiring and employees costs.</div>
    </div>
    <div className="absolute bottom-[150px] left-4 sm:left-32 w-[200px] h-[65px] border-10 border-gray-600 bg-gray-100 rounded-full p-2 flex">
    <img src={Plane} alt="My SVG" className="h-full" />
    <div className="flex flex-col">
    <div className="text-lg">10 DAYS</div>
    <div className="text-sm text-gray-400">Staff Deployment</div>
    </div>
    </div>

    <div className="absolute top-22 left-10 w-[230px] h-[190px] border-10 border-gray-600 rounded-3xl bg-gray-100 flex flex-col p-8 gap-4">
    <img src={fourty} alt="My SVG" className="absolute top-0 left-2 w-[60px] h-[60px] rotate-315" />
    <div className="text-5xl">40%</div>
    <div className="text-sm text-gray-400">Achieved reduction in project execution time by optimising team availability</div>
    </div>
</div> 
<div className="col-span-2 lg:col-span-1 relative flex flex-col justify-center p-6 sm:p-20 gap-20">
<Carousel/>
<button className="w-[170px] h-[57px] rounded-full p-4 flex justify-center items-center text-white bg-black hover:bg-gray-600">Explore More
<img src={Arrow} alt="My SVG"/></button>
</div>
    </>
  )
}
