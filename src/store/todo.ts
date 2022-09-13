import { makeAutoObservable } from "mobx";
export interface IItem {
  title: string;
  id: number;
  done: boolean;
}

class TodoState {
  constructor() {
    makeAutoObservable(this);
  }
  todoList = <Array<IItem>>[];
  filter: boolean | "all" = "all";

  addTodo = (name: string) => {
    this.todoList.push({
      title: name,
      id: Math.random(),
      done: false,
    });
  };
  delTodo = (id: number) => {
    this.todoList = this.todoList.filter((el) => {
      return el.id !== id;
    });
  };
  doneTodo = (id: number) => {
    this.todoList = this.todoList.map((el) => {
      if (id === el.id) {
        return {
          ...el,
          done: !el.done,
        };
      }
      return el;
    });
  };
  getItem = () => {
    const list = this.todoList.filter((el) => {
      if (this.filter === "all") {
        return el;
      }
      if (el.done === this.filter) {
        return el;
      }
    });
    return list;
  };
  setFilter = (done: boolean | "all") => {
    this.filter = done;
  };
}

export default new TodoState();
