import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Praveen</p>
      <p>+91 99999 99999</p>
      <p>email@techfest.org</p>
    </div>
  );
};
