import React from 'react';
import Counter from '../../components/NewReach/counter';
import mylogo from './assets/ourr.png'
import './ourreach.css'
function ourReach() {
  return (
    <>
      <div className='ourReach'>
        <h1 style={{marginTop:'100px',marginBottom:'10px'}}>OUR REACH</h1>
      </div>
      <div className='loader'>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={750} duration={2000} scrollVal={500} plus='K+'/>
          </div>
          <div>
            <h2>Viewership</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={100} duration={2000} scrollVal={500} plus='+'/>
          </div>
          <div>
            <h2>International Lectures</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={45} duration={2000} scrollVal={500} plus='L+'/>
          </div>
          <div>
            <h2>Impressions</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourReach;