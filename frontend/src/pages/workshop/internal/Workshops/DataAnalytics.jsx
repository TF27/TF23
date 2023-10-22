import React, {useState} from 'react';
import styles from './workshop_data.module.css';
import Faq from 'react-faq-component';
import './x.css';
import Whatsapplink from '../../../../components/whatsapp/link';
import yt from './../../img/glimpses.png'

const DataAnalytics = () => {
    const [activeCity, setActiveCity] = useState('About');
    const [activeIndex, setActiveIndex] = useState(null);
    const openCity = (cityName) => {
      setActiveCity(cityName);
    }



      const styles1 = {
        bgColor: 'none',
        titleTextColor: 'white',
        rowTitleColor: 'white',
        arrowColor: 'white',
        rowContentColor: 'white',
        marginBottom: '20px',
        maxWidth: '80%',
        margin: 'auto',
        rowContentMarginBottom: '0',
      }

    return ( 
      <div>
      <div className={styles.impdata}>
        <div className={styles.info_head}>
          {/* <div className={styles.bar_extra}></div> */}
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'About' ? styles.baractive : ''}`} ></div><div className={`${styles.bar_item} ${activeCity === 'About' ? styles.active : ''}`} onClick={() => openCity('About')}>Details</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Structure' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Structure' ? styles.active : ''}`} onClick={() => openCity('Structure')}>Discounts</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Rules' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Rules' ? styles.active : ''}`} onClick={() => openCity('Rules')}>Rules</div></div>
          <div className={styles.bar_oii}><div className={`${styles.bar} ${activeCity === 'Contact' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Contact' ? styles.active : ''}`} onClick={() => openCity('Contact')}>Contact</div></div>
          {/* <div className={styles.bar_extra}></div> */}
        </div>
        <div className={styles.information}>
          <div id="About" className={`${styles.info} ${activeCity === 'About' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            <div className={styles.info_details}>
                <div>
                  <h3>Date: </h3>
                  <p>28th-29th December</p>
                  <h3>Venue: </h3>
                  <p>IIT Bombay</p>
                  <h3>Glimpses: <a href="https://www.youtube.com/watch?v=0_FBwJi8VBo" target="_blank" rel="noreferrer"><img src={yt} /></a></h3>
                </div>
                <div>
                  <h3>Duration:</h3>
                  <p>12-14 hours</p>
                  <h3>Early Bird Offer:</h3>
                  <p>Free Access Pass to Techfest for events such as EDM night, Robowar, Exhibition, Keynote Sessions and many more*</p>
                </div>
              </div></div>
            </div>
          </div>
          <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            <b>Register and Pay before 22nd October 2023 to avail the workshop at the early bird price</b> <br /><br />
            Group Discounts: <br/>
            Register as a group to avail the following discounts: <br/>
            2 members Rs. 150 off <br/>
            3 members Rs. 300 off <br/>
            4 members Rs. 500 off <br/>
            </div>
            </div>
          </div>
          <div id="Rules" className={`${styles.info} ${activeCity === 'Rules' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
            <div className={styles.info_data}>
            1. <b>Eligibility:</b> Participants will have to register individually for each workshop. <br/>
            2. <b>Payment Instructions:</b> While paying the fees, login with the same credentials with which you had registered on the Techfest Website. Please enter the data correctly for us to process your payment information properly. <br/>
            3. <b>Prerequisites:</b> A laptop/PC with Microsoft Windows (7 or later & Minimum 4GB RAM), configuration Internet Connectivity (Typically to be able to do video call / conferencing), Notepad & Pen. <br/>
            4. <b>Certificate Criterion:</b> Participants should be present in all the sessions. Failing this, no certificate will be awarded to the participant. Certificate of Training from Techfest, IIT Bombay will be given to all the participants.<br/>
            <br />No Refunds will be entertained <br />
            **Limited number of seats <br/>
            **If the Workshop gets canceled, all the participants will be given a full refund, irrespective of the Deadline. <br />
              </div>
            </div>
          </div>
          <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
            <div className={styles.info_tab}>
              <div className={styles.info_data}>
                Akshat Gupta<br/>
                    <div className="col-3 contactNum" onClick={() => window.location.href = `tel:9619678850`}>+91 96196 78850</div>
                    <div className="col-3 contactMail" onClick={() => window.location.href = `akshat@techfest.org`}>akshat@techfest.org</div>
                    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default DataAnalytics;