import React from 'react'
import './PlantCard.css'
import toast ,{ Toaster}  from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';



function PlantCard({_id, plantname, category, image, price, description, loadPlants}) {
  
  const deletePlant = async (plantId) =>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)

    toast.success(response.data.message)
    loadPlants();
  }
  return (
    <>
      <div className='PlantCard'>
      <div className='upper-line'> <h1 className='plantname'>{ plantname}</h1>
      <img src={image} className='plant-image' alt='plant-img'/></div>
      <div className='category'> Category - {category}</div>
   
      <div className='description'> Description - {description}</div>
      <div className='price'> Price - {price}</div>

      <div>
          <Link className='plant-card-action-btn' to={`/update/${_id}`}>Edit</Link>
          <button type='button' className='plant-card-action-btn' 
            onClick={()=>{
              deletePlant(_id)
              }}>
                Delete
          </button>
        </div>
      </div>
    </>
  )

}
export default PlantCard