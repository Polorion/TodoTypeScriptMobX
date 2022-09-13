import { makeAutoObservable } from "mobx";

class ButtonState {
  constructor() {
    makeAutoObservable(this);
  }
  active = "all";

  setActive = (e: string) => {
    this.active = e;
  };
}

export default new ButtonState();
