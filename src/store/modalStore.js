import { makeAutoObservable } from "mobx";

class modalStore {
  stateModal = false;
  id = null;

  constructor() {
    makeAutoObservable(this);
  }

  setStateModal() {
    this.stateModal = !this.stateModal;
  }

  setId(id) {
    this.id = id;
  }
}

export default new modalStore();
