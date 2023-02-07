import React from 'react'
import './Navbar.css'
import {FaUserCircle} from 'react-icons/fa'
import {IoMdNotifications} from 'react-icons/io'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-div'>
        <h3 className='logo-title'><span>My</span>Dashboard</h3>
      </div>
      <div className='account-div'>
        <IoMdNotifications className="nav-icons" size="1.5rem"/>
        <FaUserCircle className="nav-icons" size="1.5rem"/>
      </div>
    </div>
  )
}

export default Navbar