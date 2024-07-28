import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlantCard from '../../Components/PlantCard';
import './Home.css'

function Home() {
  const [plants, setplants] = useState([]);

  const loadplant = async () => {
    
      const response = await axios.get('http://localhost:5000/plant')
      console.log(response.data) 
      setplants(response.data.data)
 
  }

  useEffect(() => {
    loadplant();
  }, [])

  return (
    <div>
      <h1>Aditya's Nursery</h1>
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

      })}
      </div>
    </div>
  )
}

export default Home;