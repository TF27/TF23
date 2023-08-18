import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollDirection = lastScrollTop < scrollY ? 'down' : 'up';
        setLastScrollTop(scrollY);
        setScrollDirection(scrollDirection);
    };

    const showMenu = () => {
        setOpenMenu(!openMenu);
    }
    return ( 
        <div className="header">
            <div className={openMenu ? 'hamburger active_burger': 'hamburger'} onClick={showMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <nav className={openMenu ? 'nav_slider active_slide' : 'nav_slider'}>
                <ul>
                    <li onClick={showMenu}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/competitions'>Competitions</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/lectures'>Lectures</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/exhibitions'>Exhibitions</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/workshops'>Workshops</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Header;