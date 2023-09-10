import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { Frame3 } from "./compi_animation";
import Technorion from "./technorion";
import OurReach from "./ourreach";
import Carousel from "../../components/Carousel/carousel";
import "./compi_animation.css";
import '../Lectures/lecture.css';
import i1 from '../../pages/Exhibition/assets/i1.jpg'
import i2 from '../../pages/Exhibition/assets/i2.jpg'
import i3 from '../../pages/Exhibition/assets/i3.png'
import i4 from '../../pages/Exhibition/assets/i4.jpg'
import i5 from '../../pages/Exhibition/assets/i5.jpg'
import i6 from '../../pages/Exhibition/assets/i6.jpg'
import i7 from '../../pages/Exhibition/assets/i7.jpg'
import i8 from '../../pages/Exhibition/assets/i8.jpg'
import i9 from '../../pages/Exhibition/assets/i9.jpg'
import i10 from '../../pages/Exhibition/assets/i10.jpg'

import im1 from '../Lectures/assets/l1.jpg';
import im2 from '../Lectures/assets/l2.jpg';
import im3 from '../Lectures/assets/l3.jpg';
import im4 from '../Lectures/assets/l4.jpg';
import im5 from '../Lectures/assets/l5.jpg';
import im6 from '../Lectures/assets/l6.JPG';
import im7 from '../Lectures/assets/l7.jpg';
import im8 from '../Lectures/assets/l8.jpg';
import im9 from '../Lectures/assets/l9.jpg';
import im10 from '../Lectures/assets/l10.jpg';

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
       <div className="checkThis">
        <h1 style={{ marginTop: "80px", marginBottom: "40px" }}>
          CHECK THIS OUT
        </h1>
        <div>
          <h2 style={{ marginBottom: "-20px" }}>Competitions</h2>
          <Carousel
            i1={i1}
            i2={i2}
            i3={i3}
            i4={i4}
            i5={i5}
            i8={i8}
            i6={i6}
            i7={i7}
            i9={i9}
            i10={i10}
          />
          <div className="difPage">
            <div className="check_rect1"></div>
            <div className="check_rect2">
              <Link to="/exhibitions">Exhibitions</Link>
            </div>
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <div style={{marginBottom: '150px'}}>
          <h2 style={{ marginTop: "40px", marginBottom: "-20px" }}>Lectures</h2>
          <Carousel
            i1={im1}
            i2={im2}
            i3={im3}
            i4={im4}
            i5={im5}
            i8={im8}
            i6={im6}
            i7={im7}
            i9={im9}
            i10={im10}
          />
          <div className="difPage">
            <div className="check_rect1"></div>
            <div className="check_rect2">
              <Link to="/lectures">Lectures</Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Compi;
