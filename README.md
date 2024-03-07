# gamepad-web
在web端使用手柄, 且支持连接多个设备, 使用id添加设备监听事件,内置按键映射表

```javascript

window.GPW.onConnect((gamepad) => {
  console.log('gamepad :>> ', gamepad);
  window.GPW.addEventListener(gamepad.id, window.GPW.GAMEPAD_CODES.BUTTON_A, () => {
    console.log('BUTTON_A :>> ', );
  });
  window.GPW.addEventListener(gamepad.id, window.GPW.GAMEPAD_CODES.BUTTON_B, () => {
    console.log('BUTTON_B :>> ', 1);
  });
});

```

todo:
腰杆监听