import styles from "./Separator.module.css";

export const Separator = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.separator} ${styles.separator_left}`} />
      <div className={`${styles.separator} ${styles.separator_right}`} />
    </div>
  );
};
