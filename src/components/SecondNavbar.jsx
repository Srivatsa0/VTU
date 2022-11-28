import React from 'react';
import {Link} from "react-router-dom"

function SecondNavbar() {
  return (
    <div className='second-navbar'>
        <ul>
            <li><Link  to="/">Home</Link></li>
            <li><Link to="/studentscorner">Students Corner</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/Institutions">Institutions</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
        </ul>
    </div>
  )
}

export default SecondNavbar