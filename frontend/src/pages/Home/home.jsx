import React from 'react';
import img1 from './assets/bg1.png';
import spimg from './images/sponsor.png'
import './home.css';

const Home = () => {
  return (
    <div>
    <div className="sponsor-container">
      <div className='sponsor-buttondiv'>
        <div className='sponsor-button'>Title Sponsor</div>
      </div>
      <div className='wide-image'>
        <a href='https://www.marshmclennan.com/'>
        <img src={spimg} alt='sponsorimage' style={{ width: '70%',height:'10%' }}  />
        </a>
      </div>
      <div className='sponsor-buttondiv'>
        <div className='sponsor-button'>Theme</div>
      </div>
    </div>
    <div className="sponsor-content">
        <div className="sponsor-image">
          <img src={img1} alt='yowai mo' style={{ width: '100%', height: 'auto' }}/>
        </div>
        <div className="sponsor-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada fermentum libero, ac posuere elit scelerisque eget.
            Nullam dignissim mauris vitae nisi congue, id consectetur ex
            pulvinar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
