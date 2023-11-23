import styles from "./Content.module.css";

export const Content = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
