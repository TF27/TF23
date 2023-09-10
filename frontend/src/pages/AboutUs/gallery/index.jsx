import React, {useState, useEffect} from 'react';
import WGallery from "./gallery";
import MGallery from "./m-gallery";

const Gallery = () => { 
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 550);
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
                isMobile ? <MGallery/> : <WGallery />
            }
        </div>
     );
}
 
export default Gallery;