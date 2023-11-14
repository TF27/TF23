import React, { useState, useEffect,useRef } from 'react';
import parallax from './home.module.css';
import './home.css';

import triangle from './img/triangle.png'
import cyclo from './img/ABOUT US.png'
import circle from './img/circle.png';
import food from './img/food.png'
import vision from './img/vision title.png';
import incentives from './img/incentives title.png'
import incentives1 from './img/incentives1.png'
import incentives2 from './img/incentives2.png'
import incentives3 from './img/incentives3.png'
import layer6 from './img/layer6.png';
import sponsor from './img/sponsor.png'
import decathlon from './img/decathlon.png'
import contact from './img/contact.png'
import schedule from './img/schedule-title.png'
import maxprotein from './img/maxprotein.jpg'

const Cyclothon = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);

  const redirectToExternalSite = () => {
    window.location.href = 'https://play.decathlon.in/event-details/IIT-Bombay-Techfest-Cyclothon/63c55e10-6e5a-11ee-b57b-1794e332b535?utm_source=sharebutton&utm_medium=decathlon_play_partner_app&utm_campaign=externalshare'; 
  };
  const rentcycle = () => {
    window.location.href = 'https://www.meraevents.com/event/cycle-on-rent-cyclothon-2023-iitb?ucode=organizer'; 
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
      REGISTER NOW
    </btn>
    <btn className={parallax.custombutton2} onClick={rentcycle}>
      RENT A CYCLE
    </btn>
    <h3 style={{position:'relative',font:'Montserrat'}} className={parallax.date}>5 NOVEMBER | 6 AM | IIT BOMBAY, POWAI</h3>
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
          <p className="visiontext">Techfest, IIT Bombay is thrilled to present the 6th edition of the Techfest Cyclothon with a profound focus on sustainability. On the 5th of November, we invite you to partake in a memorable journey that beautifully marries nature and urban living. As you cycle through a captivating 15 km route that winds through the lush IIT Bombay campus, we aim to kindle a sense of eco-consciousness and the significance of sustainable practices in our daily lives. Together, let's pedal towards a cleaner, greener future at the Techfest Cyclothon.
          </p>
        </div>
      </div>
      <img src={vision} alt="sorry no image"  className="img-fluid vision" style={{maxWidth:'50%',marginTop:'50px'}} />
      <div>
        <p className="visiontext">We envision a world where every pedal stroke is a step towards a greener, cleaner planet. Our vision is to inspire a sustainable revolution, where the simple act of cycling becomes a powerful catalyst for positive change. Join us in this movement, as we pedal together to reduce our carbon footprint, protect the environment, and pave the way for a brighter, more sustainable future. Let's make a difference, one pedal at a time.
</p>
      </div>
      <img src={incentives} alt="sorry no image"  className="img-fluid" style={{maxWidth:'80%',marginTop:'50px'}} />
      <div className="container1">
      <div className="row1">
        <div className="col-md-3 element1" >
          <div className="flex-item" style={{display:'flex',flexDirection:'rows',marginBottom:'-38px'}}>
            <img src={incentives1} alt="sorry no image"  className="img-fluid" style={{maxWidth:'16%',marginTop:'35px'}} />
            <p className="visiontext" style={{marginTop:'65px'}}>Free Entry</p>
          </div>
        </div>
        <div className="col-md-3 element2" >
          <div className="flex-item" style={{display:'flex',flexDirection:'rows'}}>
            <img src={food} alt="sorry no image"  className="img-fluid" style={{maxWidth:'14%',marginTop:'49px'}} />
            <p className="visiontext" style={{marginTop:'65px',marginLeft:'10px'}}>Free FnB</p>
          </div>
        </div>
        
        <div className="col-md-3 element3" >
          <div className="flex-item" style={{display:'flex',flexDirection:'rows'}}>
            <img src={incentives3} alt="sorry no image"  className="img-fluid" style={{maxWidth:'17%',marginTop:'39px'}} />
            <p className="visiontext" style={{marginTop:'65px',marginLeft:'10px'}}>Free Fitness Session</p>
          </div>
        </div>
        <div className="col-md-3 element4" >
          <div className="flex-item" style={{display:'flex',flexDirection:'rows',marginBottom:'-38px'}}>
            <img src={incentives2} alt="sorry no image"  className="img-fluid" style={{maxWidth:'17%',marginTop:'39px'}} />
            <p className="visiontext" style={{marginTop:'65px'}}>Free Cyclothon T-shirts</p>
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
    <p></p>
    <img src={decathlon} alt="sorry no image" className="img-fluid decathlon" />
    <p className="energy">Energy Partner</p>
    <img src={maxprotein} alt="sorry no image" className="img-fluid maxprotein" />

     
    
      <div>
        <p className="tnc">TERMS & CONDITIONS</p>
      </div>
      <div>
        <p className="tnctext">1. Those who did not have cycle and still want to participate in cyclothon, should click on "Rent a cycle" above.<br/>

2. This is a Cyclothon event and not a race. The road closure is for a few km distances and a few crucial points only. So every participant is expected to take care of their safety at their own risk and riders have to follow all the rules.<br/>

3. Though the event organizer will provide all support of Hydration, Medical, Technician, and Crew support, it is expected that if participants have any prior medical condition, they have to take suggestions from their family doctor about participation.<br/>

4. Electric Bicycle is not allowed; they will be disqualified if any participant is found.<br/>

5. Food and Beverages will be distributed at the end of the event<br/>

6. In case of any theft or misplace of your product, Techfest will not be responsible.<br/> 

9. In case of the event's date changes, the participant can claim the full refund at <a href="techfest.org/cyclothon">techfest.org/cyclothon</a> or existing registration will be carried forward to the new date.<br/>

10. If the event gets cancelled due to unavoidable circumstances, the participant will get a full refund.<br/>

11. The organizer has the right to change the venue, Route, and Event time as per the IITB Guidelines or Permission.<br/>

12. In case of any change in Event time, Venue and Route, we will notify you through email or the event website <a href="techfest.org">techfest.org</a> For any queries, you can email us at <a href="manager.techfest@gmail.com">manager.techfest@gmail.com</a><br/>

13. Techfest will provide the Services to the Participants of The Event up until its completion free of cost to the Participants. For any medical care further to the Services provided to the Participant and for which admission into any in-patient department (IPD) is required, the Participant shall be admitted to the nearest hospital and the Participant or relative shall follow the policies of that hospital for admission and billing. In case the Participant is admitted to the Hospital, he/ she shall be charged for the medical services availed there as per the prevailing policy of that hospital and the Participant shall bear such costs.</p>
      </div>
    <img src={contact} alt="sorry no image" className="img-fluid contact"  />
    <h3 style={{position:'relative',top:'10vh',font:'montserrat',marginBottom:'5vh'}} className={parallax.date}>Ajay Agrawal<br/>ajay@techfest.org<br/>
+91 7509759232

</h3>
    <h3 style={{position:'relative',top:'10vh',font:'montserrat',marginBottom:'20vh'}} className={parallax.date}>Prathamesh Hatwar<br/>prathamesh@techfest.org<br/>
+91 7387041365 </h3>
 </div>
  )
};
export default Cyclothon