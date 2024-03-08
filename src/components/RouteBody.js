import React from 'react'
import { Link } from 'react-router-dom'
const RouteBody = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contacts">
        Contamcts</Link>
    </div>
  )
}

export default RouteBody