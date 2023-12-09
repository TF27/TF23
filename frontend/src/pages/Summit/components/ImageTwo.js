import React from 'react';
import parallax from './parallax.module.css';
import Notify from "../../../components/Notify/notify";
import sum1 from "../assets/sum1.jpg";
import sum2 from "../assets/sum2.jpg";
import styles from "./cardview1.module.css";
import { Link } from "react-router-dom";
import industryimg from '../assets/sum2.jpg';
import fintechimg from '../assets/sum1.jpg';


const ImageTwo = () => {
 
  return(
          
    
      <div className={styles.maincontainer}>
        <div className={styles.titSpn_rect1}>
              <div className={styles.titSpn_rect2} >
                INTERNATIONAL SUMMITS
              </div>
              </div>
              <div className={styles.partyallnight}>
      <div className={styles.compi_card}>
        <div className={styles.card_rect1}></div>
        <div className={styles.card_rect2}></div>
        <div className={styles.noReg} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0)), url(${fintechimg})` }}>
            <div className={styles.card_title}>
              <h3>International Fintech Summit</h3>
              <p>The first edition of the Fintech Summit would primarily focus on India’s Fintech Revolution, the future of money management, and reviewing banking and financial services post Covid-19</p>
            </div>
        </div>
        <div>
          <div className={styles.card_regexp}>
              <div className={styles.card_reg}>
                <button >Register</button>
              </div>
            <div className={styles.card_exp}>
              <Link to='https://techfest.org/fintech'>Explore</Link>
            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.compi_card}>
        <div className={styles.card_rect1}></div>
        <div className={styles.card_rect2}></div>
        <div className={styles.noReg} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0)), url(${industryimg})` }}>
            <div className={styles.card_title}>
              <h3>International Industry Summit</h3>
              <p>This year’s Industry Summit focuses primarily on E-commerce and D2C including cloud kitchen, D2C growth Masterclass, Live commerce, and Industry corporate reboot vs covid.</p>
            </div>
        </div>
        <div>
          <div className={styles.card_regexp}>
              <div className={styles.card_reg}>
                <button >Register</button>
              </div>
            <div className={styles.card_exp}>
              <Link to='https://techfest.org/industry'>Explore</Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
};

export default ImageTwo