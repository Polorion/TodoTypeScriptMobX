import { makeAutoObservable } from "mobx";

class InputState {
  constructor() {
    makeAutoObservable(this);
  }
  value = "";

  setValue = (e: string) => {
    this.value = e;
  };
}

export default new InputState();
