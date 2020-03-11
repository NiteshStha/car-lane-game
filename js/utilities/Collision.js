/**
 * Resets the game.
 * @param {Object} game The instance of the game object.
 */
const _clearGame = game => {
  const { interval, reset } = game;

  clearInterval(interval);
  setTimeout(() => {
    reset();
    menu.init();
  }, 3000);
};

/**
 * Dectects any collision in the game.
 * @param {Object} game The instance of the game object.
 */
const CollisionDetection = game => {
  const { opponents, interval, player, score } = game;

  // Checks collision with the road edges
  if (player.x <= 0 || player.x + player.width >= ROAD_DIMENSION.width) {
    _clearGame(game);
  }
  for (let i = 0; i < opponents.length; i++) {
    // Checks collision with all the opponent car or obstacles
    if (
      player.x < opponents[i].x + opponents[i].width &&
      player.x + player.width > opponents[i].x &&
      player.y < opponents[i].y + opponents[i].height &&
      player.y + player.height > opponents[i].y
    ) {
      _clearGame(game);
    }
  }
};
