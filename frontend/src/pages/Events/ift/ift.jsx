import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../components/Carousel/carousel";
import styles from "./ift.module.css";
import Cards from "./cards";
import Parallax from "./parallax";
import Whatsapplink from '../../../components/whatsapp/link';


import bg from './assets/bg.png';
import ass from './assets/ass.jpeg';
import robert from './assets/Robert.png'
import jao from './assets/Joao.jpg';
import rayan from './assets/rayan1.jpg';
import auv from './assets/auvinet1.jpg';
import i1 from "./assets/circuit.jpg";
import i2 from "./assets/gopro.jpg";
import i3 from "./assets/ift_collage.jpg";
import i4 from "./assets/ift_collage3.jpg";
import i5 from "./assets/professional_presentor.jpg";
import i6 from "./assets/three.jpg";

const IFT = () => {
  const dataPastD = [
    {
      name: "Robert Battle Sanchez",
      img: robert,
      rank: 6,
      desc: "12 time Spanish Nitro Buggy National Champion and unarguably one of the best RC drivers in world",
    },
    {
      name: "João Figueiredo",
      img: jao,
      rank: 17,
      desc: "And current portugese buggy champion",
    },
    {
      name: "Rayan Medjoubi",
      img: rayan,
      rank: 49,
      desc: "Former french champion",
    },
    {
      name: "Patrick jr Auvinet",
      img: auv,
      // rank: 18,
      desc: "Former France champion in 1:6 category",
    },
  ];

  const PastDrivers = ({ data }) => {
    return (
      <>
        <div className={`col-md-3 col-sm-6 col-12 ${styles.PastDC}`}>
          <div
            className={styles.pastCards}
            style={{
              backgroundImage: `url(${data.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={styles.infoS}>
                <h4>{data.name}</h4>
                {data.rank && (<p>
                    World Rank {data.rank}
                    <br/>
                    {data.desc}
                </p>)}
            </div>
          </div>
        </div>
      </>
    );
  };

  const Border = ({ text }) => {
    return (
      <>
        <div className={styles.titSpn_rect1}>
          <div className={styles.titSpn_rect2}>
            <h2>{text}</h2>
          </div>
        </div>
      </>
    );
  };

  const bgstyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    paddingBottom: '30px',
  };

  const walink1 = "https://chat.whatsapp.com/KPIY7EUqnSMIDSvv2kyn0R";
  const dslink1 = "https://chat.whatsapp.com/KPIY7EUqnSMIDSvv2kyn0R";

  return (
    <div style={bgstyles}>
      <Parallax />
      <Border text="About" />
      <div className={styles.about}>
        <div>
          <iframe
            src="https://www.youtube.com/embed/Vu9titeNUGA?si=GBpGJtaH4XNQnfEa"
            title="YouTube video player"
            frameborder="0"
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.aboutT}>
          Started a decade back as full throttle, a national-level RC nitro
          buggy competition has now grown into India's largest RC nitro buggy
          racing event. In 2018 took off to the international level with a grand
          success. Brace yourselves as raging nitro buggies battle to dominate
          the full-throttle circuit in India’s Largest RC nitro buggy racing
          event at IIT Bombay during Techfest.
        </div>
      </div>
      <Border text="Resources" />
      <div className={styles.grouplink} style={{paddingBottom : "3vw"}}>
        <div className={styles.wabutton }><Whatsapplink walink={walink1} dslink = {dslink1} target="_blank"/></div>
      </div>
      <Cards />
      <Border text="Past Drivers" />
      <div className={styles.PastD}>
        <div className="container">
          <div className="row">
            {dataPastD.map((summit, index) => (
              <PastDrivers key={index} data={summit} />
            ))}
          </div>
        </div>
      </div>
      <Border text="In Association With" />
      <div className={styles.ass}>
        <a href="https://mrchobbies.in/" target="_blank"><img src={ass} alt='MRC' /></a>
      </div>
      <Border text="Gallery" />
      <Carousel
        i1={i1}
        i2={i2}
        i3={i3}
        i4={i4}
        i5={i5}
        i6={i6}
      />
      <Border text="Contact Us" />
      <div className={styles.contact}>
            <p>Abhishek Kedare</p>
            <div className={styles.email} onClick={() => window.location.href = `mailto:abhishek@techfest.org`}>abhishek@techfest.org</div>
            <div className={styles.phone} onClick={() => window.location.href = `tel:+91 7558588254`}>+91 75585 88254</div>
          </div>
    </div>
  );
};

export default IFT;
