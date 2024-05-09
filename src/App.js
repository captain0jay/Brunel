import './App.css';
import MySVG from './clipboard.svg';
import Surprised from './Image.svg';
import Plane from './plane.svg';
import fourty from './fourty.svg';
import Arrow from './Arrow.svg'
import './input.css';
import Accordion from './Accordin';
import Carousel from './Carousel';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Getprojects from './Getprojects';
import Menu from './menu.svg';
import Xcircle from './x-circle.svg';

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
  // const hideMenu = () => {
  //   setMenuVisible(false);
  // };

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
          <div className="relative block sm:hidden">
            <img src={Menu} alt="My SVG" onClick={toggleMenu} className='mt-2'/>

            {/* Menu */}
            {menuVisible && (
              <div className="absolute top-0 right-0 mt-12 bg-white border rounded shadow-md">
                <a href="/getprojects" className="block px-4 py-2 text-gray-800"><Link to="/getprojects" onClick={() => setPage('getprojects')}>
              <button className="w-[170px] h-[57px] border border-gray-400 rounded-full p-4 flex justify-center items-center hover:bg-gray-200 hover:border-0">Get Projects</button></Link></a>
                <a href="/" className="block px-4 py-2 text-gray-800"><button className="w-[170px] h-[57px] rounded-full p-4 flex justify-center items-center text-white bg-black hover:bg-gray-600">Onboard Talent</button></a>
              </div>
            )}
          </div>
        </div> 
      }
      <div className='w-[50%] absolute right-0 flex p-2 gap-4 justify-end'>
        <Link to="/getprojects" onClick={() => setPage('getprojects')} className='sm:block hidden'>
          <button className="w-[170px] h-[57px] border border-gray-400 rounded-full p-4 flex justify-center items-center hover:bg-gray-200 hover:border-0">Get Projects</button></Link>
          <button className="w-[170px] h-[57px] rounded-full p-4 flex justify-center items-center text-white bg-black hover:bg-gray-600 sm:block hidden">Onboard Talent</button>
      </div>
      </div>

    {page!=='getprojects'?

    <div className='w-full h-auto'>
            <div className="w-full flex flex-col justify-center items-center pt-20 gap-2">
              <div className='text-2xl text-green-600 font-bold shadows-into-light-regular'>Success Stories</div>
              <div className='text-5xl lato-regular text-center w-full max-w-[550px]'>Every success journey we've encountered.</div>
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
                  <p>Yes, we provide access to a curated pool of skilled freelancers tailored to your project needs, ensuring flexibility and efficiency in your staffing requirements.</p>
                </Accordion>
                <Accordion title="What's the guarantee that I will be satisfied
      with the hired talent?">
                  <p>We assure satisfaction through rigorous vetting processes and ongoing support, ensuring that only top-tier talent suited to your specific needs is provided.</p>
                </Accordion>

                <Accordion title="Can I hire multiple talents at once?">
                  <p>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
                </Accordion>

                <Accordion title="Why should I not go to an agency directly?">
                  <p>By choosing us, you gain direct access to specialized talent without the overhead costs associated with traditional agencies, ensuring cost-effectiveness and streamlined communication.</p>
                </Accordion>

                <Accordion title="Who can help me pick a right skillset
      and duration for me?">
                  <p>Our expert team offers personalized guidance to help you navigate skillset selection and project duration, ensuring optimal outcomes aligned with your objectives and timeline.</p>
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
