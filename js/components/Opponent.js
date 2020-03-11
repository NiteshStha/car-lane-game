class Opponent extends Car {
  constructor(parent) {
    super(parent);
    this.position = NumberGenerator(4);
    this.x = LANES[this.position].x1;
    this.y = -CAR_DIMENSION.height;
    this.speed = 1;
  }

  move = game => {
    if (this.y >= ROAD_DIMENSION.height) {
      this.parent.removeChild(this.carEl);

      // Remove the car from the array of cars
      game.opponents = game.opponents.filter(
        opponent => opponent.y !== ROAD_DIMENSION.height
      );

      game.score.add();
    }

    this.y += this.speed;
    this._draw();
  };

  _draw = () => {
    this.carEl.style.left = `${this.x}px`;
    this.carEl.style.top = `${this.y}px`;
  };
}
