import React from 'react';
import parallax from './parallax.module.css';
import Notify from "../../../components/Notify/notify";
import sum1 from "../assets/sum1.jpg";
import sum2 from "../assets/sum2.jpg";


const ImageTwo = () => {
 
  return(
    <div className={parallax.image}>      
    <div className={parallax.blackGradienttop}/>  
    <div className={parallax.blackGradienttop}/>  
    <h1 className={parallax.head}>Agenda</h1>
      <div className={parallax.summitRow}>
        <div className={parallax.summitColumn}>
          <div className={parallax.txt1} >Fintech</div>
          <img src={sum1} alt="FinTech" />
        </div>
        <div className={parallax.summitColumn}>
        <div className={parallax.txt2}>Industry 4.0</div>
          <img src={sum2} alt="Industry 4.0"  />
        </div>
      </div>
        {/* <Notify/> */}
    </div>
  )
};

export default ImageTwo