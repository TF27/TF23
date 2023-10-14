import React from "react";
import { Link } from "react-router-dom";

import bg from "./img/bg.png";
import Cards from "./cards";
import OurReach from "./ourreach";
import Carousel from "../../components/Carousel/carousel";
import "./robowars_animation.css";
import styles from "./robowars.module.css";

import irc1 from './img/irc.png';
import irc2 from './img/irc1.png';

import i1 from "../../pages/Exhibition/assets/i1.jpg";
import i2 from "../../pages/Exhibition/assets/i2.jpg";
import i3 from "../../pages/Exhibition/assets/i3.png";
import i4 from "../../pages/Exhibition/assets/i4.jpg";
import i5 from "../../pages/Exhibition/assets/i5.jpg";
import i6 from "../../pages/Exhibition/assets/i6.jpg";
import i7 from "../../pages/Exhibition/assets/i7.jpg";
import i8 from "../../pages/Exhibition/assets/i8.jpg";
import i9 from "../../pages/Exhibition/assets/i9.jpg";
import i10 from "../../pages/Exhibition/assets/i10.jpg";

import im1 from "../Lectures/assets/l1.jpg";
import im2 from "../Lectures/assets/l2.jpg";
import im3 from "../Lectures/assets/l3.jpg";
import im4 from "../Lectures/assets/l4.jpg";
import im5 from "../Lectures/assets/l5.jpg";
import im6 from "../Lectures/assets/l6.JPG";
import im7 from "../Lectures/assets/l7.jpg";
import im8 from "../Lectures/assets/l8.jpg";
import im9 from "../Lectures/assets/l9.jpg";
import im10 from "../Lectures/assets/l10.jpg";
import ImageOne from "./components/ImageOne";

const Robowars = () => {
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
      <ImageOne />
      <div className={`${styles.titSpn} ${styles.homeTheme}`}>
        <div className={styles.titSpn_rect1}>
          <div className={styles.titSpn_rect2}>About</div>
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
          Techfest presents the International Robowars! India’s Largest Robot
          Combat Competition where participants from around the globe battle
          each other for the coveted Robowars Champion Title. Witness sparks fly
          as metal crushes metal in the most glorious battles interspersed with
          magnificent artist performances for non-stop entertainment.
        </div>
      </div>
      <div className={`${styles.titSpn} ${styles.homeTheme}`}>
        <div className={styles.titSpn_rect1}>
          <div className={styles.titSpn_rect2}>Resources</div>
        </div>
      </div>
      <Cards />
      <OurReach />
      <div className="contactus1">
          <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>
            INT'L ZONAL PARTNER
          </h1>
          <div className="pkmkb">
            <img src={irc1} style={{width: '210px', height: '250px', top: '-50px', position: 'relative'}}/>
            <img src={irc2} />
          </div>
        </div>
      <div className="checkThis">
        <h1 style={{ marginTop: "10px", marginBottom: "40px" }}>
          CHECK THIS OUT
        </h1>
        <div>
          <h2 style={{ marginBottom: "0px" }}>Exhibition</h2>
          <Carousel
            i1={i1}
            i2={i2}
            i3={i3}
            i4={i4}
            i5={i5}
            i8={i8}
            i6={i6}
            i7={i7}
            i9={i9}
            i10={i10}
          />
          <div className="difPage">
            <div className="check_rect1"></div>
            <div className="check_rect2">
              <Link to="/exhibitions">Explore</Link>
            </div>
          </div>
          <br />
        </div>
        <div style={{ marginTop: "40px", marginBottom: "0px" }}>
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
        </div>
        <div className="contactus">
          <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>
            CONTACT US
          </h1>

          <div className="Contactbox">
            <div className="Contactbox1">
              Arnav Patel<br></br>
              arnav@techfest.org<br></br>
              <div onClick={() => (window.location.href = `tel:${9372634701}`)}>
                {9372634701}
              </div>
            </div>
            <div className="Contactbox1">
              Manas Dadhich<br></br>
              manas@techfest.org<br></br>
              {/* <div onClick={() => window.location.href = `mailto:manas@techfest.org`}>{manas@techfest.org}</div><br></br> */}
              <div onClick={() => (window.location.href = `tel:${9981378767}`)}>
                {9981378767}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robowars;
