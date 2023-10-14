import React from 'react';
import Counter from '../../components/NewReach/counter';
import mylogo from '../Lectures/assets/ourr.png'
import './ourreach.css';
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
            <Counter targetValue={13} duration={1000} scrollVal={1300} plus='L+'/>
          </div>
          <div>
            <h2>Prize Money</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={20} duration={1000} scrollVal={1300} plus='+'/>
          </div>
          <div>
            <h2>International Teams</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={7} duration={1000} scrollVal={1300} plus='K+'/>
          </div>
          <div>
            <h2>Audience</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourReach;