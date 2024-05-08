import React, { useState, useEffect } from 'react';
import Ticknround from './ticknround.svg';
export default function Getprojects() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(5);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Validate email format
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handleSubmit = () => {
    // Handle form submission logic
    if (isValidEmail) {
        setSubmitted(true);
        let i = 5;

        const intervalId = setInterval(() => {
        setCount(i);
        i--;

        if (i < 0) {
            clearInterval(intervalId); // Stop the interval when count reaches 0
            if(i===0){
                window.location.href = 'http://localhost:3000';
            }
        }
        }, 1000);

      // Proceed with form submission
    } else {
      alert('Enter a valid email address');
    }
  };

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => {
        window.location.href = 'http://localhost:3000'; // Redirect to localhost:3000 after 5 seconds
      }, 5000);
    }
  }, [count]);

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    submitted
        ?
        <div className='w-full h-auto flex flex-col justify-center items-center'>
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-2">
            <img src={Ticknround} alt="My SVG" />
            <div className='text-2xl text-green-600 font-bold shadows-into-light-regular'>Success submitted</div>
            <div className='text-5xl lato-regular'>Congratulations</div>
            <div className='text-3xl text-gray-500 lato-regular max-w-[750px] flex text-center'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</div>
        </div>
        <div className='flex mt-6 justify-center items-center'>
        <div className='text-gray-500'>Redirecting to your Homepage in </div>
        <div className='text-black font-bold'> {count} Seconds</div>
        </div>
        </div>
        :
    <div className='w-full h-auto flex flex-col justify-center items-center'>
        <div className="w-full flex flex-col justify-center items-center pt-20 gap-2">
            <div className='text-2xl text-green-600 font-bold shadows-into-light-regular'>Registration form</div>
            <div className='text-5xl lato-regular text-center w-full max-w-[400px]'>Start your success Journey here!</div>
        </div>

        <div className="w-full flex flex-col justify-center items-center pt-10 gap-6">
        <input className="w-full max-w-[400px] h-[70px] rounded-full bg-gray-200 p-2" type="text" placeholder="   Enter name" />

            <input
              className="w-full max-w-[400px] h-[70px] rounded-full bg-gray-200 p-2"
              type="text"
              placeholder="   Enter email"
              value={email}
              onChange={handleEmailChange}
              style={{ borderColor: isValidEmail ? '' : 'red' }} // Change border color to red if email is invalid
            />
            {!isValidEmail && <p className="text-red-500">Enter a valid email address</p>}

            <button
              className={`w-full max-w-[400px] h-[70px] rounded-full ${isValidEmail ? 'bg-black' : 'bg-gray-400'} text-white p-2`}
              onClick={handleSubmit}
              disabled={!isValidEmail} // Disable button if email is invalid
            >
              Submit
            </button>
        </div>
    </div>
  );
}
