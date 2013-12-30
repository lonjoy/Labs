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

**使用Node.js生成图片**

将图片信息发送到服务器：

```javascript
img.onload = function(){
    // 图片载入后将数据post到服务器生成图片并保存
}
```

生成图片，使用 `canvas` 画出来的图片是 `base64` 格式的，在服务器端我们需要处理 base64 编码：

```javascript
app.post('/save', function(){
    var img = req.body.imgContent; // 此时传递的是base64格式的数据
    // 解码
    var base64Data = ima.replace(/^data:image\/\w+;base64,/, "");
    var image = new Buffer(base64Data, 'base64');
    // 生成图片
    fs.writeFile('xxx.png',image, function(err){
        if(err) {
            res.send(JSON.stringify({status:0,msg:'保存失败'}));
        } else {
            res.send(JSON.stringify({status:1,msg:'保存成功'}));
        }
    });
});
```