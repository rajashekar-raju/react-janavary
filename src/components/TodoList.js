import React, { useState } from 'react'

const TodoList = () => {

    const [array,setArray]=useState([]);
    const [term,setTerm]=useState();

    const handleClick = () => {
        setArray([...array,term]);
    }

    const handleInputChange = (e) => {
        setTerm(e.target.value);
    }
    const handleRemove = (index) => {
        const filteredItems = array.filter((arr,ind) => arr.ind !== index)
        console.log(filteredItems);
        setArray(filteredItems);
    }

  return (
    <div>
        <input type="text" className='border border-black px-4 py-2 rounded-lg' onChange={handleInputChange}/>
        <button onClick={handleClick}>Todo</button>
        {
            array.length > 0 && (
                <ul> 
                     {/* can we always wrap in the ul why cant i wrap under curly braces {} */}
                    {
                            array.map((arr,index)=>(
                                <li key={index}>
                                    {arr}
                                    <button onClick={()=>handleRemove(index)}>remove</button>
                                </li>
                            ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default TodoList