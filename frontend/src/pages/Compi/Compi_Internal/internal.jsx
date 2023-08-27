import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { UserAuth } from '../../../contexts/AuthContext';
import styles from './internal.module.css';
import Cozmo from './Competitions/cozmo';
import DissolveTeam from './Teams/dissolveTeam';
import LeaveTeam from './Teams/leaveTeam';
// Import images
import backimg1 from './../static/img/exp_bg.png';
import backimg2 from './../static/img/img7.png';
import Meshmerize from './Competitions/Meshmerize';



const Internal = () => {
  const { compiName } = useParams();

  const [data, setData] = useState([]);
  const { user } = UserAuth();

  const google_id = user?.email;
  const ProblemStatements = `https://rain.techfest.org/media/ProblemStatements/${compiName}.pdf`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/compi_card/', {
          headers: {
            'X-Email': google_id,
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
    const card_data = data.filter(item => item.name === compiName)

    return card_data.map(data => (

      <div className={`container ${styles.wdata}`}>
      <div className='row'>
        <div className={`col-12 col-lg-4 ${styles.leftdata}`}>
          <img src={data.img} alt={compiName} className={styles.compi_img}/>
          <h3 className={styles.compi_prize}> INR {data.prize} PRIZE</h3>
          <div className={styles.statement}>
            <div className={styles.stat_rect1}></div>
            <div className={styles.stat_rect2}><a href={ProblemStatements} target='_blank' rel='noopener noreferrer'>Problem Statement</a></div>
          </div>
        </div>
        <div className={`col-12 col-lg-8 ${styles.rightdata}`}>
          <div className={styles.sponsor}>
            {data.sponsorImg && <h3>Sponsored by <img src={data.sponsorImg} alt='Sponsor' className={styles.sponsorImg} /></h3>}
          </div>
          {compiName === 'Cozmo' && <Cozmo />}
          {compiName === 'Meshmerize' && <Meshmerize />}
          <div className={styles.team_reg}>
          {data.is_team_leader ? (
              <div>
              <div className={styles.compi_team}>
                <div className={styles.single_team} style={{marginTop: '20px'}}>
                    <div className={styles.single_rect1}></div>
                    <div className={styles.single_rect2}>
                      <Link to={`addparticipant`}>Add Participant</Link>
                    </div>
                  </div>
                <DissolveTeam />
              </div>
              </div>
              ) : data.is_parti ? (
                <div>
                  <LeaveTeam />
                </div>
              ) : data.is_registered ? (
                <div styles={styles.lolReg}>
                  You have registered successfully!
                <div className={styles.compi_team}>
                  <div className={styles.create_team}>
                    <div className={styles.create_rect1}></div>
                    <div className={styles.create_rect2}>
                      <Link to={`createTeam`}>Create Team</Link>
                    </div>
                  </div>
                  <div className={styles.join_team}>
                    <div className={styles.join_rect1}></div>
                    <div className={styles.join_rect2}>
                      <Link to={`joinTeam`}>Join Team</Link>
                    </div>
                  </div>
                  <div className={styles.single_team}>
                    <div className={styles.single_rect1}></div>
                    <div className={styles.single_rect2}>
                      <Link to={`singleparticipant`}>Single Participant</Link>
                    </div>
                  </div>
                </div>
                </div>
              ) : (
                <div className={styles.int_reg}>
                  <div className={styles.reg_rect1}></div>
                  <div className={styles.reg_rect2}>
                    <Link to={`register`}>Register</Link>
                  </div>
                </div>
              )}
          </div>
        </div>
        </div>
      </div>
    ));
  }

  const imageList = [backimg1, backimg2];

  const top = {
    backgroundImage: `url(${imageList[0]})`, // Initial background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: '0',
    zIndex: '-1',
    animation: 'changeImage 5s infinite',
  }

  const keyframes = `
    @keyframes changeImage {
      0%, 100% {
        background-image: url(${imageList[0]});
      }
      50% {
        background-image: url(${imageList[1]});
      }
    }
  `;

  return (
    <div className={styles.explore} style={top}>
      <style>{keyframes}</style>
      <div className={styles.bgitis}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}> {compiName} </h1>
        {information()}
      </div>
      </div>
    </div>
  );
}

export default Internal;
