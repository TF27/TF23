import React, { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./internal.module.css";
import backimg1 from "./../img/exp_bg.png";
import frame from "./../../Compi/static/card/Frame.png";

import Meshmerize from "./Workshops/Meshmerize";
import Python from "./Workshops/Python";
import DataAnalytics from "./Workshops/DataAnalytics";

const Internal = () => {
  const { cardName } = useParams();

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

  const google_id = user ? user.email : null;

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
            <p className={styles.howtopay}>
              How to{" "}
              <a href="https://drive.google.com/file/d/1-MO-lgNpqUtozEuaj5mA1gCMTSoIPJrG/view?usp=sharing" target="_blank">
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
              <h4 className={styles.compi_prize}> INR {data.prize}</h4>
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
            {cardName === "meshmerize" && <Meshmerize />}
            {cardName === "python" && <Python />}
            {cardName === "data analytics" && <DataAnalytics />}
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
