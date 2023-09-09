import React from "react";
import { Link } from "react-router-dom";
import HomeParallax from "./parallax";
import styles from "./home.module.css";

// import images
import bf from "./images/homebg.png";
import spimg from "./images/sponsor.png";
import lec1 from "./assets/explore/Lec1.jpg";
import lec2 from "./assets/explore/Lec2.jpg";
import lec3 from "./assets/explore/Lec3.jpg";
import lec4 from "./assets/explore/Lec4.jpg";
import exh1 from "./assets/explore/Exh1.jpg";
import exh2 from "./assets/explore/Exh2.jpg";
import exh3 from "./assets/explore/Exh3.jpeg";
import exh4 from "./assets/explore/Exh4.jpg";

const dataLectures = [
  {
    image: lec1,
    name: "Late Dr. APJ Abdul Kalam",
  },
  {
    image: lec2,
    name: "His Holiness the 14th Dalai Lama (Nobel Laureate, Peace)",
  },
  {
    image: lec3,
    name: "NR Narayana Murty ( Co-Founder of Infosys)",
  },
  {
    image: lec4,
    name: "Zaheer Khan (Former Indian Cricketer)",
  },
];
const dataExhibitions = [
  {
    image: exh1,
    name: "Sophia (Hong Kong)",
  },
  {
    image: exh2,
    name: "Gravity Industries (UK)",
  },
  {
    image: exh3,
    name: "Virgin Hyperloop (USA)",
  },
  {
    image: exh4,
    name: "AirCar (Turkey)",
  },
];

const Explore = ({ Heading, data, link }) => {
  return (
    <div className={styles.homeExplore}>
      <div className={`${styles.titSpn} ${styles.homeTheme}`}>
        <div className={styles.titSpn_rect1}>
          <div className={styles.titSpn_rect2}>{Heading}</div>
        </div>
      </div>
      <div className={`row ${styles.cards}`}>
        {data.map((item, index) => {
          return (
            <div className="col-lg-3 col-sm-6 col-12" key={index}>
              <div className={styles.card}>
                <div className={styles.card_rect1}>
                  <div className={styles.card_rect2}>
                    <img src={item.image} alt={item.name} />
                    <div className={styles.cardText}>{item.name}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.exp}>
        <div className={styles.exp_rect1}>
          <div className={styles.exp_rect2}>
            <Link to={`/${link}`}>Explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const style = {
    paddingBottom: "20px",
    position: "relative",
    // height: "100vh",
    background: `url(${bf})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100vw",
    overflowX: "hidden",

  };

  return (
    <div className="home" style={style}>
      <HomeParallax />
      <div style={{ maxWidth: "90%", margin: "auto" }}>
        <div className={styles.titSpn}>
          <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}>Title Sponsor</div>
          </div>
          <div className={styles.spnImg}>
            <a href="https://www.marshmclennan.com/">
              <img src={spimg} alt="sponsorimage" className={styles.mmcImg} />
              <p>Marsh McLennan Global Services India Pvt Ltd</p>
            </a>
          </div>
        </div>
        <div className={`${styles.titSpn} ${styles.homeTheme}`}>
          <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}>Word From Team</div>
          </div>
        </div>
        <div className={`row ${styles.themeData}`}>
          <div className="col-12 col-lg-4">
            <div className={styles.themeImg}>
              <img src={bf} alt="A Mystecal Realm" />
            </div>
          </div>
          <div className={`col-12 col-lg-8 ${styles.themeText}`}>
          Welcome to the Official Website of the 27th Edition of Asia's Largest Science and Technology Festival, Techfest 2023-2024! We at Techfest are students of IIT Bombay, who have been engaged over the past few months to structure Techfest's 27th edition. With the plethora of events planned this year, we are sure you will have an experience of a lifetime - something that you will never forget; a journey that will lift your spirits. And the starting point is this website! Here, you will find complete information about Techfest 2023-24, so make sure you explore all the pathways available to you. Are you ready to unlock a mystical realm?
            {/*<br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            libero non quidem qui possimus itaque ex molestias doloremque,
            molestiae nobis excepturi cumque delectus aliquid minus maiores enim
            debitis numquam fugit? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Porro nihil expedita reprehenderit voluptas atque
            ipsum assumenda, unde saepe. Sequi iste facilis eius dolorem vel ad
            modi aspernatur accusantium fuga sapiente. */}
          </div>
        </div>
        <div className={`${styles.titSpn} ${styles.homeTheme}`}>
          <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}>Theme</div>
          </div>
        </div>
        <div className={`row ${styles.themeData}`}>
          <div className="col-12 col-lg-4">
            <div className={styles.themeImg}>
            <iframe src="https://www.youtube.com/embed/_PJYQDTJQ0E?si=WXO2IsZ9l8fYtcON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
          <div className={`col-12 col-lg-8 ${styles.themeText}`}>
            Teleport to the 27th Edition of Techfest and celebtrate the interplay between Magic, Science & Technology. Step into the realm of wonders where the frontiers of imagination are translated into real-world possibilities. From ancient mysticism to cutting-edge innovations, explore the endless spectrum of creativity and ingenuity. Get ready for a Techno-Mystical extravaganza and embark on a miraculous journey of discovery into the unknown! <br />
            {/*<br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            libero non quidem qui possimus itaque ex molestias doloremque,
            molestiae nobis excepturi cumque delectus aliquid minus maiores enim
            debitis numquam fugit? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Porro nihil expedita reprehenderit voluptas atque
            ipsum assumenda, unde saepe. Sequi iste facilis eius dolorem vel ad
            modi aspernatur accusantium fuga sapiente. */}
          </div>
        </div>
      </div>
      <Explore Heading="Past Lectures" data={dataLectures} link="lectures" />
      <Explore
        Heading="Past Exhibitions"
        data={dataExhibitions}
        link="exhibitions"
      />
      <div className={styles.endMargin}></div>
    </div>
  );
};

export default Home;
