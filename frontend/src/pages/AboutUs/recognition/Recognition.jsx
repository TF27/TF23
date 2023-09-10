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
            <img className='recog-header' src="pat1.png" alt="recognition text" />
        </div>
        <div className="cardContainer">
          <div className="unesco-cards">
              <UnescoCard img={unesco} text={"For promotion of technical knowledge"} alt={"unesco"}/>
              <UnescoCard img={unicef} text={"For various social causes taken up"} alt={"unicef"}/>
              <UnescoCard img={makeinindia} text={"For its Innovation Challenge"} alt={"makeinindia"}/>
              {/* <UnescoCard/> */}
          </div>
          <br />
          <br />
          <div className="unesco-cards">
              <UnescoCard img={cee} height='24vh' text={"For environment education"} alt={"cee"}/>
              <UnescoCard img={sayen} text={"For initiatives towards the environment"} alt={"sayen"}/>
          </div>
          <div className="recog-frame2">
            <div className='recog-container'>
            <img className='recog-head' src="recog.png" alt="recognition text" />
            <div className="record">
              <img className='guinness' src="guinness.png" alt="guinness world Record" />
            </div>

            </div>
            <div className='leader-container'>
            <img className='leader-head' src="leader.png" alt="leader text" />
            <div className="leaders">
                <img className='letterpm' src="letterpm.png" alt="letter of PM" />
              <div className="horizontal-flex">
                <img className='apjk' src="apjk.png" alt="APJ Abdul Kalam" />
                <img className='twitter' src="twitter.png" alt="Manohar Parikar" />
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