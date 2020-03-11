class Car {
  constructor(parent) {
    this.parent = parent;
    this.width = CAR_DIMENSION.width;
    this.height = CAR_DIMENSION.height;

    this.init();
  }

  init = () => {
    this.carEl = document.createElement('div');
    this.carEl.style.width = `${this.width}px`;
    this.carEl.style.height = `${this.height}px`;
    this.carEl.style.position = 'absolute';
    this.carEl.style.backgroundImage = 'url(assets/images/car.png)';

    this.parent.appendChild(this.carEl);
  };
}
