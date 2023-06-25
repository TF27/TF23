import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Compi = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/compi_card/')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    const card = () => {
        return data.map(data => (
          <div key={data.id}>
            <h2>{data.tag}</h2>
            <p>{data.name}</p>
            <p>{data.prize}</p>
            <p>{data.desc}</p>
            <p><img src={data.img} /></p>
            <p><Link to={`${data.name}/register`}>Register</Link></p>
            <p><Link to={data.name}>Explore</Link></p>
          </div>
          
        ));
      };

    return ( 
        <div>
            <div>
                {card()}
            </div>
        </div>
     );
}
 
export default Compi;