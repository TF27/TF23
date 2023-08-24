import React,{useState} from 'react';
import cardview from './cardview.module.css';
import { Link } from 'react-router-dom';

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
          <div className={cardview.buttonwrapper1}> 
            <div className={`${cardview.btn} ${cardview.outline}`}><Link to={card.name}>REGISTER</Link></div>
          </div>
          <div className={cardview.buttonwrapper2}> 
            <div   className={`${cardview.btn} ${cardview.outline}`}><Link to={card.name}>EXPLORE</Link></div>
          </div>
          
        </div>
    </div>
    : 
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
        
    }
    </div>
   )
}

export default Card
