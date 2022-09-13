import * as React from "react";
import List from "./List/List";
import Input from "./Input/Input";
import { observer } from "mobx-react-lite";
import Select from "../Select/Select";
import S from "./Todo.module.scss";

const Todo = observer(() => {
  return (
    <div className={S.todo}>
      <div className={S.body}>
        <Input />
        <Select />
        <List />
      </div>
    </div>
  );
});

export default Todo;
