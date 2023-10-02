import React from "react";
import styles from "./cardview1.module.css";
import { Link } from "react-router-dom";

import dot from "../../Compi/static/card/dot.png";
import chand from "../../Compi/static/card/chand.png";
import espark from "../../Compi/static/card/espark.png";
import fspark from "../../Compi/static/card/fspark.png";

import { UserAuth } from "../../../contexts/AuthContext";

const Card = ({ card }) => {
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const { googleSignIn, user } = UserAuth();

  return (
    <div key={card.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className={styles.compi_card}>
        <div className={styles.card_rect1}></div>
        <div className={styles.card_rect2}></div>
        <div className={styles.noReg} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0)), url(${card.img})` }}>
          <Link to={card.name}>
            <div className={styles.card_title}>
              <h3>{card.name}</h3>
              <p>{card.desc}</p>
            </div>
          </Link>
        </div>
        <div>
          <div className={styles.card_regexp}>
            {user === null ? (
              <div className={styles.card_reg}>
                <button onClick={handleGoogleSignIn}>Register</button>
              </div>
            ) : card.is_registered ? (
              <div className={styles.card_reg}>Registered</div>
            ) : (
              <div className={styles.card_reg}>
                <Link to={`${card.name}/register`}>Register</Link>
              </div>
            )}
            <div className={styles.card_exp}>
              <Link to={card.name}>Explore</Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
          </div> */}
    </div>
  );
};

export default Card;
