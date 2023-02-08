import React from 'react'
import './Sidebar.css'
import profile_img from '../../profile_img.png'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
           <div className='circle-div'>
           <img src={profile_img} alt="pic"/>
           </div>
           <div className='profile-div'>
                <h2 className='username'>Surya Nalam</h2>
                <p className='job'>Developer</p>
           </div>
           
            <div className='list-div'>

              <NavLink exact to="Dashboard" className='list-item' ><p>Dashboard</p> </NavLink>
              <NavLink  to="Products"  className='list-item' ><p>Products</p> </NavLink>
              <NavLink  to="Customers" className='list-item' ><p>Customers</p> </NavLink>
              <NavLink  to="Profile"   className='list-item' ><p>My profile</p> </NavLink>
                
            </div>
          
           <div className='footer-div'>
               <p>made by surya nalam</p>
               <p><span>&#169;</span> Copyright 2023</p>
           </div>
    </div>
  )
}

export default Sidebar