import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./internal.module.css";
import CozmoClench from "./Competitions/CozmoClench";
import DissolveTeam from "./Teams/dissolveTeam";
import LeaveTeam from "./Teams/leaveTeam";
// Import images
import backimg1 from './../static/img/exp_bg.png';
import backimg2 from './../static/img/img7.jpg';
import Meshmerize from './Competitions/Meshmerize';
import frame from './../static/card/Frame.png';
import HackAI from './Competitions/HackAI';
import Codecode from './Competitions/Codecode';
import TechAid from './Competitions/TechAid';
import JoinTeam from './Teams/joinTeam';
import Mechanzo from './Competitions/Mechanzo';
import TechfestOlympiad from './Competitions/TechfestOlympiad';
import UrbanFuturism from './Competitions/UrbanFuturism'
import SingleParti from './Teams/single_parti';



const Internal = () => {
   const { compiName } = useParams();

   const [data, setData] = useState([]);
   const { googleSignIn, user, logOut } = UserAuth();
   const handleGoogleSignIn = async () => {
      try {
         await googleSignIn();
      } catch (error) {
         console.log(error);
      }
   };

   const google_id = user?.email;
   const ProblemStatements = `https://rain.techfest.org/media/ProblemStatements/${compiName}.pdf`;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get("/api/compi_card/", {
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
      const card_data = data.filter((item) => item.name === compiName);

    return card_data.map(data => (

      <div className={`container ${styles.wdata}`}>
      <div className='row'>
        <div className={`col-12 col-lg-4 ${styles.leftdata}`}>
        {/* <img src={data.img} alt={compiName} className={styles.compi_img}/> */}
        <div className={styles.wImg}>
            <img src={frame} alt='Frame' className={styles.imgFrame} />
            <img src={data.img} alt={compiName} className={styles.imgCompi} />
          </div>
          <h3 className={styles.compi_prize}> INR {data.prize} PRIZE</h3>
          <div className={styles.statement}>
            <div className={styles.stat_rect1}></div>
            <div className={styles.stat_rect2}><a href={data.statement} target='_blank' rel='noopener noreferrer'>Problem Statement</a></div>
          </div>
        </div>
        <div className={`col-12 col-lg-8 ${styles.rightdata}`}>
          <div className={styles.sponsor}>
            {data.sponsorImg && <a href={data.sponsorLink}><h3>Sponsored by <img src={data.sponsorImg} alt='Sponsor' className={styles.sponsorImg} /></h3></a>}
          </div>
          {data.is_team_registered ? <div className={styles.youhave}> You have successfully with your email <span>{user.email}</span> and your team ID is <span>{data.team_id}</span></div> : <div className={styles.compi_reg}></div>}
          {compiName === 'cozmoclench' && <CozmoClench />}
          {compiName === 'meshmerize' && <Meshmerize />}
          {compiName === 'mechanzo-league' && <Mechanzo />}
          {compiName === 'hack-aI' && <HackAI/>}
          {compiName === 'techfest olympiad' && <TechfestOlympiad />}
          {compiName === 'codecode' && <Codecode />}
          {compiName === 'tech-aid' && <TechAid />}
          {compiName === 'urban-futurism' && <UrbanFuturism />}

          <div className={styles.team_reg}>
          {data.is_team_leader ? (
              <div>
              <div className={styles.compi_team}>
                <div className={styles.single_team}>
                  <SingleParti />
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
                  {/* <div className={styles.join_team}>
                    <div className={styles.join_rect1}></div>
                    <div className={styles.join_rect2}>
                      <Link to={`joinTeam`}>Join Team</Link>
                    </div>
                  </div> */}
                  <div>
                    <JoinTeam />
                  </div>
                  <div>
                    <SingleParti />
                  </div>
                </div>
                </div>
              ) : (
                <div>
                  <div className={styles.int_reg}>
                    <div className={styles.reg_rect1}></div>
                    <div className={styles.reg_rect2}>
                      <Link to={`register`}>Register</Link>
                    </div>
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
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%",
      position: "absolute",
      top: "0",
      zIndex: "-1",
      animation: "changeImage 5s infinite",
   };

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
};

export default Internal;
