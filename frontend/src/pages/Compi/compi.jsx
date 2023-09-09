import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { Frame3 } from "./compi_animation";
import Technorion from "./technorion";
import OurReach from "./ourreach";
import Carousel from "../../components/Carousel/carousel";
// import img from "../Lectures/assets/europe.jpg";
// import img2 from "../Lectures/assets/lectbg.png";
import "./compi_animation.css";
import '../Lectures/lecture.css';

const Compi = () => {
  const [data, setData] = useState([]);
  const { user } = UserAuth();

  const google_id = user?.uid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/compi_card/", {
          headers: {
            "X-Google-UID": google_id,
          },
        });
        console.log(axios.defaults.headers.common);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const card = () => {
    return data.map((data) => (
      <div key={data.id}>
        <h2>{data.tag}</h2>
        <p>{data.name}</p>
        <p>{data.prize}</p>
        <p>{data.desc}</p>
        <p>
          <img src={data.img} />
        </p>
        {data.is_registered ? (
          <p>Registered</p>
        ) : (
          <p>
            <Link to={`${data.name}/register`}>Register</Link>
          </p>
        )}
        <p>
          <Link to={data.name}>Explore</Link>
        </p>
      </div>
    ));
  };

  return (
    <div className="competitions">
      <div className="compi_bg"></div>
      <Frame3 />
      <Technorion />
      <OurReach />
      <br /><br /><br /><br />
      {/* {card()} */}
       {/* <div className="checkThis">
        <h1 style={{ marginTop: "80px", marginBottom: "40px" }}>
          CHECK THIS OUT
        </h1>
        <div>
          <h2 style={{ marginBottom: "-20px" }}>Exhibitions</h2>
          <Carousel
            i1={img}
            i2={img2}
            i3={img}
            i4={img2}
            i5={img}
            i8={img2}
            i6={img}
            i7={img2}
            i9={img}
            i10={img2}
          />
          <div className="difPage">
            <div className="check_rect1"></div>
            <div className="check_rect2">
              <Link to="/exhibitions">Explore</Link>
            </div>
          </div>
        </div>
        <div style={{marginBottom: '150px'}}>
          <h2 style={{ marginTop: "40px", marginBottom: "-20px" }}>Lectures</h2>
          <Carousel
            i1={img}
            i2={img2}
            i3={img}
            i4={img2}
            i5={img}
            i8={img2}
            i6={img}
            i7={img2}
            i9={img}
            i10={img2}
          />
          <div className="difPage">
            <div className="check_rect1"></div>
            <div className="check_rect2">
              <Link to="/lectures">Explore</Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="contactus">
        <h1 style={{ marginTop: "80px" }}>CONTACT US</h1>
        <div className="tray">
          <div>
            <ContactCard
              image=""
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
        </div>
      </div>  */}
    </div>
  );
};

export default Compi;
