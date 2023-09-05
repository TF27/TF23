import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Footer.css';

// imgs 
import fb from './social media/fb.png';
import insta from './social media/insta.png';
import linkedin from './social media/linkedin.png';
import pinterest from './social media/pinterest.png';
import x from './social media/x.png';
import yt from './social media/yt.png';

const Footer = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const showMenu = () => {
        setOpenMenu(!openMenu);
    }

    const [showNavbar, setShowNavbar] = useState(true);
    const [prevScrollY, setPrevScrollY] = useState(0);
    
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
    
        if (currentScrollY > prevScrollY) {
          // Scrolling down, hide the navbar
          setShowNavbar(false);
        } else {
          // Scrolling up, show the navbar
          setShowNavbar(true);
        }
    
        // Update the previous scroll position
        setPrevScrollY(currentScrollY);
        console.log(showNavbar);
      };
    
      useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollY]);

    return (
        <div  className={`footfunc ${showNavbar ? 'footfuncshow' : 'footfunchide'}`}>
            <div className="footWeb">
                <ul clasName='footLink'>
                    <li>
                        <Link to='/history'>History</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/recognition'>Recognition</Link>
                    </li>
                    <li>
                        <Link to='/aboutus/media'>Media</Link>
                    </li>
                    <li>
                        <Link to='/legals'>Legals</Link>
                    </li>
                </ul>
                <ul className='socialMedia'>
                    <li>
                        <a href='https://www.instagram.com/techfest_iitbombay/?hl=en'><img src={insta} /></a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/iitbombaytechfest/'><img src={fb} /></a>
                    </li>
                    <li>
                        <a href='https://twitter.com/Techfest_IITB'><img src={x} /></a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/user/techfestiitbombay'><img src={yt} /></a>
                    </li>
                    <li>
                        <a href='https://in.linkedin.com/company/techfest'><img src={linkedin} /></a>
                    </li>
                    <li>
                        <a href='https://in.pinterest.com/techfestiitbombay/'><img src={pinterest} /></a>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;