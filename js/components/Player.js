class Player extends Car {
  constructor(parent, game) {
    super(parent);
    this.x = CAR_START_POSITION.x;
    this.y = CAR_START_POSITION.y;
    this.speed = 0;
    this.speedInc = CAR_SPEED_INC;
    this.turn = 8;
    this.game = game;

    this.init();
  }

  init = () => {
    this.carEl.style.zIndex = '100';
    window.addEventListener('keydown', this._carMoveEvent);
  };

  move = () => {
    this._speedUp();
    this._draw();
  };

  _speedUp = () => {
    this.speed =
      this.speed < CAR_SPEED_LIMIT ? this.speed + this.speedInc : this.speed;
    if (this.speed >= 40) {
      clearInterval(this.game.interval);
      this.game.interval = setInterval(this.game.animate, 1000 / 80);
    }
    if (this.speed >= 60) {
      clearInterval(this.game.interval);
      this.game.interval = setInterval(this.game.animate, 1000 / 100);
    }
    if (this.speed >= 80) {
      clearInterval(this.game.interval);
      this.game.interval = setInterval(this.game.animate, 1000 / 120);
    }
    if (this.speed >= 100) {
      clearInterval(this.game.interval);
      this.game.interval = setInterval(this.game.animate, 1000 / 144);
    }
  };

  _draw = () => {
    this.carEl.style.left = `${this.x}px`;
    this.carEl.style.top = `${this.y}px`;
  };

  _carMoveEvent = event => {
    if (event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW) {
      /**
       * If you want to move cars through each position, comment out or remove
       * the below if statement and uncomment the below code in the region.
       */
      //#region MOVE CAR THROUGH EACH POSITION
      switch (event.keyCode) {
        case LEFT_ARROW:
          this.x -= this.turn;
          break;
        case RIGHT_ARROW:
          this.x += this.turn;
          break;
        default:
          this.x = this.x;
      }
      //#endregion

      /**
       * If you want to move cars instantly to each lanes, comment out or remove
       * the above switch statement and uncomment the below code in the region.
       */
      //#region MOVE CAR INSTANTLY
      // this.lane = findLane(this.x);
      // if (event.keyCode === LEFT_ARROW) {
      //   this.lane = this.lane - 1 !== 0 ? this.lane - 1 : this.lane;
      //   this.x = LANES[this.lane].x1;
      // }
      // if (event.keyCode === RIGHT_ARROW) {
      //   this.lane = this.lane + 1 <= 4 ? this.lane + 1 : this.lane;
      //   this.x = LANES[this.lane].x1;
      // }
      //#endregion
    }
  };
}
