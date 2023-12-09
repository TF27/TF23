import React from "react";
import "./compi_animation.css";
import img1 from "./static/img/img1.png"



export const Frame3 = () => {
  return (
    <div className="frame">
      <div className="compi_background">
        <div className="shade">
        <img src={img1} alt="competition techfest trophy" className="tittle"/>
        </div>
      </div>
      <div className='blackGradient-to-top'/>
    </div>
  );  
};
