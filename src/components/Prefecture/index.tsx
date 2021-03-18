import { memo } from "react";
import { usePrefecture } from "../../state/prefectures";
import {
  usePrefCodeIsSelected,
  useTogglePrefCodeSelected,
} from "../../state/selectedPrefCodes";
import styles from "./styles.module.css";

type Props = {
  prefCode: number;
};

export const Prefecture: React.VFC<Props> = memo(({ prefCode }) => {
  const prefecture = usePrefecture(prefCode);
  const toggle = useTogglePrefCodeSelected(prefCode);
  const selected = usePrefCodeIsSelected(prefCode);

  return (
    <button className={styles.root} data-is-selected={selected} onClick={toggle}>
      <span>{prefecture.prefName}</span>
    </button>
  );
});
