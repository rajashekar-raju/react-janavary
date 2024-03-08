import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {

  let u = 100;

  // u = u+10; 

  const [count,setCout] = useState(0);

  const data = useRef(10);

  let x=10;

  useEffect(()=>{
    data.current = data.current+1;
    u=u+1;
  })
  console.log(data.current);

  const handleClick = () => {
        setCout(count+1);
  }

  return (
    <div>
        <p>{`the value of x is ${x}`}</p>
        <p>{`the value of count is ${count}`}</p>
        <button onClick={handleClick}>increase</button>
        <h1>{u}</h1>
    </div>
  )
}

export default UseRefHook