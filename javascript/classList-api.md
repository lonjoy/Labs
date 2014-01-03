# html5 `classList`

HTML5 中新增了一个 `classList` API, 顾命思议使用它能够获取一个html元素的 class 列表，并且能够使用 JavaScript 来管理这个 class 列表。比如：增删改。

使用 `classList` 非常方便，在此之前操作元素的 class 可谓相当头疼。

**获取 `classList`**

获取一个元素的 `classList` 非常容易，通过元素的 `classList` 属性就能简单的获取到元素的 class 列表。

```html
<div id="dom" class="classA classB classC"></div>
```

获取元素的 `classList`。


```javascript
var dom = document.getElementById('dom');

var domClassList = dom.classList;
console.log(domClassList);
```

在浏览器中，元素的 `classList` 属性会返回一个 `DOMTokenList` 对象，这个对象包含了该元素的 class 列表，以及代表列表长度的 `length` 属性。

```javascript
{
    0: 'classA',
    1: 'classB',
    2: 'classC',
    length: 3
}
```

W3C规范中并没有 `classList` 对应的规范，仅仅是在 [DOM4规范中提及](http://www.w3.org/TR/dom/#dom-element-classlist), DOM4 规范中规定 `classList` 属性返回一个关联的 `DOMTokenList` 对象，这个对象就代表着相关对象的 classes [class列表]。

- [DOMTokenList](http://www.w3.org/TR/dom/#domtokenlist)

> 如果要查看 `classList` 所属类型，应该使用 `element.classList instanceof DOMTokenList` 的方式，而 `typeof element.classList` 会返回 'object'。

**操作class列表**

DOMTokenList 规范提供了一系列可以用于 `classList` 属性的属性和方法，包括：

- `add()` 用于给 class 列表中添加一个或多个 class [CSS 类]
- `remove()` 从现有的列表中删除一个或者多个 class
- `contains()` 检查给定的 class 是否在列表中，返回布尔值
- `toggle()` 切换列表中的某个 class
- `item()` 获取列表中指定索引的 class。*与获取数组元素的方式相同*
- `toString()` 将列表转换为一个字符串
- `length` 获取列表中 class 个数总数
- `value` 给 classList 对象添加一个自定的属性或者方法。

**classList.add()**

使用 `classList.add()` 给指定元素添加 class 非常简单，只需要将需要添加的 class 以字符串的形式传递给 `add()` 方法即可。多个 class 之间使用逗号 `,` 分割。

```javascript
dom.classList.add('classD');
dom.classList.add('classE', 'classF');
```

> `dom.classList.add('a,b,c,d,e')` 的方式实际上也是合法的，但是这个逗号分割的字符串会作为一个 class 添加给 `dom.classList`。

**classList.remove()**

与添加 class 一样简单，只需指定需要移除的 class 即可，多个 class 之间使用逗号分割。

```javascript
dom.classList.remove('classA', 'classB');
```

**关于添加和移除多个 class**

DOM4 规范中规定：

- [dom-domtokenlist-add/remove](http://dom.spec.whatwg.org/#dom-domtokenlist-add)

1. 如果参数为空，抛出语法错误异常
2. 如果参数字符串包含任意的ASCII空格，抛出InvalidCharacterError异常
3. 如果给定的参数 class 在现有的列表中不存在就添加
4. 合法的操作都会触发 DOMTokenList 更新操作

- 对于移除操作，如果参数在列表中存在就移除，否则什么都不干。

对于浏览器不支持使用空格分割的形式同时添加或移除多个 class，但是使用现有的方法很容易扩展。

```javascript
if(!DOMTokenList.prototype.addmore) {
    DOMTokenList.prototype.addmore = function(classes) {
        var classes = classes.split(' '),
            i = 0,
            classesLen = classes.length;
            
        for(i,i<classesLen;i++) {
            if(classes[i].trim()) {
                this.add(classes[i]);
                // remove
                // this.remove(classes[i]);
            }
        }
    }
}
```

使用现有的方式也很容易扩展更多的操作 classList 的方法，比如：以数组的形式添加/删除多个 class，处理使用逗号分割的连续字符串 (`a,b,c`) 等等。

**classList.contains()**

这个方法会根据检查结果返回 `true` 和 `false`。如果列表中存在给定的参数，则返回 `true`，反之，返回 `false`。


```javascript
dom.classList.contains('classD');
dom.classList.contains('classD','classE');
```

> 多个之间也可以使用逗号分割的字符串列表。对于依赖于指定的 class 是否存在于列表的后续操作，`contains()` 是非常有用的。

**classList.toggle()**

`classList.toggle()` 也很简单。通常情况下我们会通过程序的方式或者用户触发某个函数来添加或移除列表中 class。使用 `toggle()` 方法可以很容易做到。

```javascript
dom.addEventListener('click', function(){
    dom.classList.toggle('classE');
}, false);
```

> `toggle()` 方法会返回 Boolean 值，当将指定类移除时返回 `false`, 反之返回 `true`。

`classList` 的 `toggle()` 方法还有可选的第二个参数。如果第二个参数设置为 `true`，那么就会将参数 class 添加到元素中，而不是移除，反之设置 `false` 删除指定的 class 。

> PS: 第二参数的支持取决于浏览器，实际上加不加是一样的。不支持第二参数的浏览器会忽略它。

**classList.item()**

NodeList中也有 `item()` 方法。 `classList` 的 `item()` 方法返回列表指定索引的 class （索引从 `0` 开始）。假设有如下代码：

```html
<p id="domP" class="a b c d e f"></p>
```

获取指定索引的 class

```javascript
var p = document.getElementById('domP');

p.classList.item(0); // 'a'
p.classList.item(4); // 'e'
```

> `classList` 的 `item()` 方法不能用来做添加或删除操作，会报错。

**classList.toString()**

这个方法将指定元素的 class 列表转换为一个字符串。

> `toString()` 并不是 DOMTokenList 规范中特有的。

**classList.length**

返回指定元素 class 列表长度。


```javascript
p.classList.length; // 5
```

**classList.value**

由于 classList 就是一个对象，因此我们可以给他添加属性和方法，就像操作一般的对象一样。如：

```javascript
classList.someProperty = 'xxx';
classList.someMethod = function(){}
```

**低版本兼容(classList polyfill)**

提到 DOM 操作，兼容性就是个头疼的问题。尤其是 classList 这类非常好用的 API。 IE 到 10.0 才支持它，因此我们可以使用一些扩展的脚本程序来兼容不支持 classList 的浏览器。

- [classList兼容性查看](http://caniuse.com/#search=classlist)
- [Modernizr推荐的一些polyfill脚本](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#classlist)
- [gist](https://gist.github.com/devongovett/1381839)
- [classList.js - 兼容IE8+](https://github.com/eligrey/classList.js)
- [gits2](https://gist.github.com/termi/3952026)

可以使用如下方式来检测浏览器是否支持 `classList`:

```javascript
if('classList' in document.createElement('div')) {
    // 使用 classList
}
```

这么好用的 API 赶快用起来咯。











