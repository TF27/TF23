import React, {useState, useEffect} from 'react';
import History from "./history";
import MHistory from './m-history';

const HISTORY = () => {
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
                isMobile ? <MHistory/> : <History />
            }
        </div>
     );
}
 
export default HISTORY;