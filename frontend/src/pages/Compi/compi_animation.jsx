import React from "react";
import "./compi_animation.css";
import img1 from "./static/img/img1.png"
import img2 from "./static/img/img2.png"
import img3 from "./static/img/img3.png"
import img4 from "./static/img/img4.png"
import img5 from "./static/img/img5.png"
import img6 from "./static/img/img6.png"
import img7 from "./static/img/img7.png"
import img8 from "./static/img/img8.png"
import svg from "./static/img/svg.svg"


export const Frame3 = () => {
  return (
    <div className="frame">
      <div className="compi_background">
        <div className="shade">
        <img src={svg} alt="fireflies" className="svg" />
        <img src={img3} alt="cup" className="cup"/>
        <img src={img1} alt="competition" className="tittle"/>
        </div>
      </div>
    </div>
  );  
};
