
- Lazy initialization
- Lazy function definition
- Lazy loading

有利于避免重复一些较"昂贵"的操作 — 比如创建一个较复杂的对象，执行大量的计算或者过多的循环等。

**命令式**

    // loadScript.js
    function loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        if(script.readyState) {
            script.onreadystatechange = function(){
                if(script.readyState === 'loaded' || script.readySate === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function(){
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    
用法：

    <script src="loadScript.js"></script>
    <script type="text/javascript">
        loadScript('data.js', function(){
            // use data.js
        });
    </script>
    
以达到动态载入的脚本不会阻塞页面的载入。

**Lazy Factory**

按需生成。

    function createXHR() {
    
        if(typeof XMLHttpRequest !== 'undefined') {
            createXHR = function(){
                new XMLHttpRequest();
            };
        } else if(typeof ActiveXObject !== 'undefined') {
            createXHR = function(){
                new ActiveXObject('MSXML2.XMLHttp');
            };
        }
        
        return createXHR();
    
    }
    
    // usage
    var xhr = cretaeXHR();    

命令式的条件检测每次都要检测指定的条件是否成立。实际上，只需要进行一次条件检查，在同样的环境中，结果始终是一致的。对于复杂的应用，这样可以做到一次性跳过大量的不必要的代码执行过程。

**Lazy function definition**

首次调用的时候基于当前环境执行一次代码即可。

如:

    function getStyle(ele, property) {
        // if语句只会在出息调用getStyle()方法的时候会用以检测条件
        if(document.defaultView && document.defaultView.getComputedStyle) {
            getStyle = function(ele, property) {
                return document.defaultView.getComputedStyle(ele, '')[property];
            };
        } else if(ele.currentStyle) {
            getStyle = function(ele, property) {
                return ele.currentStyle[property];
            };
        } else {
            throw new Error('getStyle not supported on your browser');
        }
        return getStyle(ele, property);   
    }
    
工厂方法其实就是基于函数实现的。但是工厂方法同长返回一个对象，无论是通过使用`new`操作符的方式还是对象字面量`{}`的形式。而`Lazy Function`通常可以返回任意类型的数据。
