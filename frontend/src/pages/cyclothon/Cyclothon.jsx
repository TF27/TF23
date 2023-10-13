import React, { useState, useEffect,useRef } from 'react';
import parallax from './home.module.css';
import './home.css';

import triangle from './img/triangle.png'
import cyclo from './img/ABOUT US.png'
import circle from './img/circle.png';
import vision from './img/vision title.png';
import incentives from './img/incentives title.png'
import incentives1 from './img/incentives1.png'
import incentives2 from './img/incentives2.png'
import incentives3 from './img/incentives3.png'
import layer6 from './img/layer6.png';
import sponsor from './img/sponsor.png'
import contact from './img/contact.png'
import schedule from './img/schedule-title.png'

const Cyclothon = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);

  const redirectToExternalSite = () => {
    window.location.href = 'https://www.techfest.org'; 
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Adjust this value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return(
 <div>
   <div  className={parallax.parallaxcontainer} style={{ height: "120vh" }} >
    <div className={`${parallax.parallaxlayer} ${parallax.layer1}`} style={{ transform: `translateY(${scrollPosition * 0}px)`,scrollBehavior:'smooth' }} >
    
    </div>
    <div className={`${parallax.parallaxlayer} ${parallax.layer2}`} >
      <img src={circle} alt="sorry no image"  className={parallax.circle}/>
    </div>
    <div className={`${parallax.parallaxlayer} ${parallax.layer4}`} style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}/>
    <div className={`${parallax.parallaxlayer} ${parallax.layer3}`} />
    <div className={parallax.blackGradientbottom} style={{ transform: `translateY(${scrollPosition * 0}px)`,scrollBehavior:'smooth' }}>
    <btn className={parallax.custombutton1} onClick={redirectToExternalSite}>
      RENT A CYCLE
    </btn>
    <btn className={parallax.custombutton2} onClick={redirectToExternalSite}>
      REGISTER NOW
    </btn>
    <h3 style={{position:'relative',font:'Montserrat'}} className={parallax.date}>15 OCTOBER |  6 AM | IIT BOMBAY, POWAI </h3>
    </div>
  </div>
    <div className={parallax.image} >
    <div className="container" style={{ transform: `translateY(${scrollPosition * 0}px)`,scrollBehavior:'smooth' }}>
      <div className="row row-gap">
        <div className="col-md-6 class1" >
          <img src={triangle} alt="sorry no image" className="img-fluid" width="80%" height="100%"/>
        </div>
        <div className="col-md-6 class2">
          <img src={cyclo} alt="sorry no image" className="img-fluid" style={{maxWidth:'70%',marginBottom:'15px'}} />
          <p className="visiontext">Techfest, IIT Bombay invites you to the 4th edition of the Techfest Cyclothon. Experience the serenity of nature in the heart of the urban jungle as you pedal across a 12 km long route that will provide you with a glimpse of the natural beauty of the lush, green IIT Bombay campus.Join us on the 6th of October in pledging to include this eco-friendly mode of transport in our daily lives and take the first step towards stopping air pollution with the Techfest Cyclothon!</p>
        </div>
      </div>
      <img src={vision} alt="sorry no image"  className="img-fluid vision" style={{maxWidth:'50%',marginTop:'50px'}} />
      <div>
        <p className="visiontext">With a vision to promote cycling as a green and eco-friendly means of transport, the Techfest Cyclothon aims to help you take the first step in the fight against air pollution by adopting the humble bicycle as the perfect alternative to fuel guzzlers in cities like Mumbai.</p>
      </div>
      <img src={incentives} alt="sorry no image"  className="img-fluid" style={{maxWidth:'80%',marginTop:'50px'}} />
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="flex-item" style={{display:'flex',flexDirection:'rows',marginBottom:'-38px'}}>
            <img src={incentives1} alt="sorry no image"  className="img-fluid" style={{maxWidth:'16%',marginTop:'35px'}} />
            <p className="visiontext" style={{marginTop:'65px'}}>Free Entry</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="flex-item" style={{display:'flex',flexDirection:'rows',marginBottom:'-38px'}}>
            <img src={incentives2} alt="sorry no image"  className="img-fluid" style={{maxWidth:'17%',marginTop:'39px'}} />
            <p className="visiontext" style={{marginTop:'65px'}}>Free Cyclothon T-shirts</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="flex-item" style={{display:'flex',flexDirection:'rows'}}>
            <img src={incentives3} alt="sorry no image"  className="img-fluid" style={{maxWidth:'17%',marginTop:'39px'}} />
            <p className="visiontext" style={{marginTop:'65px'}}>Free Fitness Session</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <img src={schedule} alt="sorry no image" className="img-fluid schedule"  />
    <div ref={ref} className="image-container animated-component fade-in">
    
    </div>
  
    <img src={sponsor} alt="sorry no image" className="img-fluid sponser" />

     <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center">
          <h3  className={parallax.sponser1}>LOREM IPSUM</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center">
          <h3  className={parallax.sponser2}>LOREM EPSUM</h3>
          </div>
        </div>
      </div>
    </div>
    <img src={contact} alt="sorry no image" className="img-fluid contact"  />
    <h3 style={{position:'relative',top:'10vh',font:'montserrat'}} className={parallax.date}>LOREM EPSUM</h3>
    <h3 style={{position:'relative',top:'10vh',font:'montserrat',marginBottom:'10vh'}} className={parallax.date}>LOREM EPSUM</h3>
 </div>
  )
};
export default Cyclothon