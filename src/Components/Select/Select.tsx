import * as React from "react";
import S from "./Select.module.scss";
import TodoState from "../../store/todo";
import ButtonState from "../../store/button";
import MyButton from "../../UI/MyButton/MyButton";
import { observer } from "mobx-react-lite";

const Select = observer(() => {
  const handelAll = () => {
    TodoState.setFilter("all");
    ButtonState.setActive("all");
  };
  const handelReady = () => {
    TodoState.setFilter(true);
    ButtonState.setActive("ready");
  };
  const handelNotReady = () => {
    TodoState.setFilter(false);
    ButtonState.setActive("notReady");
  };
  return (
    <div className={S.btns}>
      <MyButton
        active={ButtonState.active === "all"}
        action={handelAll}
        name={"все"}
      />
      <MyButton
        active={ButtonState.active === "ready"}
        action={handelReady}
        name={"готовые"}
      />
      <MyButton
        active={ButtonState.active === "notReady"}
        action={handelNotReady}
        name={"не готовые"}
      />
    </div>
  );
});

export default Select;
