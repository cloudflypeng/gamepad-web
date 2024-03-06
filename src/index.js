import { checkGamePadSupport } from './utils';
import GamePad, { GAMEPAD_CODES } from './gamePad';
import { startLoop, cancelLoop } from './loop';

// 扩展对象
let enhancedGamePadList = [];

// 返回enhance对象 给开发者用来订阅
function getEnhanceGamePad() {
  return enhancedGamePadList;
}
if (checkGamePadSupport()) {
  window.addEventListener('gamepadconnected', function (e) {
    enhancedGamePadList.push({
      original: e.gamepad,
      id: e.gamepad.id,
      trigger: new GamePad(e.gamepad),
    });
    startLoop(
      e.gamepad.id,
      enhancedGamePadList[enhancedGamePadList.length - 1].trigger
    );
  });
  // 取消连接是删除
  window.addEventListener('gamepaddisconnected', function (e) {
    cancelLoop(e.gamepad.id);
    enhancedGamePadList = enhancedGamePadList.filter((item) => {
      return item.id !== e.gamepad.id;
    });
  });
} else {
  console.logError('当前浏览器不支持GamePad Api');
  alert('当前浏览器不支持GamePad Api');
}

// 返回enhance对象 给开发者用来订阅
// 重命名为getGamePad
const getGamePad = getEnhanceGamePad;

export { GAMEPAD_CODES, getGamePad };
