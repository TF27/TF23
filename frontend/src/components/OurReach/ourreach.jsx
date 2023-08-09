import React, { useEffect, useState } from 'react';
import $ from 'jquery';
const OurReach = () => {

  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const countElements = document.querySelectorAll('.count');
      const animatedCircles = document.querySelectorAll('.animated-circle');
      const oTop = countElements[0].getBoundingClientRect().top - window.innerHeight;

      if (!counted && window.pageYOffset > oTop) {
        animatedCircles.forEach(circle => {
          circle.style.animation = `anime 1.3s linear forwards`;
        });

        countElements.forEach(element => {
          const countTo = parseInt(element.getAttribute('data-count'));
          let countNum = countTo - 500;

          const animateCount = () => {
            countNum += 2;
            element.textContent = Math.floor(countNum);

            if (countNum < countTo) {
              requestAnimationFrame(animateCount);
            }
          };

          animateCount();
        });

        setCounted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counted]);

  return (
    <div className="oureachm">
      <div className='our-reach'>OUR REACH</div>

      <div className="flex-container">
        <div className='center-text'>
          <div className="qcircle"></div>
            <div className="circle-text">
            <text x="23%" y="140" fill="white" id="count2" className="count percent" data-count="11500">
                  0
                </text>
                <text x="69%" y="140" fill="white">+</text>
            </div> 
        </div>

        <div className='center-text'>
          <div className="qcircle"></div>
            <div className="circle-text">
            <text x="39%" y="140" fill="white" id="count2" className="count percent" data-count="2500">
                  0
                </text>
                <text x="69%" y="140" fill="white">+</text>
            </div> 
        </div>

        <div className='center-text'>
          <div className="qcircle"></div>
            <div className="circle-text">
            <text x="39%" y="140" fill="white" id="count2" className="count percent" data-count="500">
                  0
                </text>
                <text x="69%" y="140" fill="white">+</text>
            </div> 
        </div>

      
        
      </div>
      <div className="text-flex-container">
        <div className="flex-text">COLLEGE AMBASSADORS</div>
        <div className="flex-text">INDIAN COLLEGES</div>
        <div className="flex-text">INTERNATIONAL COLLEGES</div>
      </div>

      {/* <div className="prev-stats" id="counter">
        <div className="skillm">
          <div className="circle">
            <svg className="reach" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#aaa8a8" />
                </linearGradient>
              </defs>
              <circle className="animated-circle" r="110" />
              
            </svg>

            <div className="image">
              <p className="wgat"></p>
            </div>
          </div>

          <div className="circle">
            <svg className="reach" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#aaa8a8" />
                </linearGradient>
              </defs>
              <circle className="animated-circle" r="110" />
             
            </svg>

            <div className="image">
              <p className="wgat" ></p>
            </div>
          </div>

          <div className="circle">
            <svg className="reach" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="#aaa8a8white" />
                </linearGradient>
              </defs>
              <circle className="animated-circle" r="110" />
              <text x="42%" y="140" fill="white" id="count3" className="count percent" data-count="500">
                0
              </text>
              <text x="58%" y="140" fill="white">+</text>
            </svg>

            <div className="image">
              <p className="wgat"></p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default OurReach;