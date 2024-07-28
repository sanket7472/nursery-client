import React from 'react'
import './PlantCard.css'

function PlantCard({ _id, plantname, category, image, price, description }) {
  return (
    <>
      <div className='PlantCard'>
      <div className='upper-line'> <h1 className='plantname'>{ plantname}</h1>
      <div className='plant-image'>{image}</div></div>
      <div className='category'> Category - {category}</div>
   
      <div className='description'> Description - {description}</div>
      <div className='price'> Price - {price}</div>
      </div>
    </>
  )
}
export default PlantCard