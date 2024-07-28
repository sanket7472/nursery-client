import axios from 'axios';
import { useEffect, useState } from 'react';
import PlantCard from '../../Components/PlantCard';
import './Home.css';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  const loadPlants = async () => {
    try {
      toast.loading("Loading Plants...");
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant`);
      toast.dismiss();
      console.log(response.data);
      setPlants(response.data.data);
      toast.success("Plants Loaded Successfully");
    } catch (error) {
      console.error(error);
      setError(error.message);
      toast.error("Error loading plants");
    }
  };

  useEffect(() => {
    loadPlants();
    return () => {
      toast.dismiss(); 
    };
  }, []);

  if (error) {
    return <div>Error loading plants: {error}</div>;
  }

  return (
    <div>
      <h1 className="brand-name">Aditya's Nursery</h1>
      <div className="PlantCard-div">
        {plants.map((plant, i) => {
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
          );
        })}
        <Toaster />
      </div>
    </div>
  );
}

export default Home;