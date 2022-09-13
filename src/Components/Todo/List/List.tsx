import * as React from "react";
import S from "./List.module.scss";
import { observer } from "mobx-react-lite";
import TodoState from "../../../store/todo";
import LiItem from "./LiItem/LiItem";
import GeneratorRandomString from "../../../Utils/GeneratorRandomString";

const List = observer((props) => {
  const list = TodoState.getItem();
  return (
    <ul className={S.list}>
      {list.length > 0 ? (
        list.map((el) => {
          return (
            <LiItem
              key={GeneratorRandomString()}
              id={el.id}
              done={el.done}
              title={el.title}
            />
          );
        })
      ) : (
        <li>здесь пока пусто!</li>
      )}
    </ul>
  );
});

export default List;
