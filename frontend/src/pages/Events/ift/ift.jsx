import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../components/Carousel/carousel";
import styles from "./ift.module.css";
import Cards from "./cards";
import Parallax from "./parallax";

import fin from "./assets/Back.jpg";

const IFT = () => {
  const dataPastD = [
    {
      name: "Fintech Summit",
      img: fin,
      rank: 18,
      desc: "I am the god of the multiverse, infinity ultron is my bitch",
    },
    {
      name: "Industry 4.0",
      img: fin,
      rank: 18,
      desc: "I am the god of the multiverse, infinity ultron is my bitch",
    },
    {
      name: "Fintech Summit",
      img: fin,
      rank: 18,
      desc: "I am the god of the multiverse, infinity ultron is my bitch",
    },
    {
      name: "Industry 4.0",
      img: fin,
      rank: 18,
      desc: "I am the god of the multiverse, infinity ultron is my bitch",
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
                <p>
                    World Rank {data.rank}
                    <br/>
                    {data.desc}
                </p>
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

  return (
    <div>
      <Parallax />
      <Border text="About" />
      <div className={styles.about}>
        <div>
          <iframe
            src="https://www.youtube.com/embed/0_FBwJi8VBo?si=yaNM1nKy7nydA1XU"
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
      <Border text="Gallery" />
      <Carousel
        i1={fin}
        i2={fin}
        i3={fin}
        i4={fin}
        i5={fin}
        i6={fin}
        i7={fin}
        i8={fin}
        i9={fin}
        i10={fin}
      />
      <Border text="Contact Us" />
      <div className={styles.contact}>
            <p>Abhishek Kedare</p>
            <div className={styles.email} onClick={() => window.location.href = `mailto:atharv@techfest.org`}>atharv@techfest.org</div>
            <div className={styles.phone} onClick={() => window.location.href = `tel:+91 9324589830`}>+91 93245 89830</div>
          </div>
    </div>
  );
};

export default IFT;