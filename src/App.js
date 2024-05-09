import './App.css';
import MySVG from './components/svgs/clipboard.svg';
import './input.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Getprojects from './components/Getprojects';
import Menu from './components/svgs/menu.svg';
import Xcircle from './components/svgs/x-circle.svg';
import Footer from './components/footer';
import Qna from './components/qna';
import Midsection from './components/midsection';

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
              <Midsection/>
            </div>


            <div className='w-full p-2 sm:p-8'>
              <Qna/>
            </div>

            <div className='w-full p-6'>
              <Footer/>
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
