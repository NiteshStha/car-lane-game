class Road {
  constructor() {
    this.width = ROAD_DIMENSION.width;
    this.height = ROAD_DIMENSION.height;
    this.y = 0;
    this.speed = ROAD_SPEED;
    this.speedLimit = ROAD_SPEED_LIMIT;
    this.dy = ROAD_DY;

    this.init();
  }

  init = () => {
    this.container = document.createElement('div');
    this.container.className = 'container';
    document.body.appendChild(this.container);

    this.road = document.createElement('div');
    this.road.style.width = `${this.width}px`;
    this.road.style.height = `${this.height}px`;
    this.road.style.position = 'relative';
    this.road.style.overflow = 'hidden';
    this.road.style.boxShadow =
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
    this.road.style.backgroundImage = 'url(assets/images/low-road.png)';
    this.road.style.backgroundPositionY = `${this.y}px`;

    this.container.appendChild(this.road);
  };

  move = car => {
    this.y = this.y >= this.height ? 0 : this.y;
    this.y += this.speed;
    this.speed = this.speed > this.speedLimit ? this.speedLimit : this.speed;
    this._speedInc(car.speedInc);
    this._draw();
  };

  _speedInc = speedInc => {
    this.speed += speedInc / 20;
  };

  _draw = () => {
    this.road.style.backgroundPositionY = `${this.y}px`;
  };
}
