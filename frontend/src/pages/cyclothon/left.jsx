import React, { useEffect } from 'react';
import './ImageOpeningAnimation.css'; // Import your CSS file

function ImageOpeningAnimation({ scrollVal }) {
  useEffect(() => {
    const image = document.querySelector('.opening-image');

    const handleScroll = () => {
      if (image) {
        const triggerPoint = scrollVal; // Set the scroll position where you want the animation to start
        const scrollY = window.scrollY;

        if (scrollY >= triggerPoint) {
          image.classList.add('open');
        } else {
          image.classList.remove('open');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollVal]);

  return (
    <div className="image-container">
      <img
        src="your-image.jpg" // Replace with your image URL
        alt="Opening Image"
        className="opening-image"
      />
    </div>
  );
}

export default ImageOpeningAnimation;
