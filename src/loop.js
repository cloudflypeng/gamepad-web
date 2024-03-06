let loop = {};
// 兼容性处理
const requestAnimationFrame =
  window.requestAnimationFrame || window.webkitRequestAnimationFrame;
const cancelAnimationFrame =
  window.cancelAnimationFrame || window.webkitCancelAnimationFrame;

const publish = function (enhanceGP) {
  let gamePad = enhanceGP.getGamePad();
  const handles = enhanceGP.getHandlerList();
  for (let key in handles) {
    if (gamePad.buttons[key].pressed) {
      handles[key]();
    }
  }
};

const startLoop = function (id, enhanceGP) {
  loop[id] = requestAnimationFrame(function () {
    publish(enhanceGP);
    startLoop(id, enhanceGP);
  });
};

const cancelLoop = function (id) {
  if (loop[id]) {
    cancelAnimationFrame(loop[id]);
    loop[id] = null;
  }
};

export { startLoop, cancelLoop };
