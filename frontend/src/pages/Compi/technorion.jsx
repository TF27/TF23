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
  const { googleSignIn, user, logOut } = UserAuth();

  const handleGoogleSignIn = async () => {
    try{
        await googleSignIn();
    } catch (error) {
        console.log(error);
    }
};

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
  }, [google_id]);

  const card = () => {
    const zonals = data.filter(item => item.genre === '1')

    return zonals.map(data => (
      <div key={data.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
  
      <div className={styles.compi_card}>
          <div className={styles.card_rect1}></div>
          <div className={styles.card_rect2}></div>
          <div className={styles.noReg}>
            {/* <Link to={data.name}></Link> */}
            <div className={styles.card_tag}>
              <span><img src={dot} alt='dot'/></span>
              <h3 className={styles.card_tag}>{data.tag}</h3>
              <span><img src={dot} alt='dot'/></span>
            </div>
            <div className={styles.card_imgo}><img src={data.img} className={styles.card_img} alt={data.name}/></div>
            <img className={styles.chand} src={chand} alt='moon' />
            <img className={styles.espark} src={dot} alt='moon' />
            <img className={styles.fspark} src={fspark} alt='moon' />
            {/* <img className={styles.chand2} src={chand} alt='moon' /> */}
            <img className={styles.espark2} src={espark} alt='moon' />
            <img className={styles.fspark2} src={fspark} alt='moon' />
            <img className={styles.espark3} src={dot} alt='moon' />
            <img className={styles.fspark3} src={fspark} alt='moon' />
            <img className={styles.espark4} src={espark} alt='moon' />
            <img className={styles.fspark4} src={fspark} alt='moon' /> 
            <div className={styles.card_title}>
              <h3>{data.name}</h3>
              <div className={styles.card_sustitle}>INR {data.prize} Prize</div>
            </div>
            <div className={styles.card_post}>
              <div className={styles.card_desc}>{data.desc}</div>
              <div className={styles.card_share}>
                <div className={styles.share_border}>
                  <div className={styles.share_rect1}>
                    <div className={styles.share_rect2}>
                      <WhatsappShareButton />
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          <div>
            
            <div className={styles.card_regexp}>
              {data.is_registered ? (<div className={styles.card_reg}>Registered</div>) 
              : user ? (
                <div className={styles.card_reg}><Link to={`${data.name}/register`}>Register</Link></div>
              ): (
                <div className={styles.card_reg}><button onClick={handleGoogleSignIn}>Register</button></div>
              )}
              <div className={styles.card_exp}><Link to={data.name}>Explore</Link></div>
            </div>
          </div>
          </div>
          {/* </div>
          </div> */}
      </div>
      

    ));
  };

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