import React from 'react'
import "./unesco.css"
import "./recognition.css"
const UnescoCard = ({img,text,height,alt}) => {
  return (
    <div className='unesco-card'>
        <img className='unesco' src={img} alt={alt} style={{height:height}} />
        <p>{text}</p>
        {/* <img src="frontend\src\pages\recognition\unesco.png" alt="unesco" /> */}
    </div>
  )
}

export default UnescoCard