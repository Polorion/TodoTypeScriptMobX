import * as React from "react";
import S from "./Input.module.scss";
import InputState from "../../../store/input";
import TodoState from "../../../store/todo";
import { observer } from "mobx-react-lite";
import MyButton from "../../../UI/MyButton/MyButton";

const Input = observer(() => {
  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    InputState.setValue(e.target.value);
  };
  const add = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (InputState.value) {
      TodoState.addTodo(InputState.value);
      InputState.setValue("");
    } else {
      alert("воле ввода пустое");
    }
    e.preventDefault();
  };
  return (
    <form className={S.form} onSubmit={add}>
      <input type="text" value={InputState.value} onInput={setValue} />
      <MyButton name={"Создать"} />
    </form>
  );
});

export default Input;
