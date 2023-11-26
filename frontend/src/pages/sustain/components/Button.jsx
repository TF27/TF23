import styles from "./Button.module.css";

export const Button = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
