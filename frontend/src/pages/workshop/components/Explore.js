import React from 'react';
import { useEffect,useState } from 'react';
import explore from './explore.module.css';
import rectangle from '../img/Frame.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserAuth } from "../../../contexts/AuthContext";
// import 'bootstrap/dist/css/bootstrap.css';

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
     
        <div className={explore.background}>
          <div className={explore.workshopname}>{card.name}</div>
        <div className={explore.container}>
        
          <div className={explore.box1}>
          <div className={explore.image}>
            <img src={rectangle} alt="asdf" className={explore.frame}/>
            <img src={card.img} alt=" flajsdfo" className={explore.imageview}/>
          </div>
          <div className={explore.prize}>INR {card.prize}</div>
         <div className={explore.btnwrapper1}> 
            <btn className={`${explore.btn} ${explore.outline}`}> EXPLORE </btn>
         </div>
         <div className={explore.btnwrapper2}> 
            <btn className={`${explore.btn} ${explore.outline}`}> EXPLORE </btn>
         </div>
          </div>
          
          
          <div className={explore.box2}>
          <div className={explore.sponser}>
            {card.sponsorImg ? (
              <div>
                <div className={explore.txt}>Sponsered by</div>
                <img src={card.sponsorImg} alt="no image" className={explore.sponserimage}/>
              </div>
              )
            :
            (<p></p>)
            }
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
              Discount Offer:
              Register and Pay before 30 November, 2021
              to get Rs. 100 off
              Team Discounts:
              2 Members: Rs. 200 off
              3 Members: Rs. 500 off
              4 Members: Rs. 800 off
         </div>
         <div className={explore.btnwrapper3}> 
            <btn className={`${explore.btn} ${explore.outline}`}> EXPLORE </btn>
         </div>
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
