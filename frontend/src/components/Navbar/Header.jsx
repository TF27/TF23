import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { UserAuth } from "../../contexts/AuthContext";

import tf from "./tflogo.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const [scrollDirection, setScrollDirection] = useState('up');
  // const [lastScrollTop, setLastScrollTop] = useState(0);

  const { googleSignIn, user, logOut } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const username = user?.displayName;
  let name = "";
  if (username != null) {
    name = username.split(" ")[0];
  }

  //==========================================theme================================
  // const location = useLocation().pathname;
  // const locations = location.split('/').filter(segment => segment !== '');
  // const parent = locations[0] // gets parent route from array
  // var navbarClassName //header class variable

  // if(parent==="competitions"){
  //     navbarClassName = "header header_competitions"
  // }
  // else if(parent==="lectures"){
  //     navbarClassName = "header header_lectures"
  // }
  // else if(parent==="gallery"){
  //     navbarClassName = "header header_gallery"
  // }
  // else if(parent==="exhibitions"){
  //     navbarClassName = "header header_exhibtions"
  // }
  // else if(parent==="workshops"){
  //     navbarClassName = "header header_workshops"
  // }
  // else if(parent==="summits"){
  //     navbarClassName = "header header_summits"
  // }
  // else if(parent==="exhibitions"){
  //     navbarClassName = "header header_exhibitions"
  // }
  // else{
  //     navbarClassName = "header"
  // }

  //===============================================================================

  const showMenu = () => {
    setOpenMenu(!openMenu);
  };

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
    // console.log(showNavbar);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className={`navfunc ${showNavbar ? "navfuncshow" : "navfunchide"}`}>
      <nav className="webNav">
        <ul>
          <li>
            <Link to="/competitions">Competitions</Link>
          </li>
          <li>
            <Link to="/summits">Int'l Summit</Link>
          </li>
          <li>
            <Link to="/lectures">Lectures</Link>
          </li>
        </ul>
        <ul className="logoDiv">
          <li>
            <Link to="/">
              <img src={tf} alt="Techfest" />
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/exhibitions">Exhibitions</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            {user?.displayName ? (
              <div onClick={handleSignOut} className="singin">
                <div className="logout_rect1">
                  <div
                    className="logout_rect2"
                    onMouseEnter={(e) => (e.target.innerText = "Sign Out")}
                    onMouseLeave={(e) => (e.target.innerText = name)}
                  >
                    Logout
                  </div>
                </div>
              </div>
            ) : (
              <div onClick={handleGoogleSignIn} className="singin">
                <div className="logout_rect1">
                  <div className="logout_rect2">Sign in</div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div className="navbarClassName">
        <div className={openMenu ? "hamburger active_burger" : "hamburger"}>
          <div className="headLogo">
            <Link to="/">
              <img src={tf} alt="Techfest" />
            </Link>
          </div>
          <div onClick={showMenu} className="headHam">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <nav className={openMenu ? "nav_slider active_slide" : "nav_slider"}>
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
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
                    </li>
                    <li onClick={showMenu}>
                        <Link to='/summits'>Summits</Link>
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
    </div>
  );
};

export default Header;
