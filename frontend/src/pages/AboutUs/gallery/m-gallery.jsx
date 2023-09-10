import React, { Component, link } from 'react'
import style from "./gallery.css"
import { Link, useNavigate } from 'react-router-dom';

export class MGallery extends Component {

  render() {
    return (
        <div className='gal-mob'>
                <div className='gal-text'><Link className="nav-link" to="/gallery/ozone">
                    ---Ozone---                        
                </Link></div>
                <div className='gal-text'><Link className="nav-link" to="/gallery/exhibition">
                    ---Exhibition---
                </Link></div>
                <div className='gal-text'><Link className="nav-link" to="/gallery/lectures">
                    ---Lecture---
                </Link></div>
                <div className='gal-text'><Link className="nav-link" to="/gallery/robowars">
                    ---Robowars---
                </Link>   </div>
                <div className='gal-text'><Link className="nav-link" to="/gallery/compi">
                    ---Competitions---
                </Link></div>
                <div className='gal-text'><Link className="nav-link" to="/gallery/technoholix">
                    ---Technoholix---
                </Link></div>
                
        </div>
    )
  }
}

export default MGallery