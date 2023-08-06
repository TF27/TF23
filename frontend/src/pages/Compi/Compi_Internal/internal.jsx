import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import WhatsappShareButton from '../../../components/share/whatsapp';
import TwitterShareButton from '../../../components/share/twitter';
import { UserAuth } from '../../../contexts/AuthContext'
import styles from './internal.module.css';
import DissolveTeamModal from './Teams/dissolve_team';
import LeaveTeamModal from './Teams/leave_team';

// import images
import backimg from './../static/img/exp_bg.png';



const Internal = () => {
  const { compiName } = useParams();

  const [data, setData] = useState([]);
  const { user } = UserAuth();

  const google_id = user?.email;

  const [activeCity, setActiveCity] = useState('About');

  const openCity = (cityName) => {
    setActiveCity(cityName);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/compi_card/', {
          headers: {
            'X-Email': google_id,
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

  const information = () => {
    const card_data = data.filter(item => item.name === compiName)

    return card_data.map(data => (

      <div className={styles.wdata}>
        <div>
          <img src={data.img} alt={compiName} />
          {data.is_registered ? (<p>Registered</p>) : (
            <p><Link to={`${data.name}/register`}>Register</Link></p>
          )}
        </div>
        <div>
          <div className={styles.sponsor}>
            {data.sponsorImg && <h3>Sponsored by <img src={data.sponsorImg} alt='Sponsor' /></h3>}
          </div>
          <div className={styles.impdata}>
            <div className={styles.info_head}>
              <div></div>
              <div><div className={`${styles.bar} ${activeCity === 'About' ? styles.baractive : ''}`} ></div><div className={`${styles.bar_item} ${activeCity === 'About' ? styles.active : ''}`} onClick={() => openCity('About')}>About</div></div>
              <div><div className={`${styles.bar} ${activeCity === 'Structure' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Structure' ? styles.active : ''}`} onClick={() => openCity('Structure')}>Structure</div></div>
              <div><div className={`${styles.bar} ${activeCity === 'Timeline' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Timeline' ? styles.active : ''}`} onClick={() => openCity('Timeline')}>Timeline</div></div>
              <div><div className={`${styles.bar} ${activeCity === 'FAQs' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'FAQs' ? styles.active : ''}`} onClick={() => openCity('FAQs')}>FAQs</div></div>
              <div><div className={`${styles.bar} ${activeCity === 'Rules' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Rules' ? styles.active : ''}`} onClick={() => openCity('Rules')}>Rules</div></div>
              <div><div className={`${styles.bar} ${activeCity === 'Contact' ? styles.baractive : ''}`}></div><div className={`${styles.bar_item} ${activeCity === 'Contact' ? styles.active : ''}`} onClick={() => openCity('Contact')}>Contact</div></div>
              <div></div>
            </div>
            <div className={styles.information}>
              <div id="About" className={`${styles.info} ${activeCity === 'About' ? styles.show : styles.hide}`}>
                <div className={styles.info_tab}>
                  {data.about}
                </div>
              </div>
              <div id="Structure" className={`${styles.info} ${activeCity === 'Structure' ? styles.show : styles.hide}`}>
                <div className={styles.info_tab}>
                 
                </div>
              </div>
              <div id="Timeline" className={`${styles.info} ${activeCity === 'Timeline' ? styles.show : styles.hide}`}>
                <div className={styles.info_tab}>
                  <pre>{data.timeline}</pre>
                </div>
              </div>
              <div id="FAQs" className={`${styles.info} ${activeCity === 'FAQs' ? styles.show : styles.hide}`}>
                <div className={styles.info_tab}>
                  {data.faqs}
                </div>
              </div>
              <div id="Rules" className={`${styles.info} ${activeCity === 'Rules' ? styles.show : styles.hide}`}>
                <div className={styles.info_tab}>
                  {data.rules}
                </div>
              </div>
              <div id="Contact" className={`${styles.info} ${activeCity === 'Contact' ? styles.show : styles.hide}`}>
                <div className={styles.info_tab}>
                  {data.contact}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.team_reg}>
            {data.is_team_registered ? (
              <div>
                <LeaveTeamModal />
                <DissolveTeamModal />
              </div>
            ) : (
              data.is_registered ? (
                <div>
                  <Link to={`createTeam`}>Create Team</Link><br />
                  <Link to={`joinTeam`}>Join Team</Link><br />
                  <Link to={`createTeam`}>Single Parti</Link>
                </div>
              ) : (
                <p><Link to={`register`}>Register</Link></p>
              )
            )}
          </div>
        </div>
      </div>
    ));
  }

  const top = {
    backgroundImage: `url(${backimg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: '0',
    zIndex: '-1',
  }

  const heading = {
    position: 'relative', top: '220px',
    fontFamily: 'Abhaya Libre ExtraBold',
    fontSize: '5rem',
    letterSpacing: '0.5rem',
  }

  return (
    // <div>
    <div className={styles.explore} style={top}>
      {/* <h1 style={heading}>TECHFEST OLYMPIAD</h1> */}
      {/* <Link to={`register`}>Register</Link><br/>
            <Link to={`createTeam`}>Create Team</Link><br/>
            <Link to={`joinTeam`}>Join Team</Link><br/>
            <button>Leave Team</button>
            <WhatsappShareButton /> */}
      {/* <TwitterShareButton /> */}
      {information()}
    </div>
  );
}

export default Internal;