import React, { useEffect, useState } from 'react';
import 'C:\Users\Kaushal\Desktop\TF23\frontend\src\components\NewReach\counter.js';
function ourReach() {
  return (
    <>
      <div className='loader'>
        <div className="buffer 1">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={1000} duration={2000}/>
          </div>
        </div>
        <div className="buffer 2">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={2500} duration={2000}/>
          </div>
        </div>
        <div className="buffer 3">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={180} duration={2000}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourReach;