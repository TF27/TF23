import React,{useState,useEffect} from 'react';
import './loading.css';

const Loading = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isvisible, setIsvisible] = useState(false);

    const toggleAnimation = () => {
      setIsAnimating(true);
    };

    useEffect(() => {
        // You can set a delay before starting the animation if needed
        const delay = 1000; // 1000 milliseconds (1 second)
        
        const timeoutId = setTimeout(() => {
          setIsAnimating(true);
        }, delay);
    
        // Clear the timeout to prevent the animation from starting if the component unmounts
        return () => clearTimeout(timeoutId);
      }, []); // The emp

      useEffect(() => {
        // You can set a delay before starting the animation if needed
        const delay1 = 3500; // 1000 milliseconds (1 second)
        
        const timeoutId = setTimeout(() => {
          setIsvisible(true);
        }, delay1);
    
        // Clear the timeout to prevent the animation from starting if the component unmounts
        return () => clearTimeout(timeoutId);
      }, []); 
  
    return (

        <div className={`gif ${isvisible ? 'show' : ''}`}>
                <div className={`image ${isAnimating ? 'scale' : ''}`} onClick={toggleAnimation}>
        </div>
    </div>
    );
}

export default Loading
