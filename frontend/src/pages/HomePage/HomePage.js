import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/videoplayer";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [videoId, setVideoId] = useState("");
  console.log(user);
  console.log(token);


  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  
  return (

  <div>
    
  
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to="/addcar">Add Car Right Here 😎</Link>

      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
    </div>
    </div>
  );
};

export default HomePage;