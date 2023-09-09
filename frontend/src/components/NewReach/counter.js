import React, { useState, useEffect } from 'react';

function Counter({ targetValue, duration, scrollVal, plus }) {
  const [counter, setCounter] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTimestamp;
    const updateCounter = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const newValue = Math.round(progress * targetValue);
      setCounter(newValue);
      if (progress < 1) requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);

    return () => {
      // Cleanup function
      startTimestamp = null;
    };
  }, [targetValue, duration, shouldAnimate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollVal) {
        
        setShouldAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p>{counter}{plus}</p>
    </div>
  );
}

export default Counter;
