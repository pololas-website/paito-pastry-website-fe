class Observable {
  #value;
  #observers = new Set();

  constructor(value) {
    this.#value = value;
  }

  get observers() {
    return this.#observers;
  }

  get value() {
    return this.#value;
  }

  set value(newValue) {
    const previusValue = this.#value;
    this.#value = newValue;
    this.#observers.forEach((observer) => {
      observer(previusValue, newValue);
    });
  }

  addObservers(observers) {
    this.#observers = this.#observers.union(new Set(observers));
  }
  removeObserver(observer) {
    return this.#observers.delete(observer);
  }
}

export default Observable;
