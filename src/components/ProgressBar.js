import React, { useEffect, useState,useRef } from 'react'
import ProgressBarPercentage from './ProgressBarPercentage'

const ProgressBar = () => {

  const [value, setValue] = useState(0);
  const intervalRef = useRef(null); // useRef to store interval ID

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setValue((prevValue) => Math.min(100, prevValue + 1)); // Ensure value stays within 0-100
      // console.log("useEffect 1 is called");
    }, 100);

    return () => clearInterval(intervalRef.current) // Clear interval on unmount
  }, []);

  return (
    <div>
      <div className='ml-9'>
        <span className='text-center'>Progress Bar</span>
        <ProgressBarPercentage value={value} />
      </div>
    </div>
  );
} 

export default ProgressBar