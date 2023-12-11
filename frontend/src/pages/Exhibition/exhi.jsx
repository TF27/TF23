import React, { useState, useEffect } from "react";
import WorldMap from "./map";
import MapClick from "./m-map";
import Notify from "../../components/Notify/notify";
import OurReach from "./ourreach";
import ImageOne from "./ImageOne";
import parallax from "./parallax.module.css";
import Carousel from "../../components/Carousel/carousel";
import { Link } from "react-router-dom";
import "../Lectures/lecture.css";
import "../../pages/Compi/compi_animation.css";

import im1 from "../Lectures/assets/l1.jpg";
import im2 from "../Lectures/assets/l2.jpg";
import im3 from "../Lectures/assets/l3.jpg";
import im4 from "../Lectures/assets/l4.jpg";
import im5 from "../Lectures/assets/l5.jpg";
import im6 from "../Lectures/assets/l6.JPG";
import im7 from "../Lectures/assets/l7.jpg";
import im8 from "../Lectures/assets/l8.jpg";
import im9 from "../Lectures/assets/l9.jpg";
import im10 from "../Lectures/assets/l10.jpg";

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

import exhi_image from "./assets/exhi.png";
import Exhibitions from "./exhi_cards";

const Exhibition = () => {
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
      <div className={parallax.exhi}>
        <div className={parallax.blackGradienttop} />

        <Notify />
        <h1 style={{ marginTop: "100px", marginBottom: "40px" }}>
          Exhibitions
        </h1>
        <Exhibitions />
        <div>{isMobile ? <MapClick /> : <WorldMap />}</div>
        <OurReach />
        <div className="checkThis">
          <h1 style={{ marginTop: "100px", marginBottom: "40px" }}>
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
            <h2 style={{ marginTop: "50px", marginBottom: "0px" }}>Lectures</h2>
            <Carousel
              i1={im1}
              i2={im2}
              i3={im3}
              i4={im4}
              i5={im5}
              i8={im6}
              i6={im7}
              i7={im8}
              i9={im9}
              i10={im10}
            />
            <div className="difPage">
              <div className="check_rect1"></div>
              <div className="check_rect2">
                <Link to="/lectures">Explore</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="contactus">
          <h1 style={{ marginTop: "40px", marginBottom: "40px" }}>
            CONTACT US
          </h1>
          {/* <div className="tray">

            <div>
              <ContactCard
                image={tiger}
                headText="Contact Us"
                emailText="contact@example.com"
                phoneNumberText="123-456-7890"
              />
            </div>
           
            <div>
              <ContactCard
                image=""
                headText="Contact Us"
                emailText="contact@example.com"
                phoneNumberText="123-456-7890"
              />
            </div>
          </div> */}
          <div className="Contactbox">
            <div className="Contactbox1">
              Gourish Singhal<br></br>
              gourish@techfest.org<br></br>
              <div onClick={() => (window.location.href = `tel:${9424873725}`)}>
                {9424873725}
              </div>
            </div>
            <div className="Contactbox1">
              Akshat Gupta<br></br>
              akshat@techfest.org<br></br>
              {/* <div onClick={() => window.location.href = `mailto:manas@techfest.org`}>{manas@techfest.org}</div><br></br> */}
              <div onClick={() => (window.location.href = `tel:${9619678850}`)}>
                {9619678850}
              </div>
            </div>
            <div className="Contactbox1">
              Aryan Gupta<br></br>
              aryan@techfest.org<br></br>
              {/* <div onClick={() => window.location.href = `mailto:manas@techfest.org`}>{manas@techfest.org}</div><br></br> */}
              <div onClick={() => (window.location.href = `tel:${7317520804}`)}>
                {7317520804}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Exhibition;
