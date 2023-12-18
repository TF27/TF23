import React from "react";
import styles from "./fintech.module.css";
import ImageOne from "./components/ImageOne";
import bg from "./assets/finbg.jpg";
import Speakers from "./components/speakers";
import { Link } from "react-router-dom";

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
              <a href="https://www.meraevents.com/event/international-fintech-summit?ucode=organizer" target="_blank">Register Now</a>
            </div>
          </div>
        </div>
        <div className={styles.overlay}>
          <div className={styles.About}>
            <Border text="About" />
            <p>
              The rise of Fintech has forever changed the way companies do
              business. There have never been as many decisions for business
              people from crowdsourcing to mobile payments as there are now.
              It's never been less expensive to set up your business as well as
              to extend it. Fintech has been a boon for the consumer of banking
              and financial services. It has improved customer satisfaction and
              worked on consumers' pain points, providing a digital platform for
              entrepreneurs and investors to digitize financially. The
              International Fintech Summit is the ideal meeting place
              facilitating dialogue with power-packed networking opportunities
              among C-Level executives, leading industry experts,
              decision-makers, and policymakers from across the value chain to
              foster collaboration, discuss current challenges, business
              opportunities, develop market strategies, share knowledge and
              identify solutions aimed at shaping the future of Fintech.
            </p>
            <p>
              <b>For Students:</b> Lay the foundation for your career through
              live intellectual discussions with speakers through chat and
              individual assessments to add to your expertise. Networking
              opportunities with Fintech leaders. Build your career by
              interacting with our honorable speakers, industry professionals
              and get a certificate of completion.{" "}
            </p>
            <p>
              <b>For Professionals:</b> Meet influential people and expand your
              professional network. Get insights about the current state of the
              industry and the future possibilities. Explore opportunities in
              the fintech sector.
            </p>
          </div>
          <div>
            <Border text="Speakers" />
            <Speakers summit="Fintech" />
          </div>
          <div>
            <Border text="Agendas" />
            <div className={styles.agendasI}>
              <div className={styles.agendasII}>
                <div className={styles.agendasIII}>
                  What is fintech and why is it important?
                </div>
                <div className={styles.agendasIII}>
                  The Evolution of Fintech: Unveiling its Historical Milestones
                  and Future Trajectory
                </div>
              </div>
              <div className={styles.agendasII}>
                <div className={styles.agendasIII}>
                  Fintech & its influence on society
                </div>
                <div className={styles.agendasIII}>Future of Investments</div>
                <div className={styles.agendasIII}>
                  Inspiring Entrepreneurs: How to build your own Product
                </div>
              </div>
              <div className={styles.agendasII}>
                <div className={styles.agendasIII}>
                  Youth and Fintech Startups
                </div>
                <div className={styles.agendasIII}>
                  Social Impact: Investing for financial Inclusion
                </div>
                <div className={styles.agendasIII}>
                  Financial Development: India v/s The World
                </div>
              </div>
              <div className={styles.agendasII}>
                <div className={styles.agendasIII}>Fintechs and Ethics</div>
                <div className={styles.agendasIII}>
                  Fintech & its influence on society
                </div>
                <div className={styles.agendasIII}>Transformation of India</div>
              </div>
            </div>
          </div>
          <div>
            <Border text="Contact Us" />
            <div className={styles.contact}>
              <p>Atharv Apshinge</p>
              <div
                className={styles.email}
                onClick={() =>
                  (window.location.href = `mailto:atharv@techfest.org`)
                }
              >
                atharv@techfest.org
              </div>
              <div
                className={styles.phone}
                onClick={() => (window.location.href = `tel:+91 9324589830`)}
              >
                +91 93245 89830
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fintech;
