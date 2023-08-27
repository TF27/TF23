import React from 'react';
import technorion from './../../assets/compi/technorion.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../../contexts/AuthContext";
import styles from './compi.module.css';
import Border from '../../components/DoubleBorder/doubleborder';
// import WhatsappShareButton from '../../components/share/whatsapp';
import indiamap from './static/img/india.png'

// Images
import dot from './static/card/dot.png';
import chand from './static/card/chand.png';
import espark from './static/card/espark.png';
import fspark from './static/card/fspark.png';
import WhatsappShareButton from '../../components/share/whatsapp';


// Here is the code
const Technorion = () => {

  const [data, setData] = useState([]);
  const { user } = UserAuth();

  const google_id = user?.email;

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

  const card = () => {
    const zonals = data.filter(item => item.genre === '1')

    return zonals.map(data => (
      <div key={data.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
  
      <div className={styles.compi_card}>
        <div className={styles.card_rect1}></div>
          <div className={styles.card_rect2}></div>
            <div className={styles.card_tag}>
              <span><img src={dot} alt='dot'/></span>
              <h3>{data.tag}</h3>
              <span><img src={dot} alt='dot'/></span>
            </div>
            <div className={styles.card_imgo}><img src={data.img} className={styles.card_img} alt={data.name}/></div>
            <div className={styles.card_title}>
              <h3>{data.name}</h3>
              <div className={styles.card_sustitle}>{data.prize} Prize</div>
            </div>
            <div className={styles.card_post}>
              <div className={styles.card_desc}>{data.desc}</div>
              <div className={styles.card_share}>
                <div className={styles.share_border}>
                  <div className={styles.share_rect1}>
                    <div className={styles.share_rect2}>
                      Share
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            <div className={styles.card_regexp}>
              {data.is_registered ? (<div className={styles.card_reg}>Registered</div>) : (
                <div className={styles.card_reg}><Link to={`${data.name}/register`}>Register</Link></div>
              )}
              <div className={styles.card_exp}><Link to={data.name}>Explore</Link></div>
            </div>
          </div>
          {/* </div>
          </div> */}
      </div>
      

    ));
  };

  const Card1 = () =>{
    const zonals = data.filter(item => item.genre === '1')
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(true);
    }

    const handleLeave = () => {
      setIsHovered(false);
    }


    return zonals.map(data => (
      <div key={data.id} className='col-lg-3'>
        <div className={styles.card1_cont} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          {isHovered ? 
            <div>

            </div>
          :
          <div>
          
          </div>
          }
        </div>
      </div>
      

    ));
  }

  return (
    <div className={styles.Technorion}>
    <h1>TECHNORION</h1>
    <div className={styles.desc}>
      <p className={styles.descT}>
        Welding is a critical activity for manufacturing. The threshold for welding error is the bare minimum. Build an ML
        model to predict welding defects in the materials by developing algorithms using process parameters such as ambient
        temperature, welding travel speed, etc. You can also perform advanced analytics on welder performance using machine
        data and welder details.
      </p>
      <div className={styles.indiamapContainer}>
      <div className={styles.imageContainer}>
          <img src={indiamap} alt="india" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <p>
            Your text here <br />
            sbjfbskfbnasktydfhyfjyudbjajhcbd <br />
            sdfdctrgdhjghtxghgfafsaavfd <br />
            hbfshejbfujsbfsfbfbsh <br />
            jdhfbauikshfikahsdikuashndjasbfjhsdfbj <br />
          </p>
        </div>
      </div>
    </div>
    <div className='technorion_cards'>
      <div className='container' style={{ maxWidth: "90%" }}>
        <div className='row'>
          {card()}
          {/* <Card1 /> */}
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Technorion;