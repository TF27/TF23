import React from 'react';
import Counter from '../../components/NewReach/counter';
import mylogo from '../Lectures/assets/ourr.png'
import '../Lectures/ourreach.css'
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
            <Counter targetValue={50} duration={2000} scrollVal={500} plus='+'/>
          </div>
          <div>
            <h2>International Exhibits</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={500} duration={2000} scrollVal={500} plus='+'/>
          </div>
          <div>
            <h2>International Universities</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={60} duration={2000} scrollVal={500} plus='K+'/>
          </div>
          <div>
            <h2>Footfall</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourReach;