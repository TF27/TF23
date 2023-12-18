import React, { useEffect } from "react";
import styles from "./cardview1.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../contexts/AuthContext";

const Card = ({ card }) => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      // afterSignInActions();
      // setTimeout(() => {
      //   navigate(`${card.name}/register`)
      // }, 2000)
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user){
  //     console.log('hola hola')
  //     // navigate(`${card.name}/register`)
  //   }
  // }, [user, navigate, card.name])


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
              // <div className={styles.card_reg}>
              //   <button onClick={handleGoogleSignIn}>Register</button>
              // </div>
              <div className={styles.card_reg}>
                <Link to={`${card.name}/register`}>Register</Link>
              </div>
            ) : card.closed ? (
              <div className={styles.card_reg}>Sold Out</div>
            )
            : card.is_registered ? (
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
    </div>
  );
};

export default Card;
