import img1 from '../../../../assets/gallery/link.png'
import img2 from '../../../../assets/gallery/link.png'
import img3 from '../../../../assets/gallery/link.png'
import img4 from '../../../../assets/gallery/link.png'
import img5 from '../../../../assets/gallery/link.png'
import img6 from '../../../../assets/gallery/link.png'
import img7 from '../../../../assets/gallery/link.png'
import img8 from '../../../../assets/gallery/link.png'
import img9 from '../../../../assets/gallery/link.png'
import img10 from '../../../../assets/gallery/link.png'
import left from "../../../../assets/gallery/ArrowLeft.svg"
import right from "../../../../assets/gallery/ArrowRight.svg"
import back from "../../../../assets/gallery/back.svg"
import React, { useState } from 'react'
import './corousel.css'
import { Link} from 'react-router-dom';

const Slider = () => {
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
    
    return (  
        <div className="gallery_slider">
            <div className="slides">
                <div className="slide prev2">
                    <img src={img1} className="Glimpse" alt="Technoholix stage, Techfest IIT Bombay Asia's Largest Science and Technology Festival" />
                </div>
                <div className="slide prev">
                    <img src={img2} className="Glimpse" alt="His Holiness The 14th Dalai Lama at Techfest IIT Bombay" />
                </div>
                <div className="slide active">
                    <img src={img3} className="Glimpse" alt="Guinness book of world record by Techfest IIT Bombay most LED lights lit Students holding lights" />
                </div>
                <div className="slide next">
                    <img src={img4} className="Glimpse" alt="handling drone at Techfest IIT Bombay platform for Science and Technology enthusiasts" />
                </div>
                <div className="slide next2">
                    <img src={img5} className="Glimpse" alt="International Robowars arena Techfest IIT Bombay with audience" />
                </div>
                <div className="slide ">
                    <img src={img6} className="Glimpse" alt= "International DJ artists Maddix and Krispie at EDM night of Techfest IIT Bombay" />
                </div>
                <div className="slide ">
                    <img src={img7} className="Glimpse" alt="Social Initiative spread awareness among youth college students by Techfest IIT Bombay on Sanitation Health Education" />
                </div>
                <div className="slide ">
                    <img src={img8} className="Glimpse" alt="Battlebots fight International Robowars audience watching" />
                </div>
                <div className="slide ">
                    <img src={img9} className="Glimpse" alt="International teams participated competitions at Techfest IIT Bombay" />
                </div>
                <div className="slide ">
                    <img src={img10} className="Glimpse" alt="Entry or welcome gate ambience in IIT Bombay campus during Techfest" />
                </div>
            </div>
            <div className="button-container">
                <div className="button" onClick={gotoPrev}><img src={left} alt="left"/></div>
                <div className="button" onClick={gotoNext}><img src={right} alt="right"/></div>
            </div>
            <Link className="back-button" to="/gallery"><img src={back} alt="right"/></Link> 
        </div>
    );
}
 
export default Slider;