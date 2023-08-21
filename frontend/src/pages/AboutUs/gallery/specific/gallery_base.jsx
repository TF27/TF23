import left from "../../../../assets/gallery/ArrowLeft.svg"
import right from "../../../../assets/gallery/ArrowRight.svg"
import back from "../../../../assets/gallery/back.svg"

import React, { useState } from 'react'
import './gallery_base.css'
import { Link} from 'react-router-dom';

const Gal_base = ({
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10
}) => {
    const [current, setCurrent] = useState(2);
    const [prev2, setPrev2] = useState(0);
    const [prev, setPrev] = useState(1);
    const [next, setNext] = useState(3);
    const [next2, setNext2] = useState(4);

    let slides = document.getElementsByClassName('slide')
    console.log(slides) 

    const gotoPrev = () => {
      console.log('jaa rha hai piche')
      const newPrev = current > 0 ? current - 1 : 9;
      gotoNum(newPrev);
    };
  
    const gotoNext = () => {
      console.log('jaa rha hai aage')
      const newNext = current < 9 ? current + 1 : 0;
      gotoNum(newNext);
    };
    
    const gotoNum = (number) => {

      const newCurrent = number;
      let newPrev2 = newCurrent -2;
      let newPrev = newCurrent - 1;
      let newNext = newCurrent + 1;
      let newNext2 = newCurrent +2;

      
      if (newPrev2 === -2) {
        newPrev2 = 8;
      }

      if (newPrev2 === -1) {
        newPrev2 = 9;
      }
  
      if (newPrev === -1) {
        newPrev = 9;
      }  

      if (newNext === 10) {
        newNext = 0;
      }

      if (newNext2 === 10) {
        newNext2 = 0;
      }

      if (newNext2 === 11) {
        newNext2 = 1;
      }
      
      console.log(newPrev2);
      console.log(newNext2);

      for (let index = 0; index < slides.length; index++) {
          slides[index].className = "slide ";
      }

      slides[newPrev2].className = slides[newPrev2].className.replace(" " , " prev2")
      slides[newPrev].className = slides[newPrev].className.replace(" " , " prev")
      slides[newCurrent].className = slides[newCurrent].className.replace(" " , " active")
      slides[newNext].className = slides[newNext].className.replace(" " , " next")
      slides[newNext2].className = slides[newNext2].className.replace(" " , " next2")

      setPrev2(newPrev2);
      setPrev(newPrev);
      setCurrent(newCurrent);
      setNext(newNext);
      setNext2(newNext2);
    };

    //===================mobile===========================================
    var active = -1;
    const goto = (number) => {

      var parent = document.getElementById("slides");
      var children = parent.children;

      var buttons = document.getElementById("buttons").children;

      for (let index = 0; index < children.length; index++) {
        children[index].className = "slide ";
        buttons[index].className = "button"
      }

      if (active!=number){
        active = number;
        children[number].className = "slide active";
        buttons[number].className = "button active" 

        parent.scrollLeft = children[number].offsetLeft;
      }

      else if(active=number){
        active=-1;
        parent.scrollLeft = children[number].offsetLeft - 50;
      }

    }
    
    return (  
      <>
        <div className="gallery_slider">
            <div className="slides">
                <div className="slide prev2">
                    <img src={i1} className="Glimpse" alt="Technoholix stage, Techfest IIT Bombay Asia's Largest Science and Technology Festival" />
                </div>
                <div className="slide prev">
                    <img src={i2} className="Glimpse" alt="His Holiness The 14th Dalai Lama at Techfest IIT Bombay" />
                </div>
                <div className="slide active">
                    <img src={i3} className="Glimpse" alt="Guinness book of world record by Techfest IIT Bombay most LED lights lit Students holding lights" />
                </div>
                <div className="slide next">
                    <img src={i4} className="Glimpse" alt="handling drone at Techfest IIT Bombay platform for Science and Technology enthusiasts" />
                </div>
                <div className="slide next2">
                    <img src={i5} className="Glimpse" alt="International Robowars arena Techfest IIT Bombay with audience" />
                </div>
                <div className="slide ">
                    <img src={i6} className="Glimpse" alt= "International DJ artists Maddix and Krispie at EDM night of Techfest IIT Bombay" />
                </div>
                <div className="slide ">
                    <img src={i7} className="Glimpse" alt="Social Initiative spread awareness among youth college students by Techfest IIT Bombay on Sanitation Health Education" />
                </div>
                <div className="slide ">
                    <img src={i8} className="Glimpse" alt="Battlebots fight International Robowars audience watching" />
                </div>
                <div className="slide ">
                    <img src={i9} className="Glimpse" alt="International teams participated competitions at Techfest IIT Bombay" />
                </div>
                <div className="slide ">
                    <img src={i10} className="Glimpse" alt="Entry or welcome gate ambience in IIT Bombay campus during Techfest" />
                </div>
            </div>
            <div className="button-container">
                <div className="button" onClick={gotoPrev}><img src={left} alt="left"/></div>
                <div className="button" onClick={gotoNext}><img src={right} alt="right"/></div>
            </div>
            <Link className="back-button" to="/gallery"><img src={back} alt="right"/></Link> 
        </div>

        {/*===========mobile================================================*/}
        <div className="gallery_slider_m">
          <div className="wrapper">
            <div className="slides" id="slides">
              <div className="slide " onClick={() => goto(0)}>
                <img src={i1} className="Glimpse" alt="Technoholix stage, Techfest IIT Bombay Asia's Largest Science and Technology Festival" />
              </div>
              <div className="slide " onClick={() =>goto(1)}>
                <img src={i2} className="Glimpse" alt="His Holiness The 14th Dalai Lama at Techfest IIT Bombay" />
              </div>
              <div className="slide " onClick={() =>goto(2)}>
                <img src={i3} className="Glimpse" alt="Guinness book of world record by Techfest IIT Bombay most LED lights lit Students holding lights" />
              </div>
              <div className="slide " onClick={() =>goto(3)}>
                <img src={i4} className="Glimpse" alt="handling drone at Techfest IIT Bombay platform for Science and Technology enthusiasts" />
              </div>
              <div className="slide " onClick={() =>goto(4)}>
                <img src={i5} className="Glimpse" alt="International Robowars arena Techfest IIT Bombay with audience" />
              </div>
              <div className="slide " onClick={() =>goto(5)}>
                <img src={i6} className="Glimpse" alt= "International DJ artists Maddix and Krispie at EDM night of Techfest IIT Bombay" />
              </div>
              <div className="slide " onClick={() =>goto(6)}>
                <img src={i7} className="Glimpse" alt="Social Initiative spread awareness among youth college students by Techfest IIT Bombay on Sanitation Health Education" />
              </div>
              <div className="slide " onClick={() =>goto(7)}>
                <img src={i8} className="Glimpse" alt="Battlebots fight International Robowars audience watching" />
              </div>
              <div className="slide " onClick={() =>goto(8)}>
                <img src={i9} className="Glimpse" alt="International teams participated competitions at Techfest IIT Bombay" />
              </div>
              <div className="slide " onClick={() =>goto(9)}>
                <img src={i10} className="Glimpse" alt="Entry or welcome gate ambience in IIT Bombay campus during Techfest" />
              </div>
            </div>
            <div className="buttons" id="buttons">
              <div className="button" onClick={() => goto(0)}></div>
              <div className="button" onClick={() => goto(1)}></div>
              <div className="button" onClick={() => goto(2)}></div>
              <div className="button" onClick={() => goto(3)}></div>
              <div className="button" onClick={() => goto(4)}></div>
              <div className="button" onClick={() => goto(5)}></div>
              <div className="button" onClick={() => goto(6)}></div>
              <div className="button" onClick={() => goto(7)}></div>
              <div className="button" onClick={() => goto(8)}></div>
              <div className="button" onClick={() => goto(9)}></div>
            </div>
            <Link className="back-button" to="/gallery"><img src={back} alt="right"/></Link> 
          </div>
        </div>
      </>
    );
}

export default Gal_base;


