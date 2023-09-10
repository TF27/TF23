import React from "react";
import { Link } from "react-router-dom";
import HomeParallax from "./parallax";
import styles from "./home.module.css";

// import images
import spimg from "./images/sponsor.png";
import lec1 from "./assets/explore/Lec1.jpg";
import lec2 from "./assets/explore/Lec2.jpg";
import lec3 from "./assets/explore/Lec3.jpg";
import lec4 from "./assets/explore/Lec4.jpg";
import exh1 from "./assets/explore/Exh1.jpg";
import exh2 from "./assets/explore/Exh2.jpg";
import exh3 from "./assets/explore/Exh3.jpeg";
import exh4 from "./assets/explore/Exh4.jpg";
import comp1 from "./assets/explore/Compi1.jpeg";
import comp2 from "./assets/explore/Compi2.jpeg";
import comp3 from "./assets/explore/Compi3.jpg";
import comp4 from "./assets/explore/Compi4.jpg";
import ogimg from "./images/techfestiitb.png";

// import MetaTags from 'react-meta-tags';

// class Component1 extends React.Component {
//   render() {
//     return (
//         <div class="wrapper">
//           <MetaTags>
//             <title>Page 1</title>
//             <meta id="meta-description" name="description" content="Tecfest, IIT Bombay" />
//             <meta id="og-title" property="og:title" content="Homepage" />
//             <meta id="og-image" property="og:image" content="images/techfestiitb.png" />
//           </MetaTags>
//           <div class="content"> Techfest is Asia's Largest Science and Technology Festival </div>
//         </div>
//       )
//   }
// }

const dataCompetitions = [
  {
    perLink: 'cozmoclench',
    image: comp1,
    name: "Cozmoclench",
    posi: "( INR 1,00,000 )",
  },
  {
    perLink: 'meshmerize',
    image: comp2,
    name: "Meshmerize",
    posi: "( INR 1,00,000 )",
  },
  {
    perLink: 'techfest olympiad',
    image: comp3,
    name: "Techfest Olympiad",
    posi: "( INR 40,000 )",
  },
  {
    perLink: 'codecode',
    image: comp4,
    name: "CoDecode",
    posi: "( INR 40,000 )",
  },
];
const dataLectures = [
  {
    image: lec1,
    name: "Late Dr. APJ Abdul Kalam",
    posi: "(Former President)",
  },
  {
    image: lec2,
    name: "The 14th Dalai Lama",
    posi: "(Nobel Laureate, Peace)",
  },
  {
    image: lec3,
    name: "N R Narayana Murty",
    posi: "( Co-Founder of Infosys)",
  },
  {
    image: lec4,
    name: "Zaheer Khan",
    posi: "(Former Indian Cricketer)",
  },
];
const dataExhibitions = [
  {
    image: exh1,
    name: "Sophia",
    posi: "(Hong Kong)",
  },
  {
    image: exh2,
    name: "Gravity Industries",
    posi: "(UK)",
  },
  {
    image: exh3,
    name: "Virgin Hyperloop",
    posi: "(USA)",
  },
  {
    image: exh4,
    name: "AirCar",
    posi: "(Turkey)",
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
            
            <div className={`col-lg-3 col-sm-6 col-12 ${styles.oooo}`} key={index}>
              <Link to={`/competitions/${item.perLink}`} >
              <div className={styles.card}>
                <div className={styles.card_rect1}>
                  <div className={styles.card_rect2}>
                    <img src={item.image} alt={item.name}loading="lazy" />
                    <div className={styles.cardText}>{item.name}<br/>{item.posi}</div>
                  </div>
                </div>
              </div>
              </Link>
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
    // background: `url(${bf})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100vw",
    overflowX: "hidden",

  };

  return (
    <div className={styles.home} style={style}>
      <HomeParallax />
      <div style={{ maxWidth: "90%", margin: "auto" }}>
        <div className={styles.titSpn}>
          <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}>Title Sponsor</div>
          </div>
          <div className={styles.spnImg}>
            <a href="https://www.marshmclennan.com/">
              <img src={spimg} alt="Marsh McLennan Global Services India Pvt Ltd" className={styles.mmcImg} />
              {/* <p>Marsh McLennan Global Services India Pvt Ltd</p> */}
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
            <iframe src="https://www.youtube.com/embed/0_FBwJi8VBo?si=yaNM1nKy7nydA1XU" title="YouTube video player" frameborder="0" loading="lazy"></iframe>
            </div>
          </div>
          <div className={`col-12 col-lg-8 ${styles.themeText}`}>
          Welcome to the Official Website of the 27th Edition of Asia's Largest Science and Technology Festival, Techfest 2023-2024! We at Techfest are students of IIT Bombay who have been engaged over the past few months to structure Techfest's 27th edition. With the plethora of events planned this year, we are sure you will have an experience of a lifetime - something that you will never forget, a journey that will lift your spirits. And the starting point is this website! Here, you will find complete information about Techfest 2023-24, so make sure to explore all the pathways available to you. Are you ready to unlock The Mystical Realm?


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
          Teleport to the 27th Edition of Techfest and celebrate the interplay between Magic, Science & Technology. Step into the realm of wonders where the frontiers of imagination are translated into real-world possibilities. From ancient mysticism to cutting-edge innovations, explore the endless spectrum of creativity and ingenuity. Get ready for a Techno-Mystical extravaganza and embark on a miraculous journey of discovery into the unknown!
          </div>
        </div>
      </div>
      <Explore 
        Heading="Competitions" 
        data={dataCompetitions} 
        link="competitions" 
      />
      <Explore 
        Heading="Past Lectures" 
        data={dataLectures} 
        link="lectures" 
      />
      <Explore
        Heading="Past Exhibitions"
        data={dataExhibitions}
        link="exhibitions"
      />
      <div className={styles.endMargin}></div>
      <footer>
        <p> &copy; Techfest, IIT Bombay </p>
      </footer>
    </div>
  );
};

export default Home;
