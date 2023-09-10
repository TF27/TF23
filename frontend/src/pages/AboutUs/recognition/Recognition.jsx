import React from 'react'
import "./recognition.css"
import UnescoCard from './UnescoCard'
import makeinindia from './assets/makeinindia.png'
import unesco from './assets/unesco.png'
import unicef from './assets/unicef.png'
import cee from './assets/cee.png'
import sayen from './assets/sayen.png'

const Recognition = () => {
  return (
    <div className='recognition'>
      <div className='recognition_bg'></div>
      <div className='recogradient'>
        {/* <div className="recog-header"> */}
        <div className="recognition-header">
            <img className='recog-header' src="pat1.png" alt="recognition" />
        </div>
        <div className="cardContainer">
          <div className="unesco-cards">
              <UnescoCard img={unesco} />
              <UnescoCard img={unicef}/>
              <UnescoCard img={makeinindia} />
              {/* <UnescoCard/> */}
          </div>
          <br />
          <br />
          <div className="unesco-cards">
              <UnescoCard img={cee} />
              <UnescoCard img={sayen}/>
          </div>
          <div className="recog-frame2">
            <div className='recog-container'>
            <img className='recog-head' src="recog.png" alt="" />
            <div className="record">
              <img className='guinness' src="guinness.png" alt="" />
            </div>

            </div>
            <div className='leader-container'>
            <img className='leader-head' src="leader.png" alt="" />
            <div className="leaders">
                <img className='letterpm' src="letterpm.png" alt="" />
              <div className="horizontal-flex">
                <img className='apjk' src="apjk.png" alt="" />
                <img className='twitter' src="twitter.png" alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Recognition