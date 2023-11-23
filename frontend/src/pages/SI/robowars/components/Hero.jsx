import { useEffect, useState } from "react";
import bgImg from "../assets/background.png";
import fgImg from "../assets/foreground.png";
import styles from "./Hero.module.css";
import { Button } from "./Button";

export const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={bgImg}
        alt="background"
        className={styles.layer1}
        style={{
          transform: `translateY(-${scrollPosition * 0.01}px)`,
          filter: `blur(${scrollPosition * 0.005}px)`,
        }}
      />
    
      <img
        src={fgImg}
        alt="foreground"
        className={styles.layer3}
        style={{
          transform: `translateY(${scrollPosition * -0.1}px)`,
          filter: `blur(${scrollPosition * 0.005}px)`,
        }}
      />
      <h3 style={{ transform: `translate(-50%, -${scrollPosition}px)` }}>
        FINANCIAL LITERACY
      </h3>
    
      
      <div className={styles.bottom_gradient} />
    </div>
  );
};
