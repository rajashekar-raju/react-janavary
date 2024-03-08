import React, { useEffect, useState } from 'react'

const ProgressBarPercentage = ({value}) => {

    const [percent,setPercent] = useState(value);

    useEffect(()=>{
        setPercent(Math.min(100,Math.max(value,0)))
    },[value])

  return (
    <div className='h-10 rounded-lg w-80 bg-gray-400'>
        <span  className='flex justify-center'>
          {percent}%
        </span>
          <div style={{ width: `${percent}%`, height: '40px' ,backgroundColor:"green"}} />
    </div>
  )
}

export default ProgressBarPercentage;