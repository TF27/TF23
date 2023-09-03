import React, { useEffect, useState } from 'react';
import Counter from '../../components/NewReach/counter';
import mylogo from './assets/ourr.png'
import './ourreach.css'
function ourReach() {
  return (
    <>
      <div className='ourReach'>
        <h1 style={{marginTop:'40px',marginBottom:'40px'}}>OUR REACH</h1>
      </div>
      <div className='loader'>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={1000} duration={2000} scrollVal={500}/>
          </div>
          <div>
            <h2>Happy Clients</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={2500} duration={2000} scrollVal={500}/>
          </div>
          <div>
            <h2>Projects</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={180} duration={2000} scrollVal={500}/>
          </div>
          <div>
            <h2>Team Members</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourReach;