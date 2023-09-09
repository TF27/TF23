import React from 'react';
import Counter from '../../components/NewReach/counter';
import mylogo from '../Lectures/assets/ourr.png'
import '../Lectures/ourreach.css';
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
            <Counter targetValue={65} duration={2000} scrollVal={500} plus='L+'/>
          </div>
          <div>
            <h2>Prize Money</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={25} duration={2000} scrollVal={500} plus='+'/>
          </div>
          <div>
            <h2>Competitions</h2>
          </div>
        </div>
        <div className="buffer">
          <img src={mylogo} alt="buffering" id='myImg'/>
          <div className='Overlay'>
            <Counter targetValue={35} duration={2000} scrollVal={500} plus='K+'/>
          </div>
          <div>
            <h2>Participants</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourReach;