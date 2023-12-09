import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import styles from "./robowars.module.css";
// Images
import dot from "../Compi/static/card/dot.png";
import chand from "../Compi/static/card/chand.png";
import espark from "../Compi/static/card/espark.png";
import fspark from "../Compi/static/card/fspark.png";

// Here is the code
const Cards = () => {
  const [data, setData] = useState([]);
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const google_id = user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/robowars/", {
          headers: {
            "X-Email": google_id,
          },
        });
        console.log(axios.defaults.headers.common);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [google_id]);

  const card = () => {
    return data.map((data) => (
      <div key={data.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className={styles.compi_card}>
          <div className={styles.card_rect1}></div>
          <div className={styles.card_rect2}></div>
          <div className={styles.noReg}>
            <div className={styles.card_tag}>
              <span>
                <img src={dot} alt="dot" />
              </span>
              <span>
                <img src={dot} alt="dot" />
              </span>
            </div>
            <div className={styles.card_imgo}>
              <img src={data.img} className={styles.card_img} alt={data.name} />
            </div>
            <img className={styles.chand} src={chand} alt="moon" />
            <img className={styles.espark} src={dot} alt="moon" />
            <img className={styles.fspark} src={fspark} alt="moon" />
            {/* <img className={styles.chand2} src={chand} alt='moon' /> */}
            <img className={styles.espark2} src={espark} alt="moon" />
            <img className={styles.fspark2} src={fspark} alt="moon" />
            <img className={styles.espark3} src={dot} alt="moon" />
            <img className={styles.fspark3} src={fspark} alt="moon" />
            <img className={styles.espark4} src={espark} alt="moon" />
            <img className={styles.fspark4} src={fspark} alt="moon" />
            <div className={styles.card_title}>
              <h3>{data.category}</h3>
            </div>
          </div>
          <div>
            <div className={styles.card_regexp}>
              {user === null ? (
                <div className={styles.card_reg}>
                  <button onClick={handleGoogleSignIn}>Register</button>
                </div>
              ) : data.is_registered ? (
                <div className={styles.card_reg}>Registered</div>
              ) : (
                <div className={styles.card_reg}>
                  <Link to={`${data.category}/register`}>Register</Link>
                </div>
              )}
              <div className={styles.card_exp}>
                <a href={data.statement}> Explore </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    ));
  };

  return (
    <div className={styles.Technorion}>
      <div className="blackGradient-to-bottom" />
      <div className="technorion_cards">
        <div className="container" style={{ maxWidth: "90%" }}>
          <div className="row">{card()}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
