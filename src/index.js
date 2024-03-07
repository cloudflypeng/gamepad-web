import { GAMEPAD_CODES } from './gamePad.js';
import { checkGamePadSupport } from './utils.js';

const requestAnimationFrame =
  window.requestAnimationFrame || window.webkitRequestAnimationFrame;
const cancelAnimationFrame =
  window.cancelAnimationFrame || window.webkitCancelAnimationFrame;

class GPW {
  constructor() {
    this.supportGamePad = checkGamePadSupport();
    this.handlers = {};
    this.gpwIdList = [];
    this.loop;
    this.GAMEPAD_CODES = GAMEPAD_CODES;
  }
  onConnect(callback) {
    if (!this.supportGamePad) {
      console.log('GamePad Api is not supported');
      return;
    }
    window.addEventListener('gamepadconnected', (e) => {
      this.handlers[e.gamepad.id] = {};
      this.gpwIdList.push(e.gamepad.id);
      console.log('gamepadconnected :>> ', e.gamepad.id);
      callback(e.gamepad);
      this.startLoop();
    });
    window.addEventListener('gamepaddisconnected', (e) => {
      delete this.handlers[e.gamepad.id];
      this.gpwIdList = this.gpwIdList.filter((i) => i !== e.gamepad.id);
    });
  }
  addEventListener(gpwId, key, callback) {
    this.handlers[gpwId][key] = callback;
  }
  startLoop() {
    this.loop = requestAnimationFrame(() => {
      this.gpwIdList.forEach((gpwId) => {
        const gamePad = navigator.getGamepads().find((i) => i.id === gpwId);
        gamePad.buttons.forEach((button, index) => {
          if (button.pressed) {
            this.handlers[gpwId]?.[index]?.();
          }
        });
      });
      this.startLoop();
    });
  }
  cancelLoop() {
    cancelAnimationFrame(this.loop);
  }
}

window.GPW = new GPW();
