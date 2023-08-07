import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { UserAuth } from "../../contexts/AuthContext";
import { Frame3 } from "./compi_animation";
import Technorion from "./technorion";
const Compi = () => {

  const [data, setData] = useState([]);
  const { user } = UserAuth();

  const google_id = user?.uid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/compi_card/', {
          headers: {
            'X-Google-UID': google_id,
          },
        });
        console.log(axios.defaults.headers.common);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const card = () => {
    return data.map(data => (
      <div key={data.id}>
        <h2>{data.tag}</h2>
        <p>{data.name}</p>
        <p>{data.prize}</p>
        <p>{data.desc}</p>
        <p><img src={data.img} /></p>
        {data.is_registered ? (<p>Registered</p>) : (
          <p><Link to={`${data.name}/register`}>Register</Link></p>
        )}
        <p><Link to={data.name}>Explore</Link></p>
      </div>

    ));
  };

  return (
    <div>
        {/* <Frame3/> */}
        <Technorion />
        
        {card()}
     
    </div>
  );
}

export default Compi;