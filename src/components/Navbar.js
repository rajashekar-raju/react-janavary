import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='flex gap-2 flex-row-reverse'>
           <NavLink to="/"><li>Home</li></NavLink>
           <NavLink to="about"><li>About</li></NavLink>
           <NavLink to="contact"><li>Contact</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar