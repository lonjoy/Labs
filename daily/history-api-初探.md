# JavaScript History API 初探

时下的 Web 应用程序 [高级浏览器中] 都可以使用 History API 来访问用户浏览器的历史记录。随着 HTML5 的流行与普及，也可以很灵活的使用 History API 来管理维护历史记录。本文，旨在探索 JavaScript 中的 History API，试图解释如何在现代 Web 应用中使用相关特性。

## 历史记录控制

使用  History API 就允许开发者添加，移除以及替换历史记录条目，从而改变浏览器后退和前进按钮的行为。此外，还可以提取相应的状态信息并使用这个状态来管理维护文档的内容。所有的这些都是通过 `window` 的属性 `history` 对象来完成的。

### 后退 && 前进

`history` 对象提供了两个非常有用的方法用以循环操作用户的历史记录，`back()` 和 `forward()`。调用 `history.back()` 将会触发用户浏览器历史记录后退异步。这与直接点击浏览器的后退按钮的效果一样。同样的，调用 `history.forward()` 与按下牛栏起的前进按钮效果一样。

### 移动到执行的某个历史时刻

`history` 对象还提供了另外一个方法: `go()`，这个方法可以用于移动到某个指定的历史时刻。例如，如果调用 `history.go(-3)`将会后退三页。同样的，调用 `history.go(3)` 会前进三页。那么，调用 `history.go(-1)` 和 `history.go(1)` 与调用 `history.back()` 和 `history.forward()` 的效果就是一样的。

> 在 IE 中，允许开发者传递 URLs 参数给 `go()` 方法，但是这并非标准的方法。

### 统计历史记录条目数量

通过访问 `history` 对象的 `length` 属性可以获取到浏览器的历史记录条目。

```javascript
history.length
```

## 历史记录条目操作

`history` 对象提供了两个方法，`pushState()` 和 `replaceState()` 用于添加或者替换历史记录。

### `pushState`

假设在 `http://localhost/index.html` 中有以下代码：

```javascript
history.pushState({page:2}, 'Page 2', 'page2.html');
```
这就会改变当前页面的 url 为 `http://localhost/page2.html`。但是，并不会改变页面内容或者重新加载页面。浏览器甚至都不会检查 `page2.html` 是否存在。它仅仅只是在浏览器的地址栏中显示改变后的 url。

假设我们点击返回按钮，浏览器会载入刚才添加到历史记录中的 `page2.html`。当页面加载的时候，它会接受到一个 `popstate` 事件。在前面的代码中我们给 `pushState()` 方法传递了一个对象，也就是第一个参数（也叫做 `state` 对象）。那么，我们就可以从 `popstate` 事件的 `state` 属性中取回这个对象，然后用于管理页面内容。

`pushState()` 接受三个参数：

- **State Object** — 这个对象与新添加到历史记录中的条目关联
- **Title** — 新的历史记录条目的 title 信息
- **URL** — 显示给用户的 url。可以是相对路径的形式，也可以是绝对路径的形式，总之这个 URL 应该与当前 URL 同源。否则，这个方法就会抛出错误信息。

示例：

> 假设有 `index.html`, `page1.html`, `page2.html`。

下面是 `index.html` 中的内容：

```html
<input type="button" id="push" value="push history" />
```
将下面的 JavaScript 代码添加到页面中[`index.html`]:

```javascript
$(function(){
    $('#push').on('click', function(){
        history.pushState({page: 1}, 'page1', 'page1.html');
        history.pushState({page: 2}, 'page2', 'page2.html');
    });
});
```
将下面的代码添加到 `page2.html` 中:

```javascript
$(function(){
    window.onpopstate = function(e) {
        console.log('location:' + document.location + '\nstate: ' + event.state.page);
    };
});
```
然后在浏览器中载入 `http://localhost/index.html`, 接下来点击 `push` 按你，就会两个新的历史记录条目添加到即使记录中，并且在浏览器的地址栏中会显示 `http://localhost/page2.html` 。然而，页面的内容并不会变化。如果你此时在当前窗口中访问其他页面，然后点击后退按钮，浏览器就会载入 `page2.html`。并且在 `page2.html` 会捕获到 `popstate` 事件。这个事件的 `state` 属性将包含使用 `history.pushState()` 添加历史记录时对应的 state 对象。

再次点击后退按钮，就会跳到 `http://localhost/page1.html`，而此时 `page2.html` 依然会捕获到 `popstate` 事件。但是，会发现即使 url 改变到 `page1.html`，而浏览器窗口显示的依然是 `page2.html` 的内容。

### 使用 `replaceState()`

`history.replaceState()` 的工作方式与 `history.pushState()` 一样，它会修改当前历史记录中的条目，而不是新增条目。

### 参考阅读

- [MDN History 参考](https://developer.mozilla.org/en-US/docs/DOM/Manipulating_the_browser_history)