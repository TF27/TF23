import React from "react";
import { Link } from "react-router-dom";

import bg from "./assets/bg.jpeg";
// import Cards from "./cards";
// import OurReach from "./ourreach";
// import Carousel from "../../../components/Carousel/carousel";
import "./technoholix_animation.css";
import styles from "./technoholix.module.css";
import about from "./assets/about.jpeg";
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
              <p>Scroll Down to Book Passes!!!</p>
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
            Get ready to lose yourself in Technoholix, the electrifying
            culmination of Techfest IIT Bombay, Asia's science and tech
            behemoth. Matisse & Sadko, Tomorrowland's iconic duo, will ignite
            the night with beats that will warp reality and bass that shakes
            galaxies. But Technoholix is more than EDM royalty. Imagine laser
            light shows painting the darkness, UV dreamscapes where you walk on
            air, and pyrotechnic storms sculpting fire from the sky. Witness
            Tron dancers glide on neon circuits, acrobatic feats defy gravity's
            hold, and 3D holograms conjure impossible illusions. This isn't a
            party, it's a tech-infused wonderland where science becomes the
            ultimate entertainer. That's the Technoholix magic. <br/>Pulse to the
            rhythm, surrender to the spectacle, and let technology set your soul
            alight.<br/> Become a participant at Techfest, book your pass
            below.
          </div>
        </div>
        <div className="difPage" style={{marginTop: '10px'}}>
          <div className="check_rect1"></div>
          <div className="check_rect2">
            <a
              href="https://www.meraevents.com/event/accommodation-at-iit-bombay?ucode=organizer"
              target="_blank"
            >
              BOOK TICKETS NOW
            </a>
          </div>
        </div>
        <div className="checkThis">
          {/* <h1 style={{ marginTop: "10px", marginBottom: "40px" }}>
            MORE ARTISTS
          </h1> */}
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
