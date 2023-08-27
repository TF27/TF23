import React, {useState, useEffect} from 'react';
import Internal from "./internal";
import MInternal from './m-internal';

const CompiInternal = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return ( 
        <div>
            {
                isMobile ? <MInternal/> : <Internal />
            }
        </div>
     );
}
 
export default CompiInternal;