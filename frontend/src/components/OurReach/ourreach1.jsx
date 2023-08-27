import React, { useEffect, useState } from 'react';
import styles from './ourreach.module.css';
import chakkar from './ourr.png';

const OurReach = () => {
  const [counted, setCounted] = useState(false);
  
  useEffect(() => {
    setCounted(false);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const countElements = document.querySelectorAll('.count');
      const scrollY = window.scrollY;
      console.log(scrollY)
      console.log(counted)
      if (!counted && scrollY > 100) {
        countElements.forEach(element => {
          const countTo = parseInt(element.getAttribute('data-count'));
          let countNum = countTo < 500 ? 0 : countTo - 500;
          console.log(scrollY)
          console.log(countNum)
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

  const ReachCircle = ({ dataCount, name, nameImg,  plus, x1, x2 }) => {
    const image = {
      backgroundImage: `url(${nameImg})`,
    }
    return (
      <div className={`col-lg-4 col-sm-12 ${styles.pastS}`}>
      <div className={styles.circle} id='circle'>
        <img src={chakkar} alt='Our Reach' className={styles.chakkar} />
        <div className={styles.ourr_text}>
          <text x={x1} y='130' fill='white' id='count1' className='count percent' data-count={dataCount}>
            0
          </text>
          <text x={x2} y='130' fill='white'>
            {plus}
          </text>
        </div>
        <div>
          <div className={styles.ourr_image1} style={image}>
            <span className={styles.our_wgat}>{name}</span>
          </div>
        </div>
      </div>
      </div>
    )
  }
  return (
    <div className={styles.OurReach}>
      <h2>OUR REACH</h2>
      <div className='container'>
      <div className='row'>
        <ReachCircle dataCount='750' name='Viewership' plus='K+' x1='34%' x2='55%' />
        <ReachCircle dataCount='750' name='Viewership' plus='K+' x1='34%' x2='55%' />
        <ReachCircle dataCount='750' name='Viewership' plus='K+' x1='34%' x2='55%' />
      </div>
      </div>
    </div>
  );
}

export default OurReach;