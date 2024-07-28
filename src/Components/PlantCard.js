import React from 'react'
import './PlantCard.css'
import toast ,{ Toaster}  from 'react-hot-toast';

function PlantCard({ _id, plantname, category, image, price, description }) {
  return (
    <>
      <div className='PlantCard'>
      <div className='upper-line'> <h1 className='plantname'>{ plantname}</h1>
      <img src={image} className='plant-image' alt='plant-img'/></div>
      <div className='category'> Category - {category}</div>
   
      <div className='description'> Description - {description}</div>
      <div className='price'> Price - {price}</div>
      </div>
    </>
  )

}
export default PlantCard