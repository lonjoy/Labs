// 获取所有Node Object Type
/**
 * key -> 节点对象类型
 * Node[key] -> 节点类型对应的值
 */
for(var key in Node) {
	console.log(key + ' = ' + Node[key]);
}
// Node properties
var div = document.createElement('div');
var divProps = [];
for(var prop in div) {
	divProps.push(prop);
}
/*
 * 所有的节点都从其构造器对象中继承了大量的属性和方法
 */

// 常用属性和方法
// get element by id
var $ = function(id) {
	if(typeof id === 'string') {
		if(id[0] === '#') {
			return document.querySelector(id);
		} else {
			return document.getElementById(id);
		}
	}
}
// all child element
// childNodes 返回一个NodeList
function getChildElements(ele) {

	ele = $(ele);
	// 将NodeList转换为数组使用
	var childNodesArr = Array.prototype.slice.call(ele.childNodes);

	var childElements = childNodesArr.filter(function(item){
		if(item.nodeType === 1) {
			return item;
		}
	});

	return childElements;
	// or
	// $(ele).children
}
// first child element
function getFirstChildElement(ele) {

	return getChildElements(ele)[0]
	// or
	// $(ele).firstElementChild

}
// last child element
function getLastChildElement(ele) {

	var lastIndex = getChildElements(ele).length - 1;

	return getChildElements(ele)[lastIndex];
	// or
	// $(ele).lastElementChild
}
// next element
function getNextElement(ele) {

	var next = $(ele).nextSibling;

	if(next.nodeType === 3) {
		next = next.nextSibling;
	}

	return next;

}
// prev element
function getPrevElement(ele) {

	var prev = $(ele).previousSibling;

	if(prev.nodeType === 3) {
		prev = prev.previousSibling;
	}

	return prev;

}

// nodeName {String}
// nodeType {Number}

// nodeValue 对于大多数节点都返回null，对于文本节点[Text]和注释节点[Comment]返回对应的字符串值

// parentNode 获取父节点 {Node}

// Node methods
// appendChild()  插入子节点
// cloneNode() 克隆节点, 参数为false时不克隆子节点
// compareDocumentPosition() 获取节点关系
// contains() 确定节点包含关系，返回布尔值
function containsElement(parent, child) {
	return $(parent).contains($(child));
}
// hasChildNodes(); 是否包含子节点，返回布尔值
// insertBefore(); 接受两个参数：要插入的节点，插入时引用的节点，如果没有传递第二个参数，作appendChild操作
function before(ele, newEle, ref) {
	$(ele).insertBefore(newEle, ref);
}
function insertAfter(newEle, target) {
	var parent = target.parentNode;
	if(parent.lastChild === target) {
		parent.appendChild(newEle);
	} else {
		parent.interBefore(newEle, target.nextSibling);
	}
}
// removeChild();
// empty element
function emptyElement(ele) {
	while(ele.firstChild) {
		ele.removeChild(ele.firstChild);
	}
};
function removeSelf(ele) {
	$(ele).parentNode.removeChild($(ele));
}
// isEqualNode() 节点比较
// replaceChild()
function replaceElement(newEle, target) {
	target.parentNode.replaceChild(newEle, target);
}

// Document method
// document.createElement(); 创建元素节点
// document.createTextNode(); 创建文本节点

// HTML*Elelement properties
// innerHTML
// outerHTML
// textContent
// innerText
// outerText
// firstElementChild
// lastElementChild
// nextElementChild
// previousElementChild
// children

// insertAdjacentHTML
// 
// parentElement
