import React, { useMemo, useState } from 'react'

const UsememoHook = () => {

    const [increase,setIncrease] = useState(0);
    const [array,setArray] = useState([]);
    const big_num=useMemo(()=>bigFunction(increase),[increase]);



    const handleArrayClick = () => {
        setArray((str)=>[...str,"new Array"]);
    }

  return (
    <div>
        <button className='bg-red-600 px-4 py-2 m-3' onClick={()=>{setIncrease(increase+1)}}>Add</button>
        <button className='bg-red-600 px-4 py-2 m-3' onClick={handleArrayClick}>Add Array</button>
        <span className='m-3'>{big_num}</span>
        {
            array.length>0 && (
                <ul>
                    {
                        array.map((arr,index)=>(
                            <li key={index}>{arr}</li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

const bigFunction = (num) => {
    for(let i=0;i<100000000;i++){
        num+=1;
    }
    return num;
}

export default UsememoHook