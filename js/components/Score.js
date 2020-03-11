class Score {
  constructor(parent) {
    this.parent = parent;
    this.score = 0;

    this.init();
  }

  init = () => {
    this.scoreBoard = document.createElement('div');
    this.scoreBoard.style.position = 'absolute';
    this.scoreBoard.style.color = '#fff';
    this.scoreBoard.style.top = '5px';
    this.scoreBoard.style.right = '18px';
    this.scoreBoard.style.zIndex = '200';

    this.parent.appendChild(this.scoreBoard);
  };

  /**
   * Increments the value of the score by 1.
   */
  add = () => {
    this.score++;
  };

  /**
   * Draws the score board in the game.
   */
  draw = () => {
    this.scoreBoard.innerHTML = `Score: ${this.score}`;
  };

  /**
   * Resets the score.
   */
  reset = () => {
    this.score = 0;
  };
}
