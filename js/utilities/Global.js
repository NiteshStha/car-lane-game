// ROAD
const ROAD_DIMENSION = {
  width: 400,
  height: 600
};
const ROAD_SPEED = 1;
const ROAD_DY = 0.002;
const ROAD_SPEED_LIMIT = 10;

// LANE
const LANE_WIDTH = 90;
const LANE_GAP = 20;
const LANES = {
  1: {
    x1: 8 + LANE_GAP,
    x2: 98 - LANE_GAP
  },
  2: {
    x1: 102 + LANE_GAP,
    x2: 192 - LANE_GAP
  },
  3: {
    x1: 208 + LANE_GAP,
    x2: 298 - LANE_GAP
  },
  4: {
    x1: 302 + LANE_GAP,
    x2: 392 - LANE_GAP
  }
};

// CAR
const CAR_DIMENSION = {
  width: 50,
  height: 100
};
const CAR_START_POSITION = {
  x: LANES[2].x1,
  y: ROAD_DIMENSION.height - CAR_DIMENSION.height - 20
};
const CAR_SPEED_INC = 0.01;
const CAR_SPEED_LIMIT = 120;

// OPPONENT
const OPPONENT_GAP = 280;

// KEYCODES
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const ENTER_KEY = 13;
