import React, { useState } from 'react'

const SearchItem = () => {

//    const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

//    const [letters,setLetters]=useState();
   const [lettersArray,setArrayLetters]=useState(["apple", "banana", "cherry", "date", "elderberry", "fig"]);

   const handleSearchChange = (e) => {
        const letters = e.target.value;
        setTimeout(()=>{
            lettersSearchFunction(letters);
        },300)
   }

   const lettersSearchFunction = (letters) => {
           let filteredLettersArray =  lettersArray.filter((fruit)=>fruit.toLowerCase().includes(letters.toLowerCase()));
           setArrayLetters(filteredLettersArray)
   }

  return (
    <div>
        <input 
            type="text"  
            placeholder='search' 
            className='border border-black py-2 px-4 m-5' 
            onChange={handleSearchChange}
        />
        {
            lettersArray.length > 0 && (
                <ul>
                    {
                        lettersArray.map((fruit,index)=>(
                            <li key={index}>{fruit}</li>
                        ))
                    }
                </ul>
            )
        }
        
    </div>
  )
}

export default SearchItem