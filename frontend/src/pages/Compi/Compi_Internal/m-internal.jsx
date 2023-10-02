import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./internal.module.css";
import DissolveTeam from "./Teams/dissolveTeam";
import LeaveTeam from "./Teams/leaveTeam";
// import images
import backimg1 from "./../static/img/exp_bg.png";
import backimg2 from "./../static/img/exp_bg2.png";
import frame from "./../static/card/Frame.png";
import WhatsappShareButton from "../../../components/share/whatsapp";

import Meshmerize from "./Competitions/m-meshmerize";
import HackAI from "./Competitions/m-HackAI";
import CozmoClench from "./Competitions/m-CozmoClench";
import TechfestOlympiad from "./Competitions/m-TechfestOlympiad";
import Codecode from "./Competitions/m-codecode";
import UrbanFuturism from "./Competitions/m-UrbanFuturism";
import AtomQuest from "./Competitions/m-AtomQuest";
import TechAid from "./Competitions/m-TechAid";
import Mechanzo from "./Competitions/m-mechanzo";
import JoinTeam from "./Teams/joinTeam";
import AddParti from "./Teams/add_parti";
import SingleParti from "./Teams/single_parti";

const MInternal = () => {
  const { compiName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // Check compiName and perform redirections
    if (compiName === "cozmo") {
      navigate("/competitions/cozmoclench");
    } else if (compiName === "mesh") {
      navigate("/competitions/meshmerize");
    } else if (compiName === "tfo") {
      navigate("/competitions/techfest%20olympiad");
    }
    // Add more conditions as needed for other compiNames
  }, [navigate, compiName]);
  const [data, setData] = useState([]);
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const google_id = user ? user.email : null;

  useLayoutEffect(() => {
    console.log(window.scrollY);
    window.scrollTo(0, 0);
  });

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

    return card_data.map((data) => (
      <div className={`container ${styles.wdata}`}>
        <div className="row">
          <div className={styles.sponsor}>
            {data.sponsorImg && (
              <h3>
                Sponsored by{" "}
                <img
                  src={data.sponsorImg}
                  alt="Sponsor"
                  className={styles.sponsorImg}
                />
              </h3>
            )}
          </div>
          {user === null ? (
            <div className={styles.compi_reg}></div>
          ) : data.is_team_registered ? (
            <div className={styles.youhave}>
              {" "}
              You have successfully with your email <span>
                {user.email}
              </span>{" "}
              and your team ID is <span>{data.team_id}</span>
            </div>
          ) : (
            <div className={styles.compi_reg}></div>
          )}
          <div className={styles.mImg}>
            <img src={frame} alt="Frame" className={styles.mImgFrame} />
            <img src={data.img} alt={compiName} className={styles.mImgCompi} />
          </div>
          <div className={styles.basicInfo}>
            <h1 className={styles.heading}>{compiName}</h1>
            <h3 className={styles.compi_prize}> INR {data.prize} PRIZE</h3>
          </div>

          <div className={styles.team_reg}>
            {user === null ? (
              <div className={styles.doIt}>
                <div className={styles.int_reg} onClick={handleGoogleSignIn}>
                  <div className={styles.reg_rect1}></div>
                  <div className={styles.reg_rect2}>
                    <Link to={`register`}>Register</Link>
                  </div>
                </div>
              </div>
            ) : data.is_team_leader ? (
              <div className={styles.lol_reg}>
                <div className={styles.compi_team}>
                  <DissolveTeam />
                  <div
                    className={`${styles.add_parti} ${styles.single_team}`}
                    style={{ zIndex: "3" }}
                  >
                    <div className={styles.single_team}>
                      <AddParti />
                    </div>
                  </div>
                </div>
              </div>
            ) : data.is_parti ? (
              <div>
                <LeaveTeam />
              </div>
            ) : data.is_registered ? (
              <div className={styles.lol_reg}>
                You have registered successfully!
                {data.max_team_length === 1 ? (
                  <></>
                ) : (
                  <div className={styles.compi_team}>
                    <div className={styles.create_team}>
                      <div className={styles.create_rect1}></div>
                      <div className={styles.create_rect2}>
                        <Link to={`createTeam`}>Create Team</Link>
                      </div>
                    </div>
                      <JoinTeam />
                      <SingleParti />
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.doIt}>
                <div className={styles.int_reg}>
                  <div className={styles.reg_rect1}></div>
                  <div className={styles.reg_rect2}>
                    <Link to={`register`}>Register</Link>
                  </div>
                </div>
                <div className={styles.share}>
                  <div className={styles.share_rect1}></div>
                  <div className={styles.share_rect2}>
                    <WhatsappShareButton />
                  </div>
                </div>
              </div>
            )}
          </div>
          {data.statement && (
            <div className={styles.statement}>
              <div className={styles.stat_rect1}></div>
              <div className={styles.stat_rect2}>
                <a
                  href={data.statement}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Problem Statement
                </a>
              </div>
            </div>
          )}
        </div>
        {compiName === "meshmerize" && <Meshmerize />}
        {compiName === "mechanzo-league" && <Mechanzo />}
        {compiName === "hack-aI" && <HackAI />}
        {compiName === "cozmoclench" && <CozmoClench />}
        {compiName === "techfest olympiad" && <TechfestOlympiad />}
        {compiName === "codecode" && <Codecode />}
        {compiName === "urban-furturism" && <UrbanFuturism />}
        {compiName === "tech-aid" && <TechAid />}
        {compiName === "atom-quest" && <AtomQuest />}
      </div>
    ));
  };

  const imageList = [backimg1, backimg2];

  const top = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url(${imageList[0]})`, // Initial background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    position: "absolute",
    top: "0",
    zIndex: "-1",
    animation: "changeImage 5s infinite",
    backgroundAttachment: 'fixed',
    paddingBottom: '170px',
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
      {information()}
    </div>
  );
};

export default MInternal;
