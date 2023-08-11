import React,{useState} from 'react';
import cardview from './cardview.module.css'

const Card = ({card}) => {
    const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
    {isHovered ? 
       <div className={cardview.container}>
       <div className={cardview.two}>
            <div className={cardview.wrapper}>
                <div className={cardview.overlay}>{card.desc}</div>
                <p>{card.name}</p>
            </div>
            <div className={cardview.buttonwrapper}> 
                <button className={`${cardview.btn} ${cardview.outline}`}> REGISTER </button>
                <button className={`${cardview.btn} ${cardview.outline}`}> EXPLORE </button>
            </div>
        </div>
    </div>
    : 
    <div className={cardview.container}>
    <div className={cardview.two}>
         <div className={cardview.wrapper}>
             <div className={cardview.bannerimage}></div>
             <p>{card.name}</p>
         </div>
         <div className={cardview.buttonwrapper}> 
             <button className={`${cardview.btn} ${cardview.outline}`}> REGISTER </button>
             <button className={`${cardview.btn} ${cardview.outline}`}> EXPLORE </button>
         </div>
     </div>
 </div>
        
    }
    </div>
   )
}

export default Card
