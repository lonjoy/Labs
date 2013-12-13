#CSS半透明总结

##opacity

CSS中的`opacity`属性用于给元素指定一个0(全透明)-1(不透明)的透明度值, 但是这个值会应用到覆盖在背景之上的元素. 

###兼容性如下:

<table>
    <thead>
        <tr>
            <th>Chrome</th>
            <th>FireFox</th>
            <th>Internet Explorer</th>
            <th>Opera</th>
            <th>Safari</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.0</td>
            <td>1.0</td>
            <td>9.0</td>
            <td>9.0</td>
            <td>1.2</td>
        </tr>
    </tbody>
</table>

### IE中的半透明

在IE8及早期版本的IE中, 需要使用IE系私有的filter属性处理, 其中分别有三种方式:

+ filter: alpha(opacity=value); <sup>[1]</sup>
+ filter: "alpha(opacity=value)"; <sup>[2]</sup>
+ -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"; <sup>[3]</sup>
+ filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);

[1] 直到IE9才支持opacity属性, 但是在之前的版本中都使用支持filter替代, 并且在IE中使用filter属性实现透明的元素需要触发hasLayout使其具备layout特性.

[2] **<strong style="color:red;">据说</strong>**在IE8标准模式中, filter属性的值需要使用引号包裹起来.

[3] IE4-IE9中支持的一种扩展形式的编写方式.

[4] IE中介绍了`-ms-filter`, 实质上只是filter属性的一个代名词. 在IE10中不再存在.

###前缀

FireFox 0.9之前使用`-moz-opacity`实现, 之后便重命名为`opacity`. 但之后`-moz-opacity`一直都作为`opacity`的别名存在. 但是FireFox 3.5之后不再支持`-moz-opacity`属性, 此时也移除了在JavaScript中支持的`MozOpacity`属性.**据说**在FireFox早期版本中opacity属性的实现取决于其Gecko的版本.

在早期发布的Safari 1.2中支持`-khtml-opacity`的方式实现半透明. 

Konqueror从不支持`-khtml-opacity`的形式, 从4.0开始便支持`opacity`.

###应用

在实际应用中, 由于`opacity`/`filter`的透明度会应用于子元素, 因而常见的的做法是使用两个毗邻的元素, 一个用于处理背景层, 一个用于处理前景的内容层. 其中背景层的要层叠在内容层底部, 使用定位的方式便可以实现. 示例:

    .bg {
        height: 100px;
        background: #000;
        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
        -moz-opacity: .5;
        -khtml-opacity: .5;
        opacity: .5;
    }
    .content {
        position: relative;
        top: 0;
        height: 100px;
        color: #fff;
        z-index: 10; /* 处理层叠 */
    }
    
    <div class="content">内容</div>
    <div class="bg"></div>
    
##RGBA

CSS2.1中开始支持RGB色彩值, CSS3中为RGB色彩添加了Alpha通道. 可以用于处理alpha渲染和alpha合成[据说alpha与RGBA是有故事的]. RGBA允许将元素设置为透明, 但不影响子元素.
    
    background: rgba(0, 200, 200, .5);

###RGBA兼容性

<table>
    <thead>
        <tr>
            <th>Chrome</th>
            <th>FireFox</th>
            <th>Internet Explorer</th>
            <th>Opera</th>
            <th>Safari</th>
            <th>iOS(Safari)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>All</td>
            <td>3.0+</td>
            <td>9.0</td>
            <td>10.x+</td>
            <td>3.x+</td>
            <td>All</td>
        </tr>
    </tbody>
</table>

###IE中的RGBA

IE9之前的IE版本不支持RGBA, 可以使用一个私有的CSS滤镜实现RGBA的效果. [IE中的RGBA表现形式应该称作: ARGB啦] 示例代码:

    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#FFFFFFFF,endColorstr=#FFFFFFFF);
    
DXImageTransform.Microsoft.gradient滤镜中的startColorstr参数值是#AARRGGBB形式的, 其中AA便是代表不透明度(Alpha通道值)的十六进制表示, 其中00表示全透明, FF表示完全不透明, 转化为十进制便是0~255范围之间的值, 剩下的六位便是RRGGBB颜色的十六进制代码.

Alpha计算方式: x = value*255/10再转换为十六进制

###应用

RGBA可应用于background, border属性中, 在早期版本的FireFox中Border的拐角处的rgba会叠加.[测试在FireFox17中不再出现叠加的现象].

在IE9中, 已经支持RGBA形式, 但是同时也支持filter形式. 因此需要使用hack的方式清除filter形式.

    :root .selector {
        filter: none\9;
    }
    
###转换函数

这里提供一个RGBA值转换为ARGB的函数.

    /*
     *@param Number 转换为十六进制的值
     */
    function toHex(val){
        val = parseInt(val);
        val = Math.max(0, val);
        val = Math.min(val, 255);
        val = Math.round(val);
        return '0123456789ABCDEF'.charAt((val - val % 16) / 16) + '0123456789ABCDEF'.charAt(val % 16);
    }
    /*
     *@param String 字符串形式的rgba值
     */
    function toArgb(val){
        var valArr = val.split("(")[1].split(")")[0].split(","),
            red = toHex(valArr[0]),
            green = toHex(valArr[1]),
            blue = toHex(valArr[2]),
            alpha = toHex(valArr[3] * 255);
        return '#'+ alpha + red + green + blue;
    }