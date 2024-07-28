import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlantCard from '../../Components/PlantCard';
import './Home.css'
import toast ,{ Toaster}  from 'react-hot-toast';

function Home() {
  const [plants, setplants] = useState([]);

  const loadplant = async () => {
    toast.loading("Loading Plants....")
      const response = await axios.get('http://localhost:5000/plant')
      toast.dismiss()
      console.log(response.data) 
      setplants(response.data.data)
      toast.success( " Plants Loaded Successfully")
 
  }

  useEffect(() => {
    loadplant();
  }, [])

  return (
    <div>
      <h1 className='brand-name'>Aditya's Nursery</h1>
      <div className='PlantCard-div'>
      {
            plants.map((plant, i) => {
        const {
          _id,
          plantname,
          category,
          image,
          price,
          description
        } = plant;
  
        return (
            
          <PlantCard
            key={i}
            _id={_id}
            plantname={plantname}
            category={category}
            image={image}
            price={price}
            description={description}
          />
          
        )

      } ,   <Toaster/>)}
      </div>
    </div>
  )
}

export default Home;