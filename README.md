# gamepad-web
在web端使用手柄, 且支持连接多个设备

```javascript

import { getGamePad, GAMEPAD_CODES } from 'gamepad-web';

const gpList = getGamePad();
gp[0].trigger.on(GAMEPAD_CODES.BUTTON_A, () => {
  console.log('A');
});


```
