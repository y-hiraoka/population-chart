import { usePrefectures } from "../../state/prefectures";
import { Prefecture } from "../Prefecture";
import styles from "./styles.module.css";

export const Prefectures: React.VFC = () => {
  const prefectures = usePrefectures();

  return (
    <div className={styles.gridContainer}>
      {prefectures.map(prefecture => (
        <div className={styles.gridItem} key={prefecture.prefCode}>
          <Prefecture prefCode={prefecture.prefCode} />
        </div>
      ))}
    </div>
  );
};
