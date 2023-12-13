import i1 from "./i1.png";
import styles from "./merch.module.css";
import bf from './bg.png';

const Merch = () => {
  const Border = ({ soso, price, blink }) => {
    return (
      <>
        <div>
          <div className={styles.titSpn_rect1}>
            <div className={styles.titSpn_rect2}>
              <img src={soso} alt="Techfest Merchendise" />
            </div>
          </div>
          <div className={styles.price}>
            Price: INR {price}
          </div>
          <div className={styles.b_rect1}>
            <div className={styles.b_rect2}>
                <a href={blink} target="_blank">Buy Now</a>
            </div>
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
        <div className={styles.bigO}>
          <Border soso={i1} price={500} blink='hola hoooo'/>
          <Border soso={i1} price={500} blink='hola hoooo'/>
        </div>
        <div className={styles.bigO}>
          <Border soso={i1} price={500} blink='hola hoooo'/>
          <Border soso={i1} price={500} blink='hola hoooo'/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Merch;
