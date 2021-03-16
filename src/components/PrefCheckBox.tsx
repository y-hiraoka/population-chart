import React from "react";
import "./PrefCheckBox.css";

interface Props {
  className?: string;
  checked: boolean;
  prefName: string;
  onClick: () => void;
}

export const PrefCheckBox: React.FC<Props> = props => {
  const rootClassName = props.checked
    ? `PrefCheckBox-root PrefCheckBox-root-checked ${props.className}`
    : `PrefCheckBox-root ${props.className}`;

  return (
    <div className={rootClassName} onClick={props.onClick}>
      <input
        className="PrefCheckBox-checkbox"
        type="checkbox"
        checked={props.checked}
        readOnly
      />
      <span>{props.prefName}</span>
    </div>
  );
};
