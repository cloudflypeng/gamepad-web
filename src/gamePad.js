export const GAMEPAD_CODES = {
  BUTTON_A: 0,
  BUTTON_B: 1,
  BUTTON_X: 2,
  BUTTON_Y: 3,
  BUTTON_LB: 4,
  BUTTON_RB: 5,
  BUTTON_LT: 6,
  BUTTON_RT: 7,
  BUTTON_BACK: 8,
  BUTTON_START: 9,
  BUTTON_LS: 10,
  BUTTON_RS: 11,
  BUTTON_UP: 12,
  BUTTON_DOWN: 13,
  BUTTON_LEFT: 14,
  BUTTON_RIGHT: 15,
  BUTTON_HOME: 16,
};

class GamePad {
  constructor(Gp) {
    this.handlers = {};
    this.Gp = Gp;
  }

  getGamePad() {
    return this.Gp;
  }

  getHandlerList() {
    return this.handlers;
  }

  on(buttonCode, callback) {
    this.handlers[GAMEPAD_CODES[buttonCode]] = callback;
  }

  remove(buttonCode) {
    delete this.handlers[GAMEPAD_CODES[buttonCode]];
  }
}

export default GamePad;
