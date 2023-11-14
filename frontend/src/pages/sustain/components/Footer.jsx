import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Arnav Patel</p>
      <p>+91 9372634701</p>
      <p>arnav@techfest.org</p>
    </div>
  );
};
