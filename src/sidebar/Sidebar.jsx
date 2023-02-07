import React from 'react'
import './Sidebar.css'
import ListGroup from 'react-bootstrap/ListGroup';
const Sidebar = () => {
  return (
    <div className='sidebar'>
           <div className='circle-div'>
                <img src="" alt=""/>
           </div>
           <div className='profile-div'>
                <h2 className='username'>User Name</h2>
                <p className='job'>Designation</p>
           </div>
           
            <ListGroup className='list-div'>
                <ListGroup.Item className='list-item'>Dashboard</ListGroup.Item>
                <ListGroup.Item className='list-item'>products</ListGroup.Item>
                <ListGroup.Item className='list-item'>customers</ListGroup.Item>
                <ListGroup.Item className='list-item'>my profile</ListGroup.Item>
            </ListGroup>
          
           <div className='login-div'>
                <button className='btn' type="button">Login</button>
           </div>
    </div>
  )
}

export default Sidebar