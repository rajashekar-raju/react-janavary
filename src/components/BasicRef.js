import React, { useRef } from 'react'

const BasicRef = () => {

    const inputValue = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue.current.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputValue} className='border border-black px-4 py-2 m-3'/>
        </form>
    </div>
  )
}

export default BasicRef