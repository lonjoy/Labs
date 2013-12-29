var dom = document.querySelector(selector);
// inline样式操作
dom.style; // 返回CSSStyleDeclaration对象
// 获取指定属性
dom.style.width;
dom.style.fontSize; // camelCase
dom.style.getPropertyValue('font-size');
dom.style.cssText;
dom.getAttribute('style');
// 设置执行属性
dom.style.width = '100px';
dom.style.setProperty('font-size', '20px');
dom.style.cssText = '...';
dom.setAttribute('style', '...');
// 移除指定属性值
dom.style.width = '';
dom.style.removeProperty('width');
dom.cssText = '';
dom.removeAttribute('style');

// 获取指定元素样式,包括非内联样式
window.getComputedStyle(dom).width;
window.getComputedStyle(dom).height;

// Text Nodes

// <p id="p">text<i>i</i></p>
var p = document.querySelector('#p');
p.firstChild;
p.firstChild.textContent; // 'text'
p.textContent; // all child text nodes
/*
 * innerText忽略隐藏的文本，而textContent不会忽略
 * innerText会触发reflow
 * innerText忽略<script>和<style>元素
 * innerText只是返回默认的文本，textContent会包含空格，换行符等
 * innerText取决于浏览实现，textContent属于DOM规范
 */
typeof p.firstChild; // 'object'
typeof p.firstChild.textContent; // 'string'
p.firstChild.splitText(1); // 返回被截取的Text节点对象
p.firstChild.appendData('123'); // 插入数据并返回生成新文本节点
p.firstChild.deleteData(0,1); // 移除
p.firstChild.insertData(1, 'data'); // 插入
p.firstChild.replaceData(0,1,'newData');
p.firstChild.substringData(0,2);

p.firstChild.data;
p.firstChild.nodeValue;

p.normalize(); //合并文本节点



