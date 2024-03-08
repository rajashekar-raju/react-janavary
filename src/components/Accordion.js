import React, { useState } from 'react'

const Accordion = () => {

    const [showText,setShowText]=useState(false);

    const handleClick = () => {
        setShowText(!showText);
    }
  return (
    <div className='bg-gray-400 border border-black cursor-pointer' onClick={handleClick}>
        {!showText ? "showText" : "closeText"}
        {
            showText && <div>
            <p>hello sir iam fine how are you sir iam fine too its good iam taling to yiuo</p>
        </div>
        }
    </div>
  )
}

export default Accordion