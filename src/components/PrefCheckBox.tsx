import { memo } from "react";
import { usePrefecture } from "../state/prefectures";
import {
  usePrefCodeIsSelected,
  useTogglePrefCodeSelected,
} from "../state/selectedPrefCodes";
import "./PrefCheckBox.css";

interface Props {
  prefCode: number;
}

export const PrefCheckBox: React.VFC<Props> = memo(({ prefCode }) => {
  const prefecture = usePrefecture(prefCode);
  const toggle = useTogglePrefCodeSelected(prefCode);
  const selected = usePrefCodeIsSelected(prefCode);

  return (
    <div
      className={"PrefCheckBox-root"}
      data-is-selected={selected}
      onClick={toggle}>
      <input
        className="PrefCheckBox-checkbox"
        type="checkbox"
        checked={selected}
        readOnly
      />
      <span>{prefecture.prefName}</span>
    </div>
  );
});
