import React from "react";
import "./compi_animation.css";
import img1 from "./static/img/img1.png"
import svg from "./static/img/svg.svg"


export const Frame3 = () => {
  return (
    <div className="frame">
      <div className="compi_background">
        <div className="shade">
        <img src={img1} alt="competition" className="tittle"/>
        </div>
      </div>
      <div className='blackGradient-to-top'/>
    </div>
  );  
};
