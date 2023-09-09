import React from 'react'
import "./unesco.css"
import "./recognition.css"
const UnescoCard = ({img}) => {
  return (
    <div className='unesco-card'>
        <img className='unesco' src={img} alt="unesco" />
        {/* <img src="frontend\src\pages\recognition\unesco.png" alt="unesco" /> */}
    </div>
  )
}

export default UnescoCard