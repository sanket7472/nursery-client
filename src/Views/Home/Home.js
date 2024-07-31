import axios from 'axios';
import { useEffect, useState } from 'react';
import PlantCard from '../../Components/PlantCard';
import './Home.css';
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  const loadPlants = async () => {
    toast.loading("Loading Plants...");
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant`);
      toast.dismiss();
      setPlants(response.data.data);
      toast.success("Plants Loaded Successfully");
    } catch (err) {
      toast.dismiss();
      setError(err.message);
      toast.error("Failed to load plants");
    }
  };

  useEffect(() => {
    loadPlants();
  }, []);

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
