import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./lecture.css";
import styles from "./parallax.module.css";
import ImageOne from "./ImageOne";

import Notify from "../../components/Notify/notify";
import WorldMap from "./map";
// import OurReach from "../../components/OurReach/ourreach1";
import OurReach from "./ourreach";
import Carousel from "../../components/Carousel/carousel";

import i1 from "../../pages/Exhibition/assets/i1.jpg";
import i2 from "../../pages/Exhibition/assets/i2.jpg";
import i3 from "../../pages/Exhibition/assets/i3.png";
import i4 from "../../pages/Exhibition/assets/i4.jpg";
import i5 from "../../pages/Exhibition/assets/i5.jpg";
import i6 from "../../pages/Exhibition/assets/i6.jpg";
import i7 from "../../pages/Exhibition/assets/i7.jpg";
import i8 from "../../pages/Exhibition/assets/i8.jpg";
import i9 from "../../pages/Exhibition/assets/i9.jpg";
import i10 from "../../pages/Exhibition/assets/i10.jpg";

import c1 from "../../pages/Compi/assets/c1.jpg";
import c2 from "../../pages/Compi/assets/c2.jpg";
import c3 from "../../pages/Compi/assets/c3.jpg";
import c4 from "../../pages/Compi/assets/c4.jpg";
import c5 from "../../pages/Compi/assets/c5.jpg";
import c6 from "../../pages/Compi/assets/c6.jpg";
import c7 from "../../pages/Compi/assets/c7.jpg";
import c8 from "../../pages/Compi/assets/c8.jpg";
import c9 from "../../pages/Compi/assets/c9.jpg";
import c10 from "../../pages/Compi/assets/c10.jpg";

import MapClick from "./m-map";

const Lectures = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    // console.log(window.innerWidth)
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ height: "120vh" }}>
      <ImageOne />
      <div className={styles.image}>
        <div className={styles.blackGradienttop} />
        <Notify />
        <div>{isMobile ? <MapClick /> : <WorldMap />}</div>
        <OurReach />
        <div className="checkThis">
          <h1 style={{ marginTop: "10px", marginBottom: "40px" }}>
            CHECK THIS OUT
          </h1>
          <div>
            <h2 style={{ marginBottom: "0px" }}>Competitions</h2>
            <Carousel
              i1={c1}
              i2={c2}
              i3={c3}
              i4={c4}
              i5={c5}
              i8={c6}
              i6={c7}
              i7={c8}
              i9={c9}
              i10={c10}
            />

            <div className="difPage">
              <div className="check_rect1"></div>
              <div className="check_rect2">
                <Link to="/competitions">Explore</Link>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
          <div>
            <h2 style={{ marginTop: "40px", marginBottom: "0px" }}>
              Exhibitions
            </h2>
            <Carousel
              i1={i1}
              i2={i2}
              i3={i3}
              i4={i4}
              i5={i5}
              i8={i6}
              i6={i7}
              i7={i8}
              i9={i9}
              i10={i10}
            />
            <div className="difPage">
              <div className="check_rect1"></div>
              <div className="check_rect2">
                <Link to="/exhibitions">Explore</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="contactus">
          <h1 style={{ marginTop: "60px", marginBottom: "40px" }}>
            CONTACT US
          </h1>

          <div className="Contactbox">
            <div className="Contactbox1">
              Arnav Patel<br></br>
              arnav@techfest.org<br></br>
              <div onClick={() => (window.location.href = `tel:${9372634701}`)}>
                {9372634701}
              </div>
            </div>
            <div className="Contactbox1">
              Manas Dadhich<br></br>
              manas@techfest.org<br></br>
              {/* <div onClick={() => window.location.href = `mailto:manas@techfest.org`}>{manas@techfest.org}</div><br></br> */}
              <div onClick={() => (window.location.href = `tel:${9981378767}`)}>
                {9981378767}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
