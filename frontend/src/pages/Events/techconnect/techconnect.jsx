import React from "react";
import { Link } from "react-router-dom";

import bg from "./assets/techconnect bg.png";
// import Cards from "./cards";
// import OurReach from "./ourreach";
import Carousel from "../../../components/Carousel/carousel";
import "./techconnect_animation.css";
import styles from "./techconnect.module.css";

// import irc1 from './img/irc.png';
// import irc2 from './img/irc1.png';
// import irc3 from './img/logobotmakers.png';

import i1 from "./assets/i1.jpg";
import i2 from "./assets/i2.jpg";
import i3 from "./assets/i3.jpg";
import i4 from "./assets/i4.jpg";
import i5 from "./assets/i5.jpg";
import i6 from "./assets/i6.jpg";


// import im1 from "../Lectures/assets/l1.jpg";
// import im2 from "../Lectures/assets/l2.jpg";
// import im3 from "../Lectures/assets/l3.jpg";
// import im4 from "../Lectures/assets/l4.jpg";
// import im5 from "../Lectures/assets/l5.jpg";
// import im6 from "../Lectures/assets/l6.JPG";
// import im7 from "../Lectures/assets/l7.jpg";
// import im8 from "../Lectures/assets/l8.jpg";
// import im9 from "../Lectures/assets/l9.jpg";
// import im10 from "../Lectures/assets/l10.jpg";
// import ImageOne from "./components/ImageOne";

const Techconnect = () => {
  const bgHaiJi = {
    backgroundImage: `url(${bg})`, // Initial background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100vw",
    position: "absolute",
    top: "0",
    zIndex: "-1",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="competitions" style={bgHaiJi}>
      {/* <ImageOne /> */}
      <div className={`${styles.titSpn} ${styles.homeTheme}`}>
        <div className={styles.titSpn_rect1}>
          <div className={styles.titSpn_rect2}>About Us</div>
        </div>
      </div>
      <div className={`row ${styles.themeData}`}>
        <div className="col-12 col-lg-4">
          <div className={styles.themeImg}>
            <iframe
              src="https://www.youtube.com/embed/0_FBwJi8VBo?si=yaNM1nKy7nydA1XU"
              title="YouTube video player"
              frameborder="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={`col-12 col-lg-8 ${styles.themeText}`}>
        Techfest and IRCC, IIT Bombay host TechConnect to showcase the R&Dactivities, fundamental research, andtechnologies developed at IIT Bombay.
        </div>
      </div>
      {/* <div className={`${styles.titSpn} ${styles.homeTheme}`}>
        <div className={styles.titSpn_rect1}>
          <div className={styles.titSpn_rect2}>Resources</div>
        </div>
      </div> */}
      {/* <Cards />
      <OurReach />
      <div className="contactus1">
          <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>
            SUPPORTED BY
          </h1>
          <div className="pkmkb">
            
            <img src={irc3} style={{width: '300px'}}/>
          </div>
        </div>
      <div className="contactus1">
          <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>
            INT'L ZONAL PARTNER
          </h1>
          <div className="pkmkb">
            <img src={irc1} style={{width: '210px', height: '250px', top: '-50px', position: 'relative'}}/>
            <img src={irc2} />
          </div>
        </div> */}
      <div className="checkThis">
        <h1 style={{ marginTop: "10px", marginBottom: "40px" }}>
          CHECK THIS OUT
        </h1>
        <div>
          <h2 style={{ marginBottom: "0px" }}>TechConnect</h2>
          <Carousel
            i1={i1}
            i2={i2}
            i3={i3}
            i4={i4}
            i5={i5}
            i6={i6}
            
          />
          <div className="difPage">
            <div className="check_rect1"></div>
            <div className="check_rect2">
              <Link to="/exhibitions">Explore</Link>
            </div>
          </div>
          <br />
        </div>
        {/* <div style={{ marginTop: "40px", marginBottom: "0px" }}>
          <h2 className="gap">Lectures</h2>
          <Carousel
            i1={im1}
            i2={im2}
            i3={im3}
            i4={im4}
            i5={im5}
            i8={im8}
            i6={im6}
            i7={im7}
            i9={im9}
            i10={im10}
          />
          <div className="difPage">
            <div className="check_rect1"></div>
            <div className="check_rect2">
              <Link to="/lectures">Explore</Link>
            </div>
          </div>
        </div> */}
        <div className="contactus">
          <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>
            CONTACT US
          </h1>

          <div className="Contactbox">
            <div className="Contactbox1">
              Gourish Singhal<br></br>
              gourish@techfest.org<br></br>
              <div onClick={() => (window.location.href = `tel:${9424873725}`)}>
                {9424873725}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techconnect;
