// Document Nodes

// document 自身属性
var docOwnProps = Object.keys(document);

// document 属性，含继承的属性
var docProps = [];
for(var key in document) {
	docProps.push(key);
}

// document 继承的属性
var docInheritedProps = [];
for(var ikey in document) {
	if(!document.hasOwnProperty(ikey)) {
		docInheritedProps.push(ikey);
	}
}

docProps.length === docOwnProps.length + docInheritedProps.length;

// 常用属性和方法
document.doctype; // doctype
document.documentElement // html
// document.implementation.*
document.activeElement;
document.body // body
document.head // head
document.title
document.lastModified
document.referrer
document.compatMode
document.ownerDocument
document.hasFocus(); // 当前文档窗口是否激活状态

// 文档子节点
document.childNodes; // 子节点数组[doctype html, html]

// 检测浏览器支持的DOM规范和特性, 返回 bool 值
document.implementation.hasFeature('Core', '2.0');
document.implementation.hasFeature('Core', '3.0');
// chrome 的 hasFeature() 有些问题，传入('Core', '100.0') 也会返回 true

// 获取有焦点或者当前激活的节点
document.activeElement;

document.defaultView; // 浏览器环境中指向的全局对象

// 根据元素获取元素所在文档引用
// document.body.ownerDocument;
// ele.ownerDocument
document.ownerDocuemnt === null;