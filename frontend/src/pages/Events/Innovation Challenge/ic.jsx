import React, { useEffect, useState } from "react";
import bg from "./assets/bg.png";
import heading_w from "./assets/heading.png";
import heading_m from "./assets/heading_m.png";
import top_w from "./assets/top_w.png";
import top_m from "./assets/top_m.png";
import styles from "./ic.module.css";

const IC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    // console.log(window.innerWidth)
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const heading = isMobile ? heading_m : heading_w;
  const top = isMobile ? top_m : top_w;

  const bg_styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    backgroundAttachment: "fixed",
  };

  return (
    <div className={styles.ic} style={bg_styles}>
      <div className={styles.ic_head}>
        <img src={heading} className={styles.icHeading} />
        <img src={top} className={styles.icTop} />
      </div>
      <div className={styles.icMain}>
        <h1 className={styles.icAbout}>ABOUT THE CHALLENGE</h1>
        <div className={styles.icGen}>
          <div>
            <h2>
              Green Innovation: Technological Breakthroughs for a Sustainable
              Tomorrow
            </h2>
            <p>
              With the sole moto of nurturing young talent and promoting
              innovation thinking among the school students. Techfest is
              conducting Innovation Challenge in association with Science
              Olympiad Association(SOF) for school students across India. It is
              a platform for young visionaries and problem solvers to showcase
              their creativity, ingenuity, and technical prowess.
            </p>
          </div>
          <div>
            <h1>Structure</h1>
            <p>
              A special question section of Techfest-SOF Innovation Challenge
              will be provided in the SOF-National Science Olympiad Examination
              to be held on 17th October, 21st November, and 5th December 2023
              for 8-10th standard students, to which answer has to be submitted
              online in the given window.
            </p>
          </div>
          <div>
            <h1>Rewards</h1>
            <ul>
              <li>
                Each participant will be awarded a Certificate of Participation
                from SOF-Techfest, IIT Bombay.
              </li>
              <li>
                Top 20 students will be invited to Techfest 2023-24 with an
                accompanying adult on 27-29th December 2023 with travel and
                accommodation provided by Techfest, IIT Bombay.
              </li>
              <li>
                Winner will be awarded trophies, gifts, certificates, and a
                visit to ISRO's Vikram Sarabhai Space Centre, Thiruvananthapuram
                with all expenses reimbursed.
              </li>
            </ul>
          </div>
          <div>
            <h1>Guidelines</h1>
            <ul>
              <li>
                Appearing in the Innovation Challenge is not compulsory. In case
                you wish, please visit www.techfest.org/innovationchallenge. No
                registration fee is to be paid.
              </li>
              <li>
                To participate, read the following problem statement and upload
                the answer in document format on email -{" "}
              </li>
              <li>
                Answers should be submitted in the given window only as per the
                following schedule
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.icDates}>
          <div className={styles.icDate_o}>
            <div className={styles.icDate_i}>
              <div className={styles.icDate_t}>NSO - 17th October</div>
              <div className={styles.icDate_b}>22 October - 10 AM to 10 PM</div>
            </div>
          </div>
          <div className={styles.icDate_o}>
            <div className={styles.icDate_i}>
              <div className={styles.icDate_t}>NSO - 21st November</div>
              <div className={styles.icDate_b}>26 November - 10 AM to 10 PM</div>
            </div>
          </div>
          <div className={styles.icDate_o}>
            <div className={styles.icDate_i}>
              <div className={styles.icDate_t}>NSO - 5th December</div>
              <div className={styles.icDate_b}>10 December - 10 AM to 10 PM</div>
            </div>
          </div>
        </div>
        <div className={styles.icGen}>
          <div style={{ marginTop: "38px" }}>
            <h1>Sample Problem Statement</h1>
            <p>
              Address the challenges and need for a Sustainable Water Supply
              System for rural areas encompassing agricultural and residential
              demands, and give solutions with innovative and ingenious ideas
            </p>
          </div>
        </div>
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className={styles.icContact}>
          <div className={styles.icContact_o}>
            <div className={styles.icContact_i}>
              <h2>Sarvesh Bang</h2>
              <p>
                sarvesh@techfest.org <br /> +91 87667 84117
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IC;
