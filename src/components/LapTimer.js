import React, { useState, useEffect } from 'react';

const LapTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // console.log(interval);

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const handleStartStop = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  return (
    <div className='text-center mt-10'>
      <h2 className='text-3xl font-bold mb-4'>Lap Timer</h2>
      <div className='text-4xl font-bold mb-4'>{formatTime(time)}</div>
      <div className='mb-4'>
        <button onClick={handleStartStop} className='btn'>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset} className='btn'>
          Reset
        </button>
        <button onClick={handleLap} className='btn'>
          Lap
        </button>
      </div>
      {laps.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-xl font-bold mb-2'>Laps:</h3>
          <ul>
            {laps.map((lap, index) => (
              <li key={index} className='mb-2'>Lap {index + 1}: {formatTime(lap)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};
export default LapTimer;
