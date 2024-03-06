// 检查当前浏览器是否支持GamePad Api
export function checkGamePadSupport() {
  let gamePadSupport = !!navigator.getGamepads;
  return gamePadSupport;
}
