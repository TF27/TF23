import React, {useState, useEffect} from 'react';
import Accommodation from "./accommodation";
import MAccommodation from './m-accommodation';

const AccommodationInternal = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      // console.log(window.innerWidth)
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return ( 
        <div>
            {
                isMobile ? <MAccommodation/> : <Accommodation/>
            }
        </div>
     );
}
 
export default AccommodationInternal;