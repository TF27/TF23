import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import styles from "./compi.module.css";
import indiamap from "./static/img/map.png";

// Images
import dot from "./static/card/dot.png";
import chand from "./static/card/chand.png";
import espark from "./static/card/espark.png";
import fspark from "./static/card/fspark.png";
import WhatsappShareButton from "../../components/share/whatsapp";

// Here is the code
const Technorion = () => {
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
        const response = await axios.get("/api/compi_card/", {
          headers: {
            "X-Email": google_id,
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
    const zonals = data.filter((item) => item.genre === "1");

    return zonals.map((data) => (
      <div key={data.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className={styles.compi_card}>
          <div className={styles.card_rect1}></div>
          <div className={styles.card_rect2}></div>
          <div className={styles.noReg}>
            <Link to={data.name}></Link>
            <div className={styles.card_tag}>
              <span>
                <img src={dot} alt="dot" />
              </span>
              <h3 className={styles.card_tag}>{data.tag}</h3>
              <span>
                <img src={dot} alt="dot" />
              </span>
            </div>
            <div className={styles.card_imgo}>
              <img src={data.img} className={styles.card_img} alt={data.name} />
            </div>
            <img className={styles.chand} src={chand} alt="moon" />
            <img className={styles.espark} src={dot} alt="moon" />
            <img className={styles.fspark} src={fspark} alt="moon" />
            {/* <img className={styles.chand2} src={chand} alt='moon' /> */}
            <img className={styles.espark2} src={espark} alt="moon" />
            <img className={styles.fspark2} src={fspark} alt="moon" />
            <img className={styles.espark3} src={dot} alt="moon" />
            <img className={styles.fspark3} src={fspark} alt="moon" />
            <img className={styles.espark4} src={espark} alt="moon" />
            <img className={styles.fspark4} src={fspark} alt="moon" />
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
              {/* {data.is_registered ? (
                        <div className={styles.card_reg}>Registered</div>
                     ) : user ? (
                        <div className={styles.card_reg}>
                           <Link to={`${data.name}/register`}>Register</Link>
                        </div>
                     ) : (
                        <div className={styles.card_reg}>
                           <button onClick={handleGoogleSignIn}>
                              Register
                           </button>
                        </div>
                     )} */}
              {user === null ? (
                <div className={styles.card_reg}>
                  <button onClick={handleGoogleSignIn}>Register</button>
                </div>
              ) : data.is_registered ? (
                <div className={styles.card_reg}>Registered</div>
              ) : (
                <div className={styles.card_reg}>
                  <Link to={`${data.name}/register`}>Register</Link>
                </div>
              )}
              <div className={styles.card_exp}>
                <Link to={data.name}>Explore</Link>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
          </div> */}
      </div>
    ));
  };

  const othercard = () => {
    const zonals = data.filter((item) => item.genre === "4");

    return zonals.map((data) => (
      <div key={data.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className={styles.compi_card}>
          <div className={styles.card_rect1}></div>
          <div className={styles.card_rect2}></div>
          <div className={styles.noReg}>
            <Link to={data.name}></Link>
            <div className={styles.card_tag}>
              <span>
                <img src={dot} alt="dot" />
              </span>
              <h3 className={styles.card_tag}>{data.tag}</h3>
              <span>
                <img src={dot} alt="dot" />
              </span>
            </div>
            <div className={styles.card_imgo}>
              <img src={data.img} className={styles.card_img} alt={data.name} />
            </div>
            <img className={styles.chand} src={chand} alt="moon" />
            <img className={styles.espark} src={dot} alt="moon" />
            <img className={styles.fspark} src={fspark} alt="moon" />
            {/* <img className={styles.chand2} src={chand} alt='moon' /> */}
            <img className={styles.espark2} src={espark} alt="moon" />
            <img className={styles.fspark2} src={fspark} alt="moon" />
            <img className={styles.espark3} src={dot} alt="moon" />
            <img className={styles.fspark3} src={fspark} alt="moon" />
            <img className={styles.espark4} src={espark} alt="moon" />
            <img className={styles.fspark4} src={fspark} alt="moon" />
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
              {/* {data.is_registered ? (
                        <div className={styles.card_reg}>Registered</div>
                     ) : user ? (
                        <div className={styles.card_reg}>
                           <Link to={`${data.name}/register`}>Register</Link>
                        </div>
                     ) : (
                        <div className={styles.card_reg}>
                           <button onClick={handleGoogleSignIn}>
                              Register
                           </button>
                        </div>
                     )} */}
              {user === null ? (
                <div className={styles.card_reg}>
                  <button onClick={handleGoogleSignIn}>Register</button>
                </div>
              ) : data.is_registered ? (
                <div className={styles.card_reg}>Registered</div>
              ) : (
                <div className={styles.card_reg}>
                  <Link to={`${data.name}/register`}>Register</Link>
                </div>
              )}
              <div className={styles.card_exp}>
                <Link to={data.name}>Explore</Link>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
          </div> */}
      </div>
    ));
  };
  const markiCompi = () => {
    const zonals = data.filter((item) => item.genre === "2");

    return zonals.map((data) => (
      <div key={data.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className={styles.compi_card}>
          <div className={styles.card_rect1}></div>
          <div className={styles.card_rect2}></div>
          <div className={styles.noReg}>
            {/* <Link to={data.name}></Link> */}
            <div className={styles.card_tag}>
              <span>
                <img src={dot} alt="dot" />
              </span>
              <h3 className={styles.card_tag}>{data.tag}</h3>
              <span>
                <img src={dot} alt="dot" />
              </span>
            </div>
            <div className={styles.card_imgo}>
              <img src={data.img} className={styles.card_img} alt={data.name} />
            </div>
            <img className={styles.chand} src={chand} alt="moon" />
            <img className={styles.espark} src={dot} alt="moon" />
            <img className={styles.fspark} src={fspark} alt="moon" />
            {/* <img className={styles.chand2} src={chand} alt='moon' /> */}
            <img className={styles.espark2} src={espark} alt="moon" />
            <img className={styles.fspark2} src={fspark} alt="moon" />
            <img className={styles.espark3} src={dot} alt="moon" />
            <img className={styles.fspark3} src={fspark} alt="moon" />
            <img className={styles.espark4} src={espark} alt="moon" />
            <img className={styles.fspark4} src={fspark} alt="moon" />
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
            {user === null ? (
                <div className={styles.card_reg}>
                  <button onClick={handleGoogleSignIn}>Register</button>
                </div>
              ) : data.is_registered ? (
                <div className={styles.card_reg}>Registered</div>
              ) : (
                <div className={styles.card_reg}>
                  <Link to={`${data.name}/register`}>Register</Link>
                </div>
              )}
              <div className={styles.card_exp}>
                <Link to={data.name}>Explore</Link>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
          </div> */}
      </div>
    ));
  };

  const ideatesCard = () => {
    const zonals = data.filter((item) => item.genre === "3");

    return zonals.map((data) => (
      <div key={data.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className={styles.compi_card}>
          <div className={styles.card_rect1}></div>
          <div className={styles.card_rect2}></div>
          <div className={styles.noReg}>
            {/* <Link to={data.name}></Link> */}
            <div className={styles.card_tag}>
              <span>
                <img src={dot} alt="zonal city" />
              </span>
              <h3 className={styles.card_tag}>{data.tag}</h3>
              <span>
                <img src={dot} alt="zonal city" />
              </span>
            </div>
            <div className={styles.card_imgo}>
              <img src={data.img} className={styles.card_img} alt={data.name} />
            </div>
            <img className={styles.chand} src={chand} alt="moon" />
            <img className={styles.espark} src={dot} alt="moon" />
            <img className={styles.fspark} src={fspark} alt="moon" />
            {/* <img className={styles.chand2} src={chand} alt='moon' /> */}
            <img className={styles.espark2} src={espark} alt="moon" />
            <img className={styles.fspark2} src={fspark} alt="moon" />
            <img className={styles.espark3} src={dot} alt="moon" />
            <img className={styles.fspark3} src={fspark} alt="moon" />
            <img className={styles.espark4} src={espark} alt="moon" />
            <img className={styles.fspark4} src={fspark} alt="moon" />
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
            {user === null ? (
                <div className={styles.card_reg}>
                  <button onClick={handleGoogleSignIn}>Register</button>
                </div>
              ) : data.is_registered ? (
                <div className={styles.card_reg}>Registered</div>
              ) : (
                <div className={styles.card_reg}>
                  <Link to={`${data.name}/register`}>Register</Link>
                </div>
              )}
              <div className={styles.card_exp}>
                <Link to={data.name}>Explore</Link>
              </div>
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
      <div className="blackGradient-to-bottom" />
      <h1>TECHNORION</h1>
      <div className={styles.desc}>
        <div className={styles.desc_cont}>
          <p className={styles.descT}>
            After a successful revamp last year, Techfest is back on the grounds
            of IIT Bombay, rising greater than ever before. With an aim to
            promote creative, innovative and technical skills amongst the youth,
            Techfest is coming to the cities near you through Technorion, our
            Zonal competitions. We believe everyone should get an equal
            opportunity to showcase their talents and distance should not create
            a hindrance. With this underlying spirit, we announce the following
            Technorion Zonal cities.{" "}
          </p>
          <div className={styles.textContainer}>
            <table border="1">
              <tr>
                <th>College</th>
                <th>CITY</th>
                <th>DATE</th>
              </tr>
              <tr>
                <td>Indian Institute of Technology</td>
                <td>Mumbai</td>
                <td>08/10/23</td>
              </tr>

              <tr>
                <td>School of Research and Technology</td>
                <td>Bhopal</td>
                <td>15/10/23</td>
              </tr>
              <tr>
                <td>Shri Ramswaroop Memorial University</td>
                <td>Lucknow</td>
                <td>15/10/23</td>
              </tr>
              <tr>
                <td>Swami Keshavanand Institute of Technology</td>
                <td>Jaipur</td>
                <td>15/10/23</td>
              </tr>
              <tr>
                <td>Global Academy of Technology</td>
                <td>Bangalore</td>
                <td>28/10/23</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <img src={indiamap} alt="india" className={styles.descimage} />
        </div>
      </div>
      <div className="technorion_cards">
        <div className="container" style={{ maxWidth: "90%" }}>
          <div className="row">
            {othercard()}{card()} {markiCompi()}
          </div>
        </div>
      </div>
      {/* <div className="technorion_cards">
            <div className="container" style={{ maxWidth: "90%" }}>
               <div className="row">{markiCompi()}</div>
            </div>
         </div> */}
      <div className="technorion_cards">
        <div className="container" style={{ maxWidth: "90%" }}>
          <div className="row">{ideatesCard()}</div>
        </div>
      </div>
    </div>
  );
};

export default Technorion;
