import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import fin from "./assets/sum1.jpg";

function Summit() {
  const dataSummit = [
    {
      regLink: "fintech/register",
      exploreLink: "fintech",
      name: "Fintech Summit",
      img: fin,
      desc: "I am the god of the multiverse, infinity ultron is my bitch",
    },
    {
      regLink: "industry/register",
      exploreLink: "industry",
      name: "Industry 4.0",
      img: fin,
      desc: "I am the god of the multiverse, infinity ultron is my bitch",
    },
  ];

  const Card = ({ data }) => {
    return (
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
                    <div className={styles.CardN}>
                      {data.name}
                    </div>
                    <div className={styles.CardD}>{data.desc}</div>
                  </div>
                </div>
                <div className={styles.RegExp}>
                  <div className={styles.Reg}>
                    <Link to={data.regLink}>Register</Link>
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
    );
  };

  return (
    <div className={styles.Summit}>
      <div className={styles.SummitHead}>
        <h1>International Summits</h1>
      </div>
      <div className={styles.SummitCO}>
        <div className="container">
          <div className="row">
            {dataSummit.map((summit, index) => (
              <Card key={index} data={summit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summit;
