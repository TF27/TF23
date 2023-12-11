import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../contexts/AuthContext";
import styles from "./home.module.css";

function Summit() {
  const [data, setData] = useState([]);
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const google_id = user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/summits", {
          headers: {
            "X-Email": google_id,
          },
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [google_id]);

  // const dataSummit = [
  //   {
  //     regLink: "fintech/register",
  //     exploreLink: "fintech",
  //     name: "Fintech Summit",
  //     img: fin,
  //     desc: "I am the god of the multiverse, infinity ultron is my bitch",
  //   },
  //   {
  //     regLink: "industry/register",
  //     exploreLink: "industry",
  //     name: "Industry 4.0",
  //     img: fin,
  //     desc: "I am the god of the multiverse, infinity ultron is my bitch",
  //   },
  // ];

  const card = () => {
    return data.map((data) => (
      <>
        <div className={`${styles.SummitCOO}`}>
          <div className={styles.SummitCard}>
            <div className={styles.SummitCard_rect1}>
              <div className={styles.SummitCard_rect2}>
                <div
                  className={styles.CardHead}
                  style={{
                    background: `url(${data.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "210px",
                  }}
                >
                  <div className={styles.CardND}>
                    <div className={styles.CardN}>{data.name}</div>
                    <div className={styles.CardD}>{data.desc}</div>
                  </div>
                </div>
                <div className={styles.RegExp}>
                  <div className={styles.Reg}>
                    {user == null ? (
                      <button onClick={handleGoogleSignIn}>Register</button>
                    ) : data.is_paid ? (
                      <a href="">Registered</a>
                    ) : data.is_registered ? (
                      <a href="">Pay Now</a>
                    ) : (
                      <Link to={data.regLink}>Register</Link>
                    )}
                  </div>
                  <div className={styles.Exp}>
                    <Link to={data.exploreLink}>Explore</Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </>
    ));
  };

  return (
    <div className={styles.Summit}>
      <div className={styles.SummitHead}>
        <h1>International Summits</h1>
      </div>
      <div className={styles.SummitCO}>
        <div className="container">
          <div className="row">
            {/* {data.map((summit, index) => (
              <Card key={index} data={summit} />
            ))} */}
            {card()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summit;
