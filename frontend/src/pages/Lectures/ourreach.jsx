import React, { useEffect, useState } from 'react';
import Counter from '../../components/NewReach/counter';
import mylogo from './assets/ourr.png'
import './ourreach.css'
function ourReach() {
  return (
    <>
      <div className='ourReach'>
        <h1>Our Reach</h1>
      </div>
      <div className='loader'>
        <div className="buffer 1">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={1000} duration={2000}/>
          </div>
          <div>
            <h1>Happy Clients</h1>
          </div>
        </div>
        <div className="buffer 2">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={2500} duration={2000}/>
          </div>
          <div>
            <h1>Projects</h1>
          </div>
        </div>
        <div className="buffer 3">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={180} duration={2000}/>
          </div>
          <div>
            <h1>Team Members</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourReach;