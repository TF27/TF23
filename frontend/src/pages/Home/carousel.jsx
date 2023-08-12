import React, { useState } from 'react';
import './Carousel.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import img1 from './images/img1.png'
import img2 from './images/img2.png'

// const images = [image1, image2, image3, image4];
const images = [img1,img2];

const CarouselItem = ({ imageUrl, isVisible }) => (
  <div className={`carousel-item ${isVisible ? 'visible' : ''}`}>
    <div
      className="carousel-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="carousel-container" onClick={handleImageClick}>
      <div className="ripple-container">
        <div className="ripple"></div>
      </div>
      {images.map((imageUrl, index) => (
        <CarouselItem
          key={index}
          imageUrl={imageUrl}
          isVisible={index === currentIndex}
        />
      ))}
    </section>
  );
};

export default Carousel;
