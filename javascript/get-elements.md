#获取文档元素

DOM提供了很多方式获取文档元素, 可以很方便的查询文档中一个或者多个元素[一组元素集合], 有以下几种方式:

+ 通过指定的元素id属性(attribute) - [`getElementById`]
+ 通过指定的name属性 - [`getElementsByName`]
+ 通过指定的标签名 - [`getElementsByTagName`]
+ 通过指定的CSS Class名 - [`getElementsByClassName`]
+ 通过匹配的CSS选择器 - [`querySelector/querySelectorAll`]
+ 检查对应的HTML元素是否于参数选择器匹配 - [`matchesSelector`]
+ 一些特殊集合

##通过id属性获取元素

任何HTML元素都可以定义`id`属性, 但是通常它在文档中是唯一的. 因而我们通常使用`id`获取到的只是一个独立的唯一的元素对象. 我们可以使用Document对象的`getElementById()`方法获取指定的`id`的元素对象.

    document.getElementById('id');
    
如果在匹配的过程中不存在参数中传递的相应的id元素, 则`getElementById()`方法返回`null`. `id`参数的匹配过程中区分大小写, 但是在IE8之前的版本中`getElementById()`方法并不区分ID的大小写, 并且如果页面中存在多个同名的ID元素, 这个方法只会返回匹配第一个元素对象.

使用`getElementById()`方法获取到的是一个元素对象, 因而这个对象也有属性和方法. 便可以使用结果对象的相关属性和方法进行其他操作. 如:

    var dom = document.getElementById('id');
    dom.style.backgroundColor = '#FFF';
    
**注意**: 在IE8之前的版本中, `getElementById()`方法会匹配`name`属性与`id`同名的表单元素. 因而如果需要确保不会获取到表单元素, 需要在页面中保证不会出现`name`值与`id`名相同的表单元素.
    
##通过name属性获取元素

`getElementsByName()`方法是只有HTMLDocument类型才有的方法, 因而它只对HTML文档可用. 它用于返回具有指定`name`特性的所有元素, 即一个NodeList对象(相当于一个包含一组Element对象的只读数组). 注意这里`name`属性不一定是单个的元素, 可能是一组元素的集合(HTMLCollection). 例如具有相同`name`属性值的一组表单元素(单选或者复选框).

    document.getElementsByName('name');

`getElementsByName()`方法返回的NodeList对象也有很多属性和方法, 同样可以利用它的属性和方法进行其他操作.

**注意**: 在某些版本的IE中`getElmentsByName()`方法会匹配具有同名id属性值的元素. 因而需要小心的避免.

## 通过HTML标签名获取元素

Document对象有一个`getElementsByTagName()`方法, 它接受一个HTML标签名作为参数, 并取得匹配所有的匹配的标签名的元素, 它也返回一个NodeList对象. 返回的元素集合按照这些元素在文档中的顺序排列.

    document.getElementsByTagName('div'); // 获取文档中的所有div元素
    document.getElementsByTagName('p'); // 获取文档中的所有p元素
    document.getElementsByTagName('*'); // 获取文档中的所有元素
    
`getElementsByTagName()`不仅可用于Document对象, 它还可以基于现有的Element对象, 获取其后代元素.

    var firstDiv = document.getElementsByTagName('div')[0];
    var spans = firstDiv.getElementsByTagName('span'); // 获取文档中第一个div中的所有span元素
    
同样的, 使用`getElementsByTagName()`方法获取的NodeList也有很多属性和方法, 可以利用相关的属性和方法进行其他操作. 下面展示了几个常见的属性和方法.

    var div = document.getElementsByTagName('div');
    div.length; // 获取文档中div的数量
    div[0].id; // 获取文档中第一个div的id属性值, 如果它存在
    div.item(0).id; // 通过NodeList的item方法获取文档中第一个div的id属性值
    
    var images = document.getElementsByTagName('img');
    images.nameItem('name'); // 获取images集合中具有name属性值的元素
    
**注意**: 

1. `getElememtsByTagName()`;不区分HTML标签的大小写.
2. 在早期版本的IE中, 由于注释被实现为元素, 因而`document.getElementsByTagName('*')`;也会返回所有的注释节点.

##通过ClassName获取元素

HTML5中添加了一个`getElementsByClassName()`方法用于获取指定`className`(class在JavaScript中是关键字, 因而在DOM操作中使用`className`替代)值的元素. 这个方法可以通过Document对象或者现有的元素对象调用. 它接受一个或多个[空格分割]`className`值(顺序无关), 返回匹配的NodeList对象(它返回的是后代元素).

    var items = document.getElementsByClassName('item'); // 获取文档中所有className为'item'的元素
    var doms = document.getElementsByClassName('a b'); // 获取文档中所有同时具有className为a和b的元素
    var users = document.getElementById('list').getElementsByClassName('user'); // 获取文档中id为list的元素下所有className为user的元素
    
使用`getElementsByClassName()`不在局限于使用`id`或者标签名的方式获取元素. 但注意它返回的是NodeList对象, 一个只读形式的类数组对象. 在使用过程需要避免直接对NodeList进行操作.

**注意**: 在"怪异模式中"`getElementsByClassName()`方法在匹配`className`时不区分大小写.

由于IE9之前的版本并不支持这个方法, 因而需要基于现有的技术模拟实现. 下面提供一个<<JavaScript设计模式>>作者实现的版本:

    function getElementsByClass(searchClass,node,tag) {
        var classElements = new Array();
        if ( node == null ){
            node = document;
        }
        if ( tag == null ){
            tag = '*';
        }

        var els = node.getElementsByTagName(tag);
        var elsLen = els.length;
        var pattern = new RegExp('(^|\\\\s)'+searchClass+'(\\\\s|$)');

        for (i = 0, j = 0; i < elsLen; i++) {
            if ( pattern.test(els[i].className) ) {
                classElements[j] = els[i];
			        j++;
            }
        }

        return classElements;

    }
    
扩展阅读:  [document.getElementsByClassName理想实现](http://www.cnblogs.com/rubylouvre/archive/2009/07/24/1529640.html)

##querySelector()方法

W3C标准的Selector API Level1中提供了两个核心的方法`querySelector()`和`querySelectorAll()`, 可以通过Document对象或者基于现有的元素, 以及在文档片段(DocumentFragment)中调用这两个方法获取匹配的元素.

`querySelector()`方法接受一个CSS选择符字符串, 返回与这个选择符模式匹配的**第一个元素**. 如果没有匹配则返回`null`.

    var body = document.querySelector('body'); // 获取body元素
    var firstLi = document.querySelector('#list li:first-child'); // 获取id为list的元素中第一个li元素
    
    var dom = document.getElementById('id');
    var lastLi = dom.querySelector('li:last-child');
    // 获取文档中id为id的元素下最后一个li元素, 通过现有的元素调用querySelector方法获取
    
**注意**:

1. 规范中并没有规定要求`querySelector()`支持CSS3选择器
2. `querySelector()`方法并不能应用于类似`:first-line`/`:visited`等匹配文本节点的伪元素或者匹配元素状态的伪类中.

兼容性:

<table>
    <thead>
        <tr>
            <th>Chrome</th>
            <th>FireFox</th>
            <th>Safari</th>
            <th>Opera</th>
            <th>IE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>3.5</td>
            <td>3.2</td>
            <td>10</td>
            <td>8</td>
        </tr>
    </tbody>
</table>

参考阅读:

1. [querySelector 和 querySelectorAll 方法浏览器实现无误，避免将其与 JQuery 的选择器混淆](http://w3help.org/zh-cn/casestudies/003)
2. [各浏览器中querySelector和querySelectorAll的实现差异](http://www.cnblogs.com/snandy/archive/2011/03/30/1999388.html)
3. [Can I Use querySelector/querySelectorAll](http://caniuse.com/queryselector)

##querySelctorAll()方法

`querySelectorAll()`方法同样接受一个CSS选择器作为参数, 但它返回的是一个NodeList对象. 如果没有匹配它返回一个空的NodeList对象; 如果传递的参数为不合法的字符串它抛出错误.

`querySelectorAll()`返回的是一组元素的快照, 它无法根据文档的后续更新而重新获取更新后的NodeList对象. 

同样可以通过Document对象, 基于现有的元素或者文档片段调用这个方法. 

    var items = document.querySelectorAll('.item')// 返回文档中所有className为item的元素
    var doms = document.querySelectorAll('.a, .b');
    var users = document.getElementById('list').querySeelctorAll('.user');
    var spans = document.querySelectorAll('* span');
    
##matchesSelector()方法

这个方法是在Selectors API Level2中定义的. 它只能用于Element类型的元素上. 它接受一个CSS选择符参数. 如果调用该方法的元素于参数选择符匹配则返回true, 否则返回false.

    if(document.body.matchesSelector('.body')){
        // do something...
    }

使用这个方法可以用于检测能否使用`querySelector`或者`querySelectorAll`方法返回. 

###差异

1. IE9+ 中实现为msMatchesSelector()
2. FireFox中实现为mozMatchesSeletor()
3. Safari5+/Chrome中实现为webkitMatchesSelector()

扩展阅读: 

1. [为什么document.getElementsByTagName比querySelectorAll更快](http://www.nczonline.net/blog/2010/09/28/why-is-getelementsbytagname-faster-that-queryselectorall/)

##特殊集合

除了上述的方法, `document`对象中还定义了一些特殊的集合. 提供了访问文档的快捷方式:

1. `document.anchors`获取所有带name属性的a元素
2. `document.forms`获取文档中的所有form元素
3. `document.images`获取文档中的所有img元素
4. `document.links`获取文档中的所有带href属性的a元素

##关于NodeList于HTML集合

> getElementsByName/getElementsByTagName获取到的是NodeList对象. 上述特殊集合所获取到的是HTML集合.

> NodeList和HTML集合是只读的类数组对象, 它们有length属性和其他的自己的方法, 如item()等. 但不能直接使用Array的方法.




    


    



    
    