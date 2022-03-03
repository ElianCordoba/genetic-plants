class Plant {
  #position: [number, number];
  #health: number;

  constructor(x_position: number, y_position: number, health: number) {
    this.#position = [x_position, y_position];
    this.#health = health;
  }
}