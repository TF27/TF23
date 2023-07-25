import React from 'react';
import technorion from './../../assets/compi/technorion.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../../contexts/AuthContext";
import styles from './compi.module.css';
import Border from '../../components/DoubleBorder/doubleborder';

const Technorion = () => {

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
      const zonals = data.filter(item => item.genre === '1')

      return zonals.map(data => (
        <div key={data.id} className='col-3'>
          <h2>{data.tag}</h2>
          <p>{data.name}</p>
          <p>{data.prize}</p>
          <p>{data.desc}</p>
          <p><img src={data.img} className={styles.card_img}/></p>
          {data.is_registered ? (<p>Registered</p>) : (
            <p><Link to={`${data.name}/register`}>Register</Link></p>
          )}
          <p><Link to={data.name}>Explore</Link></p>
        </div>
  
      ));
    };

    return ( 
        <div>
            <img src={technorion} alt="technorion" className="technorion"/>
            <div className={styles.desc}>
                <p className={styles.descT}>Welding is a critical activity for manufacturing. The threshold for welding error is the bare minimum. Build an ML model to predict welding defects in the materials by developing algorithms using process parameters such as ambient temperature, welding travel speed, etc.You can also perform advanced analytics on welder performance using machine data and welder details.</p>
            </div>
            {/* <Border Text="Register" height='36px' width='146px'/> */}
            <div className='technorion_cards'>
                <div className='container' style={{maxWidth: "90%"}}>
                    <div className='row'>
                            {card()}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Technorion;