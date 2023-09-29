import React from 'react';
import cardview from './cardview.module.css';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
   
  return (
    <div>
      <div className={cardview.container}>
        <div className={cardview.two}>
            <div className={cardview.wrapper}>
                <div className={cardview.bannerimage}>
                <img src={card.img} alt="Description of the image" width="157" height="157"/>

                </div>
                <p>{card.name}</p>
            </div>
            
            <div className={cardview.buttonwrapper1}> 
                <div className={`${cardview.btn} ${cardview.outline}`}><Link to={card.name}>REGISTER</Link></div>
              </div>
              <div className={cardview.buttonwrapper2}> 
                <div   className={`${cardview.btn} ${cardview.outline}`}><Link to={card.name}>EXPLORE</Link></div>
              </div>
        </div>
      </div>
    </div>
   )
}

export default Card
