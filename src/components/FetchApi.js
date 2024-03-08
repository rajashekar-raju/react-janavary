import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const apiJson =await fetch('https://jsonplaceholder.typicode.com/posts')
        const apiData =await apiJson.json();
        setData(apiData);
        console.log(apiData);
    }

  return (
    <div>
        {
            data.map((obj)=>(
                <div key={obj.id} className='my-2'>
                    <h1 className='text-2xl'>{obj.title}</h1>
                    <p>{obj.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default FetchApi