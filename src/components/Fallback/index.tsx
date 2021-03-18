import styles from "./styles.module.css";

export const Fallback: React.VFC = () => {
  return <div className={styles.fallback}>loading...</div>;
};
