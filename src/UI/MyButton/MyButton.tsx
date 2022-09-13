import * as React from "react";
import S from "./MyButton.module.scss";

interface IMyButton {
  name: string;
  disabled?: boolean;
  action?: () => void;
  active?: boolean;
}

const MyButton = (props: IMyButton) => {
  const handel = () => {
    props.action && props.action();
  };
  return (
    <button
      onClick={handel}
      className={`${S.btn} ${props.active ? S.active : S.noActive}`}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default MyButton;
