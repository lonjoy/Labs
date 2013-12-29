// 获取元素偏移，相对于有定位的父元素(offsetParent)；如果父元素没有定位，则相对于body；返回偏移像素值
var dom = document.querySelector(selector);
// 左偏移
dom.offsetLeft;
// 顶部偏移
dom.offsetTop;

// 获取元素4周相对视窗(viewport)左侧和顶部的位置；以及元素的尺寸(含border,padding,content)
var domPos = dom.getBoundingClientRect();
/*
 * {
 *     height: xxx
 *     width: xxx
 *     left: xxx
 *     right: xxx
 *     top: xxx
 *     bottom: xxx
 * }
 * right - left === width
 * bottom - top === height
 */
// offset
domPos.left;
domPos.right;
domPos.top;
domPos.bottom;
// size
domPos.width === dom.offsetWidth;
domPos.height === dom.offsetHeight;

// 获取元素不含边框部分的尺寸(padding+content)
dom.clientWidth;
dom.clientHeight;

// 获取相对指定位置的元素
/*
 * 1. 如果存在返回元素，否则返回html
 * 2. 如果统一位置能获取多个元素，获取层级(z-index)最高的元素
 */
document.elementFromPoint(100,100);

// 元素可滚动尺寸
dom.scrollWidth;
dom.scrollHeight;

// 获取/设置元素相对顶部和左侧滚动位置
dom.scrollLeft;
dom.scrollLeft = value;
dom.scrollTop;
dom.scrollTop = value;

// 将子元素滚动到可视
// 可传递参数true/false
dom.children[10].scrollIntoView();

