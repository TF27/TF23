import React, { useEffect, useState } from 'react';
import './ourreach.css';
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
          let countNum = countTo < 500 ? 0 : countTo - 500;
          
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

  const ReachCirlce = ({ dataCount, name, plus, x1, x2 }) => {
    return (
        <div className='circle' id='circle1'>
            <svg fill='none' className='reach' xmlns='http://www.w3.org/2000/svg' version='1.1' width='300px' height='300px'>
                <defs>
                    <linearGradient id='GradientColor'>
                        <stop offset='0%' stopColor='#ffffff' />
                        <stop offset='100%' stopColor='#aaa8a8' />
                    </linearGradient>
                </defs>
                <circle className='animated-circle' cx='150' cy='120' r='110' />
                <text x={x1} y='130' fill='white' id='count1' className='count percent' data-count={dataCount}>
                    0
                </text>
                <text x={x2} y='130' fill='white'>
                    {plus}
                </text>
            </svg>
            <div className="image">
              <span className="wgat">{name}</span>
            </div>
        </div>
    )
  }
  return (
    <div className="oureach">
      <div className='our-reach'>Our Reach</div>
      <div className="prev-stats" id="counter">
        <div className="skill">
        <ReachCirlce dataCount='750' name='Viewership' plus='K+' x1='34%' x2='55%'/>
        <ReachCirlce dataCount='100' name='International Lectures' plus='+' x1='35%' x2='55%' />
        <ReachCirlce dataCount='45' name='Impressions' plus='L+' x1='37%' x2='50%' />
        </div>
      </div>
    </div>
  );
}

export default OurReach;