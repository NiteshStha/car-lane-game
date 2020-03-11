class Game {
  constructor() {
    this.init();
  }

  init = () => {
    this.opponents = [];
    this.space = 0;
    this.road = new Road();
    this.player = new Player(this.road.road, this);
    this.score = new Score(this.road.road);

    this.interval = setInterval(this.animate, 1000 / 60);
  };

  animate = () => {
    this.road.move(this.player);
    this.player.move();

    // Create opponent cars and move them
    if (this.space >= OPPONENT_GAP) {
      const opponent = new Opponent(this.road.road);
      this.opponents.push(opponent);
      this.space = 0;
    }
    this.space++;
    for (var i = 0; i < this.opponents.length; i++) {
      this.opponents[i].move(this);
    }

    this.score.draw();

    CollisionDetection(this);
  };

  reset = () => {
    window.removeEventListener('keydown', this.player._carMoveEvent);
    document.body.removeChild(this.road.container);
  };
}
