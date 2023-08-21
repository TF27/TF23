import React from 'react';
import explore from './explore.module.css';
import tf from '../img/tf.jpg';
import rectangle from '../img/Frame.png';
import sponser from '../img/image 4.png';



const Explore = () => {
  return (
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
          <img src={tf} alt=" flajsdfo" className={explore.imageview}/>
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
4 Members: Rs. 800 off</div>
         </div>
         <div className={explore.price}>INR 1100</div>
        
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
  )
}

export default Explore
