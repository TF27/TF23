import React, { useState } from "react";
import styles from "./fintech.module.css";
import ImageOne from "./components/ImageOne";
import bg from "./assets/summit_bg.jpg";
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

  const Border = ({text}) => {
    return (
      <>
        <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}><h1>{text}</h1></div>
          </div>
      </>
    )
  };

  return (
    <div className="yoyohoneysingh" style={bgHaiJi}>
      <div className={styles["accommodation-container"]}>
        <ImageOne />

        <div className={styles.About}>
          <Border text='About' />
          <p>
          The rise of Fintech has forever changed the way companies do
            business. There have never been as many decisions for business
            people from crowdsourcing to mobile payments as there are now. It's
            never been less expensive to set up your business as well as to
            extend it. Fintech has been a boon for the consumer of banking and
            financial services. It has improved customer satisfaction and worked
            on consumers' pain points, providing a digital platform for
            entrepreneurs and investors to digitize financially. The
            International Fintech Summit is the ideal meeting place facilitating
            multi-stakeholder dialogue with power-packed networking
            opportunities among C-Level executives, leading industry experts,
            decision-makers, and policymakers from across the value chain to
            foster collaboration, discuss current challenges, business
            opportunities, develop market strategies, share knowledge and
            identify solutions aimed at shaping the future of Fintech. For
            Students: Lay the foundation for your career through live
            intellectual discussions with speakers through chat and individual
            assessments to add to your expertise. Networking opportunities with
            Fintech leaders. Build your career by interacting with our honorable
            speakers, industry professionals and get a certificate of
            completion. For Professionals: Meet influential people and expand
            your professional network. Get insights about the current state of
            the industry and the future possibilities. Explore opportunities in
            the fintech sector.
          </p>
        </div>
        <div>
          <Border text='Speakers' />
          <Speakers summit="Industry" />
        </div>
        <div>
          <Border text='Agendas' />
          <div className={styles.agendasI}>
            <div className={styles.agendasII}>
              <div className={styles.agendasIII}>What is fintech and why is it important?</div>
              <div className={styles.agendasIII}>What are the different types of fintech?</div>
            </div>
            <div className={styles.agendasII}>
              <div className={styles.agendasIII}>What are the benefits of fintech?</div>
              <div className={styles.agendasIII}>What are the challenges of fintech?</div>
            </div>
            <div className={styles.agendasII}>
              <div className={styles.agendasIII}>What is the future of fintech?</div>
              <div className={styles.agendasIII}>What are the best examples of fintech?</div>
            </div>
            <div className={styles.agendasII}>
              <div className={styles.agendasIII}>What is fintech and why is it important?</div>
            </div>
          </div>
        </div>
        <div>
          <Border text='Contact Us' />
          <div className={styles.contact}>
            <p>Mankirat Chawla</p>
            <div className={styles.email} onClick={() => window.location.href = `mailto:mankirat@techfest.org`}>mankirat@techfest.org</div>
            <div className={styles.phone} onClick={() => window.location.href = `tel:+91 9996437175`}>+91 99964 37175</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fintech;
