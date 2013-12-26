**html**


```html
<canvas id="canvas" width="200" height="200"></canvas>
<img id="img" src="" />
```

**javascrpt**


```javascript
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    
context.fillStyle = '#fff'; // background
context.fillRect(0,0,200,200); // canvas
context.fillStyle = '#000'; // content color
context.font = options;
context.fillText(arg);
// do something repeat

// get image
var data = canvas.toDataURL();

document.getElementById('img').src = data;
```

**summary**


用 `canvas` 绘制目标图形，使用 `toDataURL()` 方法转为 base64 格式的数据填充到 `img` 元素上。

- PS: retina 屏幕下绘制 2x 图形有些无礼.