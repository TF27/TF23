import React, { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./internal.module.css";
import backimg1 from "./../img/exp_bg.png";
import frame from "./../../Compi/static/card/Frame.png";

import Gesture from "./Workshops/Gesture";
import Pito from "./Workshops/Pito";
import DataAnalytics from "./Workshops/DataAnalytics";
import Arduino from "./Workshops/Arduino";
import Solarizer from "./Workshops/Solarizer";
import Ai from "./Workshops/Ai";
import Cloud from "./Workshops/Cloud";
import Mi from "./Workshops/Mi";
import Sixth from "./Workshops/Sixth";
import Auto from "./Workshops/Auto";
import Crypto from "./Workshops/Crypto";
import Block from "./Workshops/Block";
import Dta from "./Workshops/Dta";
import Ethical from "./Workshops/Ethical";
import Chatgpt from "./Workshops/Chatgpt";
import Android from "./Workshops/Android";
import Webdev from "./Workshops/Webdev";
import Cybersecurity from "./Workshops/Cybersecurity";
import W3b from "./Workshops/W3b";
import Digitalm from "./Workshops/Digitalm";
import Ds from "./Workshops/Ds";
import Quad from "./Workshops/Quad";

const Internal = () => {
  const { cardName } = useParams();
  // const [discount, setDiscount] = useState(True)
  const [data, setData] = useState([]);
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    console.log(window.scrollY);
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate();
  const google_id = user ? user.email : null;

  useEffect(() => {
    if(cardName === "chatgpt"){
      navigate("/workshops/chatgpt%20(prompt%20engineering)");
    }
    if(cardName === "hacking"){
      navigate("/workshops/ethical%20hacking");
    }
  }, [cardName, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Hi barbie");
        const response = await axios.get("/api/workshop/", {
          headers: {
            "X-Email": google_id,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [google_id]);

  const information = () => {
    const card_data = data.filter((item) => item.name === cardName);

    return card_data.map((data) => (
      <div className={`container ${styles.wdata}`}>
        <div className="row">
          <div className={`col-12 col-lg-4 ${styles.leftdata}`}>
            {/* <img src={data.img} alt={cardName} className={styles.compi_img}/> */}
            <div className={styles.wImg}>
              <img src={frame} alt="Frame" className={styles.imgFrame} />
              <img src={data.img} alt={cardName} className={styles.imgCompi} />
            </div>
            <div>
              {user === null ? (
                <div>
                  <div
                    className={styles.statement}
                    onClick={handleGoogleSignIn}
                  >
                    <div className={styles.stat_rect1}></div>
                    <div className={styles.stat_rect2}>
                      <Link to={`register`}>Register</Link>
                    </div>
                  </div>
                </div>
              ) : data.is_registered ? (
                <div>
                  <div className={styles.statement}>
                    <div className={styles.stat_rect1}></div>
                    <div className={styles.stat_rect2}>
                      <a href={data.paymentLink} target="_blank">
                        Pay Now
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className={styles.statement}>
                    <div className={styles.stat_rect1}></div>
                    <div className={styles.stat_rect2}>
                      <Link to={`register`}>Register</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {data.statement && (
              <div className={styles.statement}>
                <div className={styles.stat_rect1}></div>
                <div className={styles.stat_rect2}>
                  <a
                    href={data.statement}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Content
                  </a>
                </div>
              </div>
            )}
            {data.statement && (
              <div className={styles.statement}>
                <div className={styles.stat_rect1}></div>
                <div className={styles.stat_rect2}>
                  <a
                    href='https://forms.gle/8KvyXtYuCUtSAWpa8'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Accommodation
                  </a>
                </div>
              </div>
            )}
            <p className={styles.howtopay}>
            <a href="https://drive.google.com/file/d/1VBgqBtSZlQ3gSKtH6YVKCVGwaOxwCVWo/view?usp=sharing" target="_blank">How to{" "}</a>
              <a href="https://drive.google.com/file/d/1VBgqBtSZlQ3gSKtH6YVKCVGwaOxwCVWo/view?usp=sharing" target="_blank">
                <h4 style={{ display: "inline" }}>Pay?</h4>
              </a>
            </p>
          </div>
          <div className={`col-12 col-lg-8 ${styles.rightdata}`}>
            <div className={styles.sponsor}>
              {data.sponsorImg && (
                <a href={data.sponsorLink} target="_blank">
                  <h3>
                    Presented by{" "}
                    <img
                      src={data.sponsorImg}
                      alt="Sponsor"
                      className={styles.sponsorImg}
                    />
                  </h3>
                </a>
              )}
            </div>
            <div className={styles.cardND}>
              <h1 className={styles.compi_name}>{data.name}</h1>
              <p>{data.desc}</p>
              <div className={styles.work_prize}>
                <h4 className={styles.compi_prize}> INR {data.prize}</h4> {data.ex_prize && <span><h5>{data.ex_prize}</h5></span>}
              </div>
            </div>
            {user === null ? (
              <div className={styles.compi_reg}></div>
            ) : data.is_team_registered ? (
              <div className={styles.youhave}>
                {" "}
                You have successfully registered with your email <span>
                  {user.email}
                </span>{" "}
                and your team ID is <span>{data.team_id}</span>
              </div>
            ) : (
              <div className={styles.compi_reg}></div>
            )}
            {cardName === "gesture robotics" && <Gesture />}
            {cardName === "python" && <Pito />}
            {cardName === "data analytics" && <DataAnalytics />}
            {cardName === "arduino" && <Arduino />}
            {cardName === "solarizer" && <Solarizer />}
            {cardName === "artificial intelligence" && <Ai/>}
            {cardName === "cloud computing by amazon" && <Cloud/>}
            {cardName === "machine learning" && <Mi/>}
            {cardName === "6th sense" && <Sixth/>}
            {cardName === "6th sense robotics" && <Sixth/>}
            {cardName === "electric vehicles" && <Auto/>}
            {cardName === "crypto trading by wazirX" && <Crypto/>}
            {cardName === "blockchain" && <Block/>}
            {cardName === "data to aI by google" && <Dta/>}
            {cardName === "ethical hacking" && <Ethical/>}
            {cardName === "chatgpt (prompt engineering)" && <Chatgpt/>}
            {cardName === "android development" && <Android/>}
            {cardName === "web development" && <Webdev/>}
            {cardName === "cybersecurity" && <Cybersecurity/>}
            {cardName === "web 3.0" && <W3b/>}
            {cardName === "digital marketing" && <Digitalm/>}
            {cardName === "data science" && <Ds/>}
            {cardName === "quadcopter" && <Quad/>}
          </div>
        </div>
      </div>
    ));
  };

  const imageList = [backimg1];

  const top = {
    backgroundImage: `url(${backimg1})`, // Initial background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100vw",
    position: "absolute",
    top: "0",
    zIndex: "-1",
    // animation: "changeImage 5s infinite",
  };

  return (
    <div className={styles.explore} style={top}>
      {/* <style>{keyframes}</style> */}
      <div className={styles.bgitis}>
        <div className={styles.overlay}>
          <h1 className={styles.heading}></h1>
          {information()}
        </div>
      </div>
    </div>
  );
};

export default Internal;
