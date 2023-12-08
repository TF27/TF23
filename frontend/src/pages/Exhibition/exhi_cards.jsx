import { useEffect, useState } from "react";
import { UserAuth } from "./../../contexts/AuthContext";
import axios from "axios";
// import CustomPopup from "../../components/Popup/index2";

import styles from "./cards.module.css";
// import plus from '../Summit/assets/plus.svg';

const Exhibitions = () => {
  const [data, setData] = useState([]);
  const { googleSignIn, user } = UserAuth();
  const [popupData, setPopupData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await handleGoogleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/faces/");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) => item.category === "Exhi");
  const sortedData = filteredData.sort((a, b) => b.ching_id - a.ching_id);

  const openPopup = (data) => {
    setPopupData(data);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupData(null);
  };

  const Cards = () => {
    return sortedData.map((data) => (
      <>
        <div
          key={data.id}
          className={`col-lg-4 col-sm-6 col-12 ${styles.cardA}`}
        >
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(${data.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => openPopup(data)}
          >
            {/* <div className={styles.plus}>
                <img src={plus} alt="plus" />
            </div> */}
            <div className={styles.infoS}>
              <div className={styles.holao}>
                <h4>{data.name}</h4>
                <p>
                  {data.designation}
                  <br />
                  {data.company}
                </p>
              </div>
              <div className={styles.desco}>
                <p>{data.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    ));
  };

  return (
    <>
      <div className={styles.exhiCard}>
        <div className="container">
          <div className="row">{Cards()}</div>
        </div>
        {/* {isPopupOpen && (
            <CustomPopup onClose={() => closePopup()} show={isPopupOpen} style={{width: '50%'}}>
                <h2>
                    {popupData.name}
                </h2>
                <div className={styles.info}>
                    <div>
                      <img src={popupData.img} alt={popupData.name} />
                    </div>
                    <div>
                      <p>{popupData.desc}</p>
                    </div>
                </div>
            </CustomPopup>
            )} */}
      </div>
    </>
  );
};

export default Exhibitions;
