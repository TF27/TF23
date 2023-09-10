
import React, { useState, useEffect } from "react";
import WorldMap from "./map";
import MapClick from "./m-map";
import Notify from "../../components/Notify/notify";
import OurReach from "./ourreach";
import ImageOne from "./ImageOne";
import parallax from './parallax.module.css';

const Exhibition =()=>{

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      // console.log(window.innerWidth)
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
    return(
        <div style={{height:'120vh'}}>
            <ImageOne/>
           <div className={parallax.exhi}>
            <Notify/>
            <div>{isMobile ? <MapClick /> : <WorldMap />}</div>
            <OurReach />
        </div>
        <div className="contactus">
          <h1 style={{ marginTop: "-100px", marginBottom: "40px"}}>CONTACT US</h1>
          {/* <div className="tray">

            <div>
              <ContactCard
                image={tiger}
                headText="Contact Us"
                emailText="contact@example.com"
                phoneNumberText="123-456-7890"
              />
            </div>
           
            <div>
              <ContactCard
                image=""
                headText="Contact Us"
                emailText="contact@example.com"
                phoneNumberText="123-456-7890"
              />
            </div>
          </div> */}
          <div className="Contactbox">
       
      

       <div className='Contactbox1'>
        
               Arnav Patel<br></br>
               arnav@techfest.org<br></br>
               <div onClick={() => window.location.href = `tel:${9372634701}`}>{9372634701}</div>
             
        </div>
         <div className='Contactbox1'>
           Manas Dadhich<br></br>
           manas@techfest.org<br></br>
           {/* <div onClick={() => window.location.href = `mailto:manas@techfest.org`}>{manas@techfest.org}</div><br></br> */}
           <div onClick={() => window.location.href = `tel:${9981378767}`}>{9981378767}</div>
           </div>  
           
       </div>
        </div>
        </div>
    )
  
    
}
export default Exhibition;
