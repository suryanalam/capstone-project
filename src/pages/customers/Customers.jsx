import React, {useState} from 'react'
import './Customers.css'
import axios from 'axios'
const Customers = () => {
  const [users,setUsers] = useState([]);
  axios.get("https://dummyjson.com/users")
  .then((response) =>setUsers(response.data.users))
  .catch((error) => console.error(error))


  return (
    <div className='bg-page'>
    <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
         {
                  users.slice(0,10).map((user) =>(
                    <tr>
                      <td className='u-id'>{user.id}</td>
                      <td className='u-name'>{user.firstName}</td>
                      <td className='u-email'>{user.email}</td>
                      <td className='u-role'>{user.company.title}</td>
                    </tr>
                  ))
         }
        </tbody>
      </table>
    </div>
  )
}

export default Customers