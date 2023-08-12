import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { UserAuth } from '../../../contexts/AuthContext'
import styles from './internal.module.css';
import DissolveTeamModal from './Teams/dissolve_team';
import LeaveTeamModal from './Teams/leave_team';
import Cozmo from './Competitions/cozmo';
import Border from '../../../components/DoubleBorder/doubleborder';

// Import images
import backimg1 from './../static/img/exp_bg.png';
import backimg2 from './../static/img/img7.png';
import Mesh from './Competitions/mesh';

const Internal = () => {
  const { compiName } = useParams();

  const [data, setData] = useState([]);
  const { user } = UserAuth();

  const google_id = user?.email;
  const ProblemStatements = 'http://localhost:8000/media/ProblemStatements/Cozmo.pdf'

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
  }, []);

  const information = () => {
    const card_data = data.filter(item => item.name === compiName)

    return card_data.map(data => (

      <div className={styles.wdata}>
        <div>
          <img src={data.img} alt={compiName} className={styles.compi_img}/>
          <h3 className={styles.compi_prize}>{data.prize} PRIZE</h3>
          <div className={styles.statement}>
          <a href={ProblemStatements} target='_blank' rel='noopener noreferrer'>Problem Statement</a>
          </div>
        </div>
        <div>
          <div className={styles.sponsor}>
            {data.sponsorImg && <h3>Sponsored by <img src={data.sponsorImg} alt='Sponsor' /></h3>}
          </div>
          {compiName === 'Cozmo' && <Cozmo />}
          {compiName === 'Mesh' && <Mesh />}
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
      <div className={styles.overlay}>
      <h1 className={styles.heading}> {compiName} </h1>
        {information()}
      </div>
    </div>
  );
}

export default Internal;
