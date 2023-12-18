import React from "react";
// import { Link } from "react-router-dom";
import styles from "./fintech.module.css";
import ImageOne from "./components/ImageTwo";
import bg from "./assets/indbg.jpg";
import Speakers from "./components/speakers";

const Fintech = () => {
  const bgHaiJi = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100vw",
    position: "absolute",
    top: "0",
    zIndex: "-1",
    backgroundAttachment: "fixed",
    // Add a pseudo-element to create an overlay
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 1)", // Adjust the color and transparency here
    },
  };

  const Border = ({ text }) => {
    return (
      <>
        <div className={styles.titSpn_rect1}>
          <div className={styles.titSpn_rect2}>
            <h1>{text}</h1>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="yoyohoneysingh" style={bgHaiJi}>
      <div className={styles["accommodation-container"]}>
        <ImageOne />
        <div className={styles.ex}>
          <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}>
            <a href="https://www.meraevents.com/event/industry-summit-4-0?ucode=organizer" target="_blank">Register Now</a>
            </div>
          </div>
        </div>
        <div className={styles.overlay}>
          <div className={styles.About}>
            <Border text="About" />
            <p>
            Now is the time for digitalization. With scarce resources in our hands, rapid changes in customers and producers' behavior, a comfort-loving generation; E-Commerce is the best option socially, politically, and economically. E-Commerce is booming, even faster than Zomato's posts on their social media handles. And this growth is very promising.

The International Industry Summit aims at discussing the trends that are bringing this change and changing the consumer’s perspective to this new way of shopping. The summit will provide you with a complete outlook on the growth and potential of D2C, B2C, brand marketing, etc.

For Students:

Build your career by interacting with our honorable speakers, industry professionals and get a certificate of completion.
Connect with CxO’s, innovators, investors, industry professionals, and entrepreneurs and get inspired by their brand-making stories.
For Professionals:

Learn about the loopholes a company faces, and prepare yourself for upcoming challenges while also growing your industry network
Discover the trends that will reshape the E-commerce landscape: ML & AI chatbots, ultra personalization, customer experience.
            </p>
          </div>
          <div>
            <Border text="Speakers" />
            <Speakers summit="Industry" />
          </div>
          <div>
            <Border text="Agendas" />
            <div className={styles.agendasI}>
              <div className={styles.agendasII}>
                <div className={styles.agendasIII}>
               Trends and application of AI in Industry
                </div>
                <div className={styles.agendasIII}>
                Web 3.0: Role of the semantic web in industry
                </div>
              </div>
              <div className={styles.agendasII}>
                <div className={styles.agendasIII}>
                Ethical implications and Industry 5.0
                </div>
                <div className={styles.agendasIII}>
                  Leveraging IOT Technology to build a sustainable future
                </div>
              </div>
              <div className={styles.agendasII}>
                <div className={styles.agendasIII}>
                  Digital Transformation and Automation with 5G and IOT
                </div>
                <div className={styles.agendasIII}>
                  Charting a Sustainable Path: Strategies & Steps for a Green Industry
                </div>
              </div>
              <div className={styles.agendasII}>
                <div className={styles.agendasIII}>
                Brand specific success stories
                </div>
              </div>
            </div>
          </div>
          <div>
            <Border text="Contact Us" />
            <div className={styles.contact}>
              <p>Mankirat Chawla</p>
              <div
                className={styles.email}
                onClick={() =>
                  (window.location.href = `mailto:mankirat@techfest.org`)
                }
              >
                mankirat@techfest.org
              </div>
              <div
                className={styles.phone}
                onClick={() => (window.location.href = `tel:+91 9996437175`)}
              >
                +91 99964 37175
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fintech;
