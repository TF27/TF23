import React from "react";
import { Link } from "react-router-dom";
import HomeParallax from "./parallax";
import styles from "./home.module.css";

// import images
import bf from "./images/homebg.png";
import spimg from "./images/sponsor.png";
import apj from "./assets/explore/apj.jpg";

const dataLectures = [
  {
    image: apj,
    name: "His Holiness the 14th Dalai Lama (Nobel Laureate, Peace)",
  },
  {
    image: apj,
    name: "His Holiness the 14th Dalai Lama (Nobel Laureate, Peace)",
  },
  {
    image: apj,
    name: "His Holiness the 14th Dalai Lama (Nobel Laureate, Peace)",
  },
  {
    image: apj,
    name: "His Holiness the 14th Dalai Lama (Nobel Laureate, Peace)",
  },
];
const dataExhibitions = [
  {
    image: apj,
    name: "Virgin Hyperloop (USA)",
  },
  {
    image: apj,
    name: "Virgin Hyperloop (USA)",
  },
  {
    image: apj,
    name: "Virgin Hyperloop (USA)",
  },
  {
    image: apj,
    name: "Virgin Hyperloop (USA)",
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
            <div className={styles.titSpn_rect2}>Theme</div>
          </div>
        </div>
        <div className={`row ${styles.themeData}`}>
          <div className="col-12 col-lg-4">
            <div className={styles.themeImg}>
              <img src={bf} alt="A Mystecal Realm" />
            </div>
          </div>
          <div className={`col-12 col-lg-8 ${styles.themeText}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
            ea rem iste! Adipisci, nam. Voluptatum, repudiandae quod rerum odit
            amet fugiat, magni eum iste molestiae accusamus natus, officiis quo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            tempora reprehenderit, aperiam nihil amet vero quo a ea pariatur
            esse laborum natus vel expedita iste, sit nostrum dolorum? Debitis,
            laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ea delectus tempora commodi est optio nihil dolorum, ut odio,
            corrupti cumque asperiores repudiandae maiores numquam, tenetur
            reprehenderit at perferendis quod distinctio. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            libero non quidem qui possimus itaque ex molestias doloremque,
            molestiae nobis excepturi cumque delectus aliquid minus maiores enim
            debitis numquam fugit? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Porro nihil expedita reprehenderit voluptas atque
            ipsum assumenda, unde saepe. Sequi iste facilis eius dolorem vel ad
            modi aspernatur accusantium fuga sapiente.
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
