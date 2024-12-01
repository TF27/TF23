import React, { useState, useEffect } from 'react';
import parallax from './parallax.module.css';
import Grid from './Grid';
import axios from 'axios';
import { UserAuth } from "../../../contexts/AuthContext";

const ImageTwo = () => {

  //cards
  const [cards,setcards]=useState([]);
  const { user } = UserAuth();

  const google_id = user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/workshop/', {
          headers: {
            'X-Email': google_id,
          },
        });
        console.log(axios.defaults.headers.common);
        setcards(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [google_id]);
   
  return(
    <div  className={parallax.image} >
        <Grid  cards={cards}/>
    </div>
  )
};

export default ImageTwo