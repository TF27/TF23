import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Header.css';
<<<<<<< HEAD
import { UserAuth } from "../../contexts/AuthContext";
=======
import Headroom from 'react-headroom';
>>>>>>> db5b767eb19083827a4cd6f3cb7d6c70b609cb7e

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    // const [scrollDirection, setScrollDirection] = useState('up');
    // const [lastScrollTop, setLastScrollTop] = useState(0);

<<<<<<< HEAD
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
=======
    // const handleScroll = () => {
    //     const scrollY = window.scrollY;
    //     const scrollDirection = lastScrollTop < scrollY ? 'down' : 'up';
    //     setLastScrollTop(scrollY);
    //     setScrollDirection(scrollDirection);
    // };
>>>>>>> db5b767eb19083827a4cd6f3cb7d6c70b609cb7e

    // Code Added for Navbar Scroll Up
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [lastScrollTop]);

    // Continued Old Code
    const showMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <Headroom>

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
        </Headroom>
     );
}
 
export default Header;