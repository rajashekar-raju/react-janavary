import React from 'react'
import { useContext } from 'react'
import userContext from '../utils/userContext'
const Body = () => {

    const {firstname,lastname,year,setData} = useContext(userContext);
    const dataset = () => {
        setData("amarendraaaa")
    }
    
  return (
    <div>
        <h1>{firstname}</h1>
        <h1>{lastname}</h1>
        <h1>{year}</h1>
        <div>{dataset()}</div>
    </div>
  )
}

export default Body