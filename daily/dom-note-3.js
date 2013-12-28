// 每个 HTML 元素[Element] 都有一个对应的构造器
// div -> HTMLDivElement()
// a -> HTMLAnchorElement()
// ...
// 
// https://developer.mozilla.org/en-US/docs/Web/API/element?redirectlocale=en-US&redirectslug=DOM%2Felement

var ele = document.createElement('div')

// 获取元素标签名，大写形式
ele.tagName;

// 获取指定属性值
ele.getAttribute('class')

// 设置属性和值得
ele.setAttribute('class', 'className')

// 是否包含指定属性，返回布尔值
ele.hasAttribute('id');

// 移除指定属性
ele.removeAttribute('class');

// class 列表，返回DOMTokenList
ele.classList
// 操作
ele.classList.add()
ele.classList.remove()
ele.classList.toggle()
ele.classList.contains()
// ...
// https://github.com/eligrey/class List.js
// https://gist.github.com/1381839
// className string
ele.className

// 自定义属性（data-*）列表，返回DOMStringMap
ele.dataset
ele.dataset.name = 'xxx'
ele.dataset.caseCase = 'xxx' //case-case

// 属性集，返回NameNodeMap
ele.attributes;
// 操作
ele.attributes.getNamedItem('id')

var cls = document.createAttribute('class')
cls.nodeValue = 'val'
ele.attributes.setNamedItem(cls)
// 推荐使用removeAttribute替代setAttribute(attr, null/'')
ele.attributes.removeNamedItem('class')

ele.attributes.item(1)

// 获取单个元素
// 支持css选择器
var baseEle = document.querySelector(selector)
baseEle.querySelector(selector)

var baseId = document.getElementById(id)
baseId.getElementById(id)

// 获取NodeList
// 支持基于上下文元素调用
var li = document.querySelectorAll('li')

var div = document.getElementsByTagName('div')
var item = document.getElementsByClassName('item')

// 元素匹配选择
// matchesSelector()
// mozMatchesSelector()
// webkitMatchesSelector()
// oMatchesSelector()
// msMatchesSelector()