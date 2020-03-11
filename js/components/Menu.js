class Menu {
  constructor() {
    this.init();
  }

  init = () => {
    this.road = new Road();
    this.message = document.createElement('div');
    this.message.innerHTML = 'Press Enter to Start the Game';
    this.message.style.position = 'absolute';
    this.message.style.top = '50%';
    this.message.style.left = '50%';
    this.message.style.transform = 'translate(-50%, -50%)';
    this.message.style.fontSize = '20px';
    this.message.style.textAlign = 'center';
    this.message.style.color = '#fff';
    this.message.style.padding = '10px';
    this.message.style.backgroundColor = '#222222';
    this.message.style.borderRadius = '12px';
    this.road.road.appendChild(this.message);
    window.addEventListener('keydown', this.start);
  };

  start = event => {
    if (event.keyCode === ENTER_KEY) {
      document.body.removeChild(this.road.container);
      window.removeEventListener('keydown', this.start);
      this.game = new Game();
    }
  };
}
