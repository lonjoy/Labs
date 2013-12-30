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

- PS: retina 屏幕下绘制 2x 图形有些无力。

### 使用自定义字体

```css
@font-face {
	font-family:'{fontFamilyName}';
	src:url("/fonts/{fontName}.eot");
	src:url("/fonts/{fontName}.eot");
	src:url("/fonts/{fontName}.ttc");
	src:url("/fonts/{fontName}.eot?#iefix") format("embedded-opentype"),
	url("/fonts/{fontName}.ttf") format("truetype"),
	url("/fonts/{fontName}.woff") format("woff"),
	url("/fonts/{fontName}.svg#font-family") format("svg");
	font-weight:normal;
	font-style:normal
}
```

接下来就可以在 canvas 中使用自定义的字体了:

```javascript
context.font = '...';
```

使用自定义字体注意问题：

有可能在字体资源还没载入之前绘制图形，此时会使用默认字体，解决方案：监听资源载入，完成后绘图。

```javascript
// 资源载入完成后毁图
document.onreadystatechange = function() {
	if(readyState === 'complete') {
		// render
	}
};
// 页面载入完成后
window.addEventListener('load', function(){
	// render
}, false);
```