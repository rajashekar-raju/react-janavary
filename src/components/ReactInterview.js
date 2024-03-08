import React, { useState } from 'react'

const ReactInterview = () => {
    const [inputValue,setInputValue]=useState();
    const [inputStore,setInputStore]=useState([]);

    const handleAppend = () => {
        setInputStore((previouValue)=>[...previouValue,inputValue]);
    }

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleRemove = () => {
        const upDatedArray = inputStore.filter((inp,ind)=>ind!==inputStore.length-1);
        setInputStore(upDatedArray);
    }

  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input className='border border-black px-4 py-2 m-4' type="text" onChange={handleInput}/>
            <button onClick={handleAppend}>Append</button>
            <button onClick={handleRemove}>Undo</button>
        </form>
        {
            inputStore.length>0 && (
                <ul>
                    {
                        inputStore.map((input,index)=>(
                            <li key={index}>{input}</li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default ReactInterview