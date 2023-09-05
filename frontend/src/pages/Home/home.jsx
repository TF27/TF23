import React from "react";
import img1 from "./assets/bg.png";
import spimg from "./images/sponsor.png";
import "./home.css";
import bf from "./assets/bg.png";
import HomeParallax from "./parallax";
import styles from "./home.module.css";

const Home = () => {
  const style = {
    paddingBottom: "20px",
    position: "relative",
    height: "100vh",
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
      {/* <Carousel />        */}
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
            <div className='col-12 col-lg-4'><img src={bf} alt='A Mystecal Realm'/></div>
            <div className={`col-12 col-lg-8 ${styles.themeText}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui ea rem iste! Adipisci, nam. Voluptatum, repudiandae quod rerum odit amet fugiat, magni eum iste molestiae accusamus natus, officiis quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tempora reprehenderit, aperiam nihil amet vero quo a ea pariatur esse laborum natus vel expedita iste, sit nostrum dolorum? Debitis, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus tempora commodi est optio nihil dolorum, ut odio, corrupti cumque asperiores repudiandae maiores numquam, tenetur reprehenderit at perferendis quod distinctio.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
