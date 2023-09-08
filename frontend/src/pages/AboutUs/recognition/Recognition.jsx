import React from 'react'
import "./recognition.css"
import UnescoCard from './UnescoCard'
const Recognition = () => {
  return (
    <div className='recognition'>
      <div className='recogradient'>
        {/* <div className="recog-header"> */}
        <div className="recognition-header">
            <img className='recog-header' src="pat1.png" alt="recognition" />
        </div>
        <div className="cardContainer">
          <div className="unesco-cards">
              <UnescoCard/>
              <UnescoCard/>
              <UnescoCard/>
              {/* <UnescoCard/> */}
          </div>
          <br />
          <br />
          <div className="unesco-cards">
              <UnescoCard/>
              <UnescoCard/>
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