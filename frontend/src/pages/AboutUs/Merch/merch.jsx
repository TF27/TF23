import black from './black.jpg';
import white from './white.jpg';
import hoodi from './hoodi.jpg';
import styles from "./merch.module.css";
import bf from './bg.png';

const Merch = () => {
  const Border = ({ soso, price, pitch, blink }) => {
    return (
      <>
        <div>
          <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}>
              <img src={soso} alt="Techfest Merchendise" />
            </div>
          </div>
          <div className={styles.price}>
            Price: INR {price} <span>{pitch}</span>
          </div>
          <div className={styles.b_rect1}>
            
                <a href={blink} target="_blank"><div className={styles.b_rect2}>Buy Now</div></a>
            {/* </div> */}
          </div>
        </div>
      </>
    );
  };

  const bgstyles = {
    backgroundImage: `url(${bf})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    // paddingBottom: '30vh',
  };

  return (
    <div className={styles.merch} style={bgstyles}>
        <div className={styles.overlay}>
      <h1>TECHFEST STORE</h1>
      <p className={styles.m1}>
        Unleash the enchantment, wear the wonder – Embrace the magic and mystery
        with our mesmerizing technological festival merch
      </p>
      <div>
        <div className={styles.earlye}>
          Early Bird Offer
        </div>
        <div className={styles.bigO}>
          <Border soso={black} price={349} pitch={479} blink='https://tshirtsnearme.in/product/techfest23-iit-bombay-black-t-shirt/'/>
          <Border soso={white} price={349} pitch={479} blink='https://tshirtsnearme.in/product/techfest23-iit-bombay-white-t-shirt-copy/'/>
        </div>
        <div className={styles.bigO}>
          <Border soso={hoodi} price={649} pitch={699} blink='https://tshirtsnearme.in/product/techfest23-iit-bombay-navy-blue-hoodie/'/>
          {/* <Border soso={i1} price={500} blink='hola hoooo'/> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Merch;
