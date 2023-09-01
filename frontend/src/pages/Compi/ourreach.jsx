import React, { useEffect, useState } from 'react';
import Counter from '../../components/NewReach/counter';
import mylogo from './static/ourr.png'
import './ourreach.css'
function ourReach() {
  return (
    <>
<<<<<<< HEAD
      <div className='ourReach'>
        <h1>Our Reach</h1>
      </div>
=======
>>>>>>> ebda60db3476e3af20108ca3d6e78ce2734ce875
      <div className='loader'>
        <div className="buffer 1">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={1000} duration={2000}/>
          </div>
<<<<<<< HEAD
          <div>
            <h1>Happy Clients</h1>
          </div>
=======
>>>>>>> ebda60db3476e3af20108ca3d6e78ce2734ce875
        </div>
        <div className="buffer 2">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={2500} duration={2000}/>
          </div>
<<<<<<< HEAD
          <div>
            <h1>Projects</h1>
          </div>
=======
>>>>>>> ebda60db3476e3af20108ca3d6e78ce2734ce875
        </div>
        <div className="buffer 3">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={180} duration={2000}/>
          </div>
<<<<<<< HEAD
          <div>
            <h1>Team Members</h1>
          </div>
=======
>>>>>>> ebda60db3476e3af20108ca3d6e78ce2734ce875
        </div>
      </div>
    </>
  );
}

export default ourReach;