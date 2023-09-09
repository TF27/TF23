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
            {isMobile ? <MapClick /> : <WorldMap />}
            <OurReach />
        </div>
        </div>
    )
}
export default Exhibition;
