import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Header.css';
import { UserAuth } from "../../contexts/AuthContext";

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const { googleSignIn, user, logOut } = UserAuth();
    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try{
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    const username = user?.displayName;
    let name = '';
    if (username != null) {
      name = username.split(' ')[0];
    }
  

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
                    <li>
                        {user?.displayName ? (
                            <div>
                                <button onClick={handleSignOut} className="item1" onMouseEnter={(e)=> e.target.innerText = "Sign Out"} onMouseLeave={(e)=> e.target.innerText = name}>
                                Logout
                                </button>
                                
                            </div>
                            ) : (
                            <button onClick={handleGoogleSignIn} className="item2">
                                Sign In
                            </button>
                            )}
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Header;