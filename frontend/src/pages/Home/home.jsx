import React from 'react';
import bf from './assets/bg.png'
import HomeParallax from './parallax';

const Home = () => {

  const style = {
    paddingBottom: '20px',
    position: 'relative',
    height: '100vh',
    background: `url(${bf})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100vw',
    overflowX: 'hidden',
}

  return (
    <div className='home' style={style}>
      {/* <Carousel />        */}
      <HomeParallax />
    </div>
  );
};

export default Home;
