import React from 'react'
import './Card.css'
const Card = ({card_icon, card_name, card_value}) => {
  return (
    <div className='card'>
        <div className='icon-div'>{card_icon}</div>
        <div className='details-div'>
            <h3 className='card-name'>{card_name}</h3>
            <p className='card-value'>{card_value}</p>
        </div>
    </div>
  )
}

export default Card