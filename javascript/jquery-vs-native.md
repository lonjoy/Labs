## DOM选择器

```javascript
$('div#header ul li'); // jQuery

document.querySelectorAll('div#header ul li'); // Native JavaScript
```
	
jQuery提供的DOM选择功能非常强大，基于独立的选择器引擎Sizzle。所有的现代浏览器都支持`document.querySelectorAll()`，甚至IE8都支持这个方法，但是IE8中仅限于使用这个方法来匹配CSS2.1提供的选择器。jQuery还支持更多的更强大的选择方式，对于大部分选择器的实现实际上都是基于`document.querySelectorAll()`方法实现的。

```javascript
if(document.querySelectorAll) {
	document.querySelectorAll(selector); // 使用原生API
} else {
	$(selector); // 使用jQuery的方式
}
```
	
原生JavaScript同样的提供了更多的选择DOM节点的方法，下面的几个方法从性能的角度上讲甚至比`document.querySelectorAll()`更快。

+ `document.querySelector()` - 这个方法接受一个CSS选择器参数，但是它只会获取第一个匹配的节点。
+ `document.getElementById()` - 通过id名获取单一的节点。
+ `document.getElementsByTagName()` - 根据所提供的标签名获取匹配的元素节点，返回一个节点集合。
+ `document.getElementsByClassName()` - 根据指定的class名(CSS中的类名)获取匹配的节点。

## DOM操作

1.jQuery提供了一些方法将内容添加到DOM中:

```javascript
$('#container').append('<p>content</p>');
```
	
其实在jQuery之后，它也是使用innerHTML方法处理的:

```javascript
document.getElementById('container').innerHTML += '<p>content</p>';
```
	
也可以使用DOM构建技术，比直接操作DOM更安全，也稍微比innerHTML快:

```javascript
var p = document.createElement('p');
p.appendChild(document.createTextNode('content'));
document.getElementById('container').appendChild(p);
```

2.在jQuery中，我们可以使用`empty()`方法来清空某个节点中的所有子节点:

```javascript
$('#container').empty();
```

使用innerHTML同样也可以做到，只需将对应的DOM节点的innerHTML设置为null即可:

```javascript
document.getELementById('container').innerHTML = null;
```
	
也可以使用DOM API提供的构建方式:

```javascript
var container = document.getElementById('container');
while(container.lastChild) {
	container.removeChild(container.lastChild);
}
```
	
3.jQuery中使用`remove()`方法可以移除某个节点:

```javascript
$('#container').remove();
```
	
使用原生的技术也可以很方便的实现:

```javascript
var container = document.getElementById('container');
container.parentNode.removeChild(container);
```
	
## 加载页面时运行脚本

过去Web开发人员都需要将脚本置入`head`中，然后在`window.onload`时执行指定的脚本来初始化应用程序。但是`window.onload`会在页面中所有的资源如图片，媒体资源，内容等加载完成之后才会执行脚本，因而必须等待一段时间。

jQuery提供了一个有效的方法，在HTML下载完成并且DOM ready的时候执行指定的初始化功能函数，而无需等待其他的资源完全加载完成。在其背后，它使用了`DOMContentLoaded`事件来监测DOM ready行为，这种方式无需将脚本放在`</body>`之前来检测DOM ready.

```javascript
$(initialFunction);
```
	
## forEach

jQuery允许开发人员针对数组中的每个项执行只一个自定义的函数。(这个数组可以是一个节点集，尽管通常节点集是一个NodeList，但是jQuery在返回它之前会将这个NodeList复制为一个类数组对象。

```javascript
$('p').each(function(){
	// do something
});
// 或者
$('p').addClass('newClass');
```
	
这些方法会针对每一个`<p>`执行指定的行为，jQuery内部实际上会遍历所有的这些节点。

大多数的现代浏览器包括IE9+都支持JavaScript数组中的`forEach`方法，然而针对NodeList类型的节点集，我们可以使用`Array.prototype.slice`方法将DOM节点集转换为数组之后再使用`forEach`方法：

```javascript
Array.prototype.slice.call(document.getElementsByTagName('p'));
```
	
## 事件

jQuery出现之前，事件处理非常麻烦。IE6/7/8实现了不同的事件模型，并且不同的浏览器实现的W3C标准又表现的不一致，导致事件处理这一块变得非常复杂。

```javascript
// jQuery
$('#button').on('click', callback);

// 标准
document.getElementById('button').addEventListener('click',callback, false);
```
	
但是在jQuery2.x中，以及上面的标准方式并不支持IE6/7/8。很多库针对IE都使用`attachEvent`来注册事件以兼容旧版的IE。此外，如果针对特定的节点只有一个事件，可以简单的使用 DOM1 事件中的`on`方法就能做到跨浏览器兼容。

```javascript
document.getElementById('button').onclick = callback;
```
	
如果在事件的回调函数中获取事件对象，需要使用`event = event || window.event`的方式来处理旧版IE的问题。但是如果针对IE9+的浏览器，就不需要使用这种方式。

## Ajax

当需要使用XMLHttpRequest，脚本注入，GET请求，POST提交，JSON处理以及图片加载时。jQuery提供了一个灵活的方式能够处理大多数的这些情况。通常开发人员只需要根据jQuery提供的API进行简单的配置即可。

```javascript
$.ajax({
	url: '/action/interface.cgi',
	type: 'POST',
	data: 'userName=xxx&id=xxx',
	success: callback
});
```
	
原生的的方式:

```javascript
var xr = new XMLHttpRequest();
xr.open('POST', '/action/interface.cgi', true);
xr.onreadystatechange = function() {
	if(xr.readyState !== 4 || xr.status !== 200) {
		return;
	}
	// do something
};
xr.send('userName=xxx&id=xxx');
```
	
原生的方式在旧版IE中依然要考虑到很多选项，通常建议封装为一个简单易用的函数来使用。针对较高级的浏览器，可以使用XMLHttpRequest2的特性来做一些优化，比如二进制数据处理，上传进度，cross-origin请求等。这些jQuery也还没有实现。