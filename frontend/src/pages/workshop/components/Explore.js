import React from 'react';
import { useEffect,useState } from 'react';
import explore from './explore.module.css';
import tf from '../img/tf.jpg';
import rectangle from '../img/Frame.png';
import sponser from '../img/image 4.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserAuth } from "../../../contexts/AuthContext";



const Explore = () => {
  const { cardName } = useParams();
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
  }, []);

  const details = () => {
    const selectedCard = cards.filter(card => card.name === cardName)

    return selectedCard.map(card => (
      <div>
      <div className={explore.background}>

         <div className={explore.workshop}>
          
         </div>
         <div className={explore.sponser}>
            <div className={explore.txt}>Sponsered by</div>
            <img src={sponser} alt="no image" className={explore.sponserimage}/>
         </div>
         <div className={explore.image}>
          <img src={rectangle} alt="asdf" className={explore.imagevie}/>
          <img src={card.img} alt=" flajsdfo" className={explore.imageview}/>
         </div>
         <div className={explore.navbar}>
           <ul className={explore.navlinks}>
              <li><btn href="#">Techfest</btn></li>
              <li><btn href="#">Techfest</btn></li>
              <li><btn href="#">Techfest</btn></li>
              <li><btn href="#">Techfest</btn></li>
              <li><btn href="#">Techfest</btn></li>
              <li><btn href="#">Techfest</btn></li>
              
           </ul>
         </div>
         <div className={explore.description}>
          <div className={explore.desc}>Discount Offer:
              Register and Pay before 30 November, 2021
              to get Rs. 100 off

              Team Discounts:
              2 Members: Rs. 200 off
              3 Members: Rs. 500 off
              4 Members: Rs. 800 off
          </div>
         </div>
         <div className={explore.price}>INR {card.prize}</div>
        
         <div className={explore.buttonwrapper1}> 
            
            <button className={`${explore.btn} ${explore.outline}`}> EXPLORE </button>
        </div>
         <div className={explore.buttonwrapper2}> 
            
            <button className={`${explore.btn} ${explore.outline}`}> EXPLORE </button>
        </div>
        <div className={explore.buttonwrapper3}> 
            
            <button className={`${explore.btn} ${explore.outline}`}> EXPLORE </button>
        </div>
        
         
      </div>
    </div>
    ));
  }

  return (
    <div>
      {details()}
    </div>
  )
}

export default Explore
