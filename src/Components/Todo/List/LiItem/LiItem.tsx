import * as React from "react";
import S from "../List.module.scss";
import TodoState, { IItem } from "../../../../store/todo";
import { observer } from "mobx-react-lite";
import MyButton from "../../../../UI/MyButton/MyButton";

const LiItem = observer((props: IItem) => {
  const switchDone = () => {
    TodoState.doneTodo(props.id);
  };
  const del = () => {
    TodoState.delTodo(props.id);
  };
  return (
    <li className={`${props.done && S.done}`}>
      {/*{props.id} {props.done ? "yes" : "no"}*/}
      <div className={S.title}>{props.title}</div>
      <div className={S.buttons}>
        <MyButton
          action={switchDone}
          name={`${props.done ? "Сделано " : "Не сделано "}`}
        />
        <MyButton action={del} name={`Удалить`} />
      </div>
    </li>
  );
});

export default LiItem;
