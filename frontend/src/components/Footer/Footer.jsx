import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// imgs
import fb from "./social media/fb.png";
import insta from "./social media/insta.png";
import linkedin from "./social media/linkedin.png";
import pinterest from "./social media/pinterest.png";
import x from "./social media/x.png";
import yt from "./social media/yt.png";
import bg from "./footimg.svg";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

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
    <div>
      <div
        className={`footfunc footWeb ${
          showNavbar ? "footfuncshow" : "footfunchide"
        }`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="footLinkO footLink">
          {/* <div className="footMulti">
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </div>
            <li>
              <Link to="/recognition">Recognition</Link>
            </li>
          <div className="footMulti">
            <li>
              <Link to="/aboutus/media">Media</Link>
            </li>
            <li>
              <Link to="/legals">Legals</Link>
            </li>
          </div> */}
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/sponsors">Sponsors</Link>
          </li>
          <li onMouseLeave={() => setShowEvents(false)}>
            <Link onMouseEnter={() => setShowEvents(true)}>About Us</Link>

            <div
              className={`about ${showEvents ? "aboutyo" : "aboutno"}`}
              onMouseEnter={() => setShowEvents(true)}
              onMouseLeave={() => setShowEvents(false)}
            >
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/aboutus/media">Media</Link>
              </li>
              <li>
                <Link to="/legals">Legals</Link>
              </li>
              <li>
                <Link to="/recognition">Recognition</Link>
              </li>
            </div>
          </li>
        </div>
        <div className="anounceIt">
          <Link to="/workshops">Workshops are Live Now!</Link>
          <br />
          <Link to="/accommodation">Stay at IIT Bombay</Link>
          <br />
          <a href="https://www.instagram.com/techfest_iitbombay/">
            Join us @ EDM Concert
          </a>
        </div>
        <div className="socialMedia">
          <li>
            <a
              href="https://www.instagram.com/techfest_iitbombay/?hl=en"
              target="_blank"
            >
              <img src={insta} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/iitbombaytechfest/"
              target="_blank"
            >
              <img src={fb} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Techfest_IITB" target="_blank">
              <img src={x} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/techfestiitbombay"
              target="_blank"
            >
              <img src={yt} />
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/company/techfest" target="_blank">
              <img src={linkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://in.pinterest.com/techfestiitbombay/"
              target="_blank"
            >
              <img src={pinterest} />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
