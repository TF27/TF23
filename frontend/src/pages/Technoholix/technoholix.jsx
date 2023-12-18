import React from "react";
import { Link } from "react-router-dom";

import bg from "./assets/bg.png";
// import Cards from "./cards";
// import OurReach from "./ourreach";
// import Carousel from "../../../components/Carousel/carousel";
import "./technoholix_animation.css";
import styles from "./technoholix.module.css";
import about from "./assets/bg.png";
import Speakers from "./components/speakers";

const Technoholix = () => {
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
      <div className={styles.overlay}>
        <div className={styles.topImg}>
          <img src={bg} alt="TechConnect" />
          <div className={styles.topImgOverlay}>
            <div className={styles.topText}>
              <h1>TECHNOHOLIX</h1>
              <p>EVERYBODY JUMP JUMP!!!</p>
            </div>
          </div>
        </div>
        <div className={`${styles.titSpn} ${styles.homeTheme}`}>
          <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}>About Us</div>
          </div>
        </div>
        <div className={`row ${styles.themeData}`}>
          <div className="col-12 col-lg-4">
            <div className={styles.themeImg}>
              {/* <iframe
              src="https://www.youtube.com/embed/0_FBwJi8VBo?si=yaNM1nKy7nydA1XU"
              title="YouTube video player"
              frameborder="0"
              loading="lazy"
            ></iframe> */}
              <img src={about} alt="about" />
            </div>
          </div>
          <div className={`col-12 col-lg-8 ${styles.themeText}`}>
            TechConnect, a collaborative initiative by Techfest and IRCC at IIT
            Bombay, is your gateway to the forefront of innovation. Our event
            unveils the institute's groundbreaking research, fundamental
            studies, and technological achievements. With 500 dedicated
            volunteers, TechConnect seamlessly bridges the gap between academia
            and industry, offering a glimpse into the transformative
            advancements emerging from the heart of IIT Bombay.
          </div>
          
        </div>
        <div className="difPage">
            <div className="check_rect1"></div>
            <div className="check_rect2">
            <a href="https://www.meraevents.com/event/accommodation-at-iit-bombay-during-techfest-2023-24?ucode=organizer">BOOK TICKETS NOW</a>
            </div>
          </div>
        <div className="checkThis">
          <h1 style={{ marginTop: "10px", marginBottom: "40px" }}>
            MORE ARTISTS
          </h1>
          <Speakers />
          
          <div className="contactus">
            <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>
              CONTACT US
            </h1>

            <div className="Contactbox">
              <div className="Contactbox1">
                Jainam Shah<br></br>
                jainam@techfest.org<br></br>
                <div
                  onClick={() => (window.location.href = `tel:${8369504031}`)}
                >
                  {8369504031}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technoholix;