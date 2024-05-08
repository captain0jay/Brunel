import './App.css';
import MySVG from './clipboard.svg';
import Surprised from './Image.svg';
import Plane from './plane.svg';
import fourty from './fourty.svg';
import Arrow from './Arrow.svg'
import './input.css';
import { TECarousel, TECarouselItem } from "tw-elements-react";
import Accordion from './Accordin';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from './Carousel';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes, Link, withRouter } from 'react-router-dom';
import Getprojects from './Getprojects';
import Menu from './menu.svg';
import Xcircle from './x-circle.svg';
import X from './x.svg';
import ReactDOM from 'react-dom';

function App() {
  const [page, setPage] = useState('');
  //const location = useLocation();

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      setPage('');
    } else {
      const subroute = pathname.substring(1);
      setPage(subroute);
    }
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the visibility of the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Function to hide the menu
  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
    <Router>
    <div>

      <div className="w-full h-[70px] flex pl-5 sm:pl-10 pt-2 sm:pt-5">
        <div className="w-[150px] h-[100px] pt-2"><img src={MySVG} alt="My SVG" /></div>
        {page==='getprojects'?
        <div className="w-[50%] absolute right-4 top-4 flex p-2 gap-4 justify-end">
        <Link to="/" onClick={() => setPage('')}>
        <img src={Xcircle} alt="My SVG" /></Link>
        </div>
        :
        <div className="w-[50%] absolute right-0 flex p-2 gap-4 justify-end">
          <div className='w-[100%] flex gap-2 sm:block hidden'>
            <Link to="/getprojects" onClick={() => setPage('getprojects')}>
              <button className="w-[170px] h-[57px] border border-gray-400 rounded-full p-4 flex justify-center items-center hover:bg-gray-200 hover:border-0">Get Projects</button></Link>
              <button className="w-[170px] h-[57px] rounded-full p-4 flex justify-center items-center text-white bg-black hover:bg-gray-600">Onboard Talent</button>
          </div>
          <div className="relative block sm:hidden">
            <img src={Menu} alt="My SVG" onClick={toggleMenu} className='mt-2'/>

            {/* Menu */}
            {menuVisible && (
              <div className="absolute top-0 right-0 mt-12 bg-white border rounded shadow-md">
                <a href="#" className="block px-4 py-2 text-gray-800"><Link to="/getprojects" onClick={() => setPage('getprojects')}>
              <button className="w-[170px] h-[57px] border border-gray-400 rounded-full p-4 flex justify-center items-center hover:bg-gray-200 hover:border-0">Get Projects</button></Link></a>
                <a href="#" className="block px-4 py-2 text-gray-800"><button className="w-[170px] h-[57px] rounded-full p-4 flex justify-center items-center text-white bg-black hover:bg-gray-600">Onboard Talent</button></a>
              </div>
            )}
          </div>
        </div>
        
      }
      </div>

    {page!=='getprojects'?

    <div className='w-full h-auto'>
            <div className="w-full flex flex-col justify-center items-center pt-20 gap-2">
              <div className='text-2xl text-green-600 font-bold shadows-into-light-regular'>Success Stories</div>
              <div className='text-5xl lato-regular text-center w-full max-w-[400px]'>Every success journey we've encountered.</div>
            </div>


            <div className="w-full grid grid-cols-2">
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
            </div>


            <div className='w-full p-2 sm:p-8'>
            <div className='rounded-3xl bg-gray-100 grid grid-cols-2 w-full h-autto gap-5 p-6 sm:p-14'>
              <div className='col-span-2 sm:col-span-1 md:col-span-1'>
                <div className='text-2xl text-gray-500 font-bold shadows-into-light-regular'>What's on your mind</div>
                <div className='text-5xl lato-regular mt-2'>Ask questions</div>
              </div>
              <div className='col-span-2 sm:col-span-1 md:col-span-1'>
              <div>
                <Accordion title="Do you offer freelancers?">
                  <p>Accordion Content 1</p>
                </Accordion>
                <Accordion title="What's the guarantee that I will be satisfied
      with the hired talent?">
                  <p>Accordion Content 2</p>
                </Accordion>

                <Accordion title="Can I hire multiple talents at once?">
                  <p>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
                </Accordion>

                <Accordion title="Why should I not go to an agency directly?">
                  <p>Accordion Content 1</p>
                </Accordion>

                <Accordion title="Who can help me pick a right skillset
      and duration for me?">
                  <p>Accordion Content 1</p>
                </Accordion>
              </div>
              </div>
            </div>
            </div>

            <div className='w-full p-6'>
              <div className='rounded-3xl bg-gray-100 grid grid-cols-1 sm:grid-cols-2 w-full h-autto gap-5 p-8'>
                <div className='col-span-1'>Talup 2023. All rights reserved</div>
                <div className='col-span-1 flex justify-end items-center gap-4'>
                  <a href="https://captainjay.xyz/" className='underline underline-offset-1'>Terms & condition</a>
                  <a href="https://captainjay.xyz/" className='underline underline-offset-1'>Privacy policy</a>
                </div>
              </div>
            </div>

    </div>
      :
      <Routes>
      <Route path="/getprojects" element={<Getprojects/>} />
      </Routes>
  }

    </div>
    </Router>
  );
}

export default App;
