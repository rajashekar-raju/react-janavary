import React, { useState,useEffect } from 'react'

const DarkAndLightTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect to handle theme change on component mount
  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  // Function to apply the selected theme
  const applyTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (

    <>
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleTheme}
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Theme
      </button>
      <p>hsbkskjsvjkjvbsjbvjsbjvhbhjbvhjbvhjbjhvb</p>
      <h1>hbjhbdchjbhjdbcbdhcb jhbjhb jbcjhbchjbc djcbjdcbj jhdbcjhdbchjdb djchbjhdcbjhdbc</h1>
      <h2>jcjkjdc kdckjsckl kdvjdkjdkv kdckscdk ccckcsc</h2>
    </div>
    
    <div className = {isDarkMode && "bg-black text-blue-800 border border-black"}>
        hello rajashekar how are you man
        <p>iam fine iam from raichur karnataka</p>
        <p>wait mai achha hu</p>
    </div>


    
</>
  );
}

export default DarkAndLightTheme