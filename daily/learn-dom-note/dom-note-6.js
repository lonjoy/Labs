// 文档片段
// 文档片段不会直接影响DOM树，对于DOM操作而言非常有用
// 创建
var docFrag = document.createDocumentFragment();
// 操作
docFrag.appendChild(ele);
docFrag.getElementById(someId);
docFrag.getElementById(someId).innerHTML;
docFrag.getElementById(someId).chilren;
docFrag.getElementById(someId).firstChild;
docFrag.clone(true);
// ...
// 插入 DOM　Tree
document.body.appendChild(docFrag);

// Stylesheets && CSS Rules

// Stylesheets
// <link>, <style>
document.styleSheets;
document.styleSheets[0];
document.styleSheets.length;
document.getElementsByTagName('link')[0].sheet; // CSSStyleSheet
document.getElementsByTagName('style')[0].sheet.cssRules[0]; // CSSStyleRule
document.getElementsByTagName('style')[0].sheet.cssRules[0].cssText

// CSSStylesheet一些属性和方法
/**
 * disabled
 * href
 * media
 * ownerNode
 * parentStylesheet
 * title
 * type
 * cssRules
 * ownerRule
 * deleteRule
 * insertRule
 */
var style = document.getElementsByTagName('style')[0];
style.sheet.inserRule('#dom{color:#C00}',1);
style.sheet.deleteRule(2);

// CSSStyleRule 一些属性和方法
/**
 * cssText
 * parentRule
 * parentStylesheet
 * selectorText
 * style
 * type
 */

// DOM Event
/**
 * on[eventType]
 * addEventListener(eventType, callback, useCapture);
 * removeEventListener(eventType, callback);
 * callback(event) -> event 信息
 * preventDefault() 阻止默认行为
 * stopPropagation() 阻止冒泡
 * stopImmediatePropagation()
 * 事件代理使用
 */

// 自定义事件
var myEvent = document.createEvent('CustomEvent');
dom.addEvent('myevent', function(event){
	// ....
}, false);
myEvent.initCustomEvent('myevent',true,false,{/*event data*/});
dom.dispatchEvent(myEvent); // 调用
