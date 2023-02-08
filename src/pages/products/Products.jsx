import React, {useState} from 'react'
import './Products.css'
import axios from 'axios'

const Products = () => {
  const [data, setData] = useState([]);

  axios.get("https://dummyjson.com/products")
  .then((response) =>setData(response.data.products))
  .catch((error) => console.error(error))

  return (
    <div className='bg-page'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
         {
            data.slice(0,10).map((product)=>(
                <tr>
                  <td className='p-id'>{product.id}</td>
                  <td className='p-name'>{product.title}</td>
                  <td className='p-category'>{product.category}</td>
                  <td className='p-price'>{product.price}</td>
                </tr>
            ))
         }
        </tbody>
      </table>
    </div>
  )
}

export default Products