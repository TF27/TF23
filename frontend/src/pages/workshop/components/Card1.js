import React from 'react';
import styles from './cardview1.module.css';
import { Link } from 'react-router-dom';

import dot from '../../Compi/static/card/dot.png';
import chand from '../../Compi/static/card/chand.png';
import espark from '../../Compi/static/card/espark.png';
import fspark from '../../Compi/static/card/fspark.png';

import {UserAuth} from '../../../contexts/AuthContext';

const Card = ({card}) => {
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const {googleSignIn, user} = UserAuth();

  return (
    <div key={card.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className={styles.compi_card}>
          <div className={styles.card_rect1}></div>
          <div className={styles.card_rect2}></div>
          <div className={styles.noReg}>
            <Link to={card.name}></Link>
            <div className={styles.card_tag}>
              <span>
                <img src={dot} alt="dot" />
              </span>
              <h3 className={styles.card_tag}>{card.tag}</h3>
              <span>
                <img src={dot} alt="dot" />
              </span>
            </div>
            <div className={styles.card_imgo}>
              <img src={card.img} className={styles.card_img} alt={card.name} />
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
              <h3>{card.name}</h3>
              <div className={styles.card_sustitle}>INR {card.prize} Prize</div>
            </div>
            <div className={styles.card_post}>
              <div className={styles.card_desc}>{card.desc}</div>
            </div>
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
   )
}

export default Card
