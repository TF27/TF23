import React, { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../../contexts/AuthContext";
import styles from "./internal.module.css";
import CozmoClench from "./Competitions/CozmoClench";
import DissolveTeam from "./Teams/dissolveTeam";
import LeaveTeam from "./Teams/leaveTeam";
// Import images
import backimg1 from "./../static/img/exp_bg.png";
import backimg2 from "./../static/img/exp_bg2.png";
import Meshmerize from "./Competitions/Meshmerize";
import frame from "./../static/card/Frame.png";
import HackAI from "./Competitions/HackAI";
import Codecode from "./Competitions/Codecode";
import TechAid from "./Competitions/TechAid";
import AtomQuest from "./Competitions/AtomQuest";
import JoinTeam from "./Teams/joinTeam";
import Mechanzo from "./Competitions/mechanzo";
import TechfestOlympiad from "./Competitions/TechfestOlympiad";
import UrbanFuturism from "./Competitions/UrbanFuturism";
import SingleParti from "./Teams/single_parti";
import AddParti from "./Teams/add_parti";
import Robocapleague from "./Competitions/robocapleague";
import Dronelog from "./Competitions/Dronelog";
import Task from "./Competitions/Task";
import Iot from "./Competitions/Iot";

const Internal = () => {
  const { compiName } = useParams();
  const [ roboCamp, setRoboCamp ] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // Check compiName and perform redirections
    if (compiName === "cozmo") {
      navigate("/competitions/cozmoclench");
    } else if (compiName === "mesh") {
      navigate("/competitions/meshmerize");
    } else if (compiName === "tfo") {
      navigate("/competitions/techfest%20olympiad");
    } else if (compiName === "uf") {
      navigate("/competitions/urban-futurism");
    } else if (compiName === "taskwhiz") {
      navigate("/competitions/task%20whiz");
    } else if (compiName === "ai") {
      navigate("/workshops/artificial%20intelligence");
    } else if (compiName === "ml") {
      navigate("/workshops/machine%20learning");
    } else if (compiName === "workshop") {
      navigate("/workshops");
    } else if (compiName === "chatgpt") {
      navigate("/workshops/chatgpt%20(prompt%20engineering)");
    } else if (compiName === "hacking") {
      navigate("/workshops/ethical%20hacking");
    } else if (compiName === "google") {
      navigate("/workshops/data%20to%20aI%20by%20google");
    } else if (compiName === "aws") {
      navigate("/workshops/cloud%20computing%20by%20amazon");
    } else if (compiName === "tih") {
        navigate("/competitions/tIH%20-%20ioT");
    } else if (compiName === "robocap league") {
      setRoboCamp(true);
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

  useLayoutEffect(() => {
    console.log(window.scrollY);
    window.scrollTo(0, 0);
  });

  const google_id = user ? user.email : null;

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
          <div className={`col-12 col-lg-4 ${styles.leftdata}`}>
            {/* <img src={data.img} alt={compiName} className={styles.compi_img}/> */}
            <div className={styles.wImg}>
              <img src={frame} alt="Frame" className={styles.imgFrame} />
              <img src={data.img} alt={compiName} className={styles.imgCompi} />
            </div>
            <h3 className={styles.compi_prize}> INR {data.prize} PRIZE</h3>
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
          <div className={`col-12 col-lg-8 ${styles.rightdata}`}>
            <div className={styles.sponsor}>
              {data.sponsorImg && (
                <a href={data.sponsorLink} target="_blank">
                  <h3>
                    Sponsored by{" "}
                    <img
                      src={data.sponsorImg}
                      alt="Sponsor"
                      className={styles.sponsorImg}
                    />
                  </h3>
                </a>
              )}
            </div>
            {user === null ? (
              <div className={styles.compi_reg}></div>
            ) : data.is_team_registered ? (
              <div className={styles.youhave}>
                {" "}
                You have successfully registered with your email{" "}
                <span>{user.email}</span> and your team ID is{" "}
                <span>{data.team_id}</span>
              </div>
            ) : (
              <div className={styles.compi_reg}></div>
            )}
            {compiName === "cozmoclench" && <CozmoClench />}
            {compiName === "meshmerize" && <Meshmerize />}
            {compiName === "mechanzo-league" && <Mechanzo />}
            {compiName === "hack-aI" && <HackAI />}
            {compiName === "techfest olympiad" && <TechfestOlympiad />}
            {compiName === "codecode" && <Codecode />}
            {compiName === "tech-aid" && <TechAid />}
            {compiName === "urban-futurism" && <UrbanFuturism />}
            {compiName === "atom-quest" && <AtomQuest />}
            {compiName === "robocap league" && <Robocapleague />}
            {compiName === "dronelog" && <Dronelog />}
            {compiName === "task whiz" && <Task />}
            {compiName === "tIH - ioT" && <Iot />}

            <div className={styles.team_reg}>
              {user === null ? (
                <div>
                  <div className={styles.int_reg} onClick={handleGoogleSignIn}>
                    <div className={styles.reg_rect1}></div>
                    <div className={styles.reg_rect2}>
                      <Link to={`register`}>Register</Link>
                    </div>
                  </div>
                </div>
              ) : data.is_team_leader ? (
                <div>
                  <div className={styles.compi_team}>
                    <div className={styles.single_team}>
                      <AddParti />
                    </div>
                    <DissolveTeam />
                  </div>
                </div>
              ) : data.is_parti ? (
                <div>
                  <LeaveTeam />
                </div>
              ) : data.is_registered ? (
                <div className={styles.lolReg} style={{ marginTop: "20px" }}>
                  You have registered successfully with{" "}
                  <span>{user?.email}</span>
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
                <div>
                  <div className={styles.int_reg}>
                    <div className={styles.reg_rect1}></div>
                    <div className={styles.reg_rect2}>
                      {roboCamp ? (
                        <a
                          href="https://www.robocapleague.com/apply"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register
                        </a>
                      ) : (
                        <Link to={`register`}>Register</Link>
                      )}
                      {/* <Link to={`register`}>Register</Link> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const imageList = [backimg1, backimg2];

  const top = {
    backgroundImage: `url(${imageList[0]})`, // Initial background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100vw",
    position: "absolute",
    top: "0",
    zIndex: "-1",
    animation: "changeImage 5s infinite",
    backgroundAttachment: "fixed",
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
