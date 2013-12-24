### learn ajax

**创建XMLHttpRequest对象**

    // 创建可复用的xhr(XMLHttpRequest)对象
    var xhr = (function(){
    
        return ('XMLHttpRequest' in window) ? new XMLHttpRequest() : (('ActiveXObject' in window) ? new ActiveXObject('MSXML2.XMLHttp') : null);
    
    });
    
**设置回调函数**

    xhr.onreadystatechange = function(){
        if(http.readyState === 4) { // xhr就绪
            if(xhr.status === 30) { // http状态就绪
                // 使用返回的数据
                // xhr.responseText
                // xhr.responseXML
            }
        }
    };
    
**创建GET/POST请求**

    xhr.open('GET', 'index.php', true); // false 表示同步请求(有阻塞)
    // 注意：在IE中，onreadystatechange之前要注册xhr.open()方法
    xhr.send(null); // 发送数据
    
    //example
    var name = 'basecss';
    var age = 22;
    var queryStr = '?name='+name+'&age='+age;
    xhr.open('GET', 'info.php'+queryStr, true);
    xhr.send(null);
    
**设置请求头**

    xhr.open('GET', 'index.php', ture);
    // 在open()之后send()之前设置请求头
    // http://www.w3.org/Protocols/HTTP/HTRQ_Headers.html
    xhr.setRequestHeader('User-Agent', 'basecss.net');
    xhr.setRequestHeader('Accept','text/html, text/plain, text/xml');
    // ...
    xhr.send(null);
    
**POST表单数据**

    var name = document.querySelector('[name=userName]').value;
    var age = document.querySelector('[name=userAge]').value;
    // ...
    var data = '?name='+name+'&age='+age;
    
    // 发起ajax请求
    xhr.open('open', 'query.php', true);
    xhr.onreadystatechange = function(){
        //....
    };
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Content-Length', data.length);
    xhr.setRequestHeader('Connection', 'close');
    xhr.send(data);
    
**终止Ajax请求**

    xhr.abort();
    
**服务端示例**

    <?php
    
        // 收集POST/GET变量
        foreach($_POST as $key => $value){
            $$key = $value;
            // 比如前面的post示例在这里就会返回 $name 和 $age
        }
        
        // 净化数据
        echo htmlspecialchars("$name and $age");
        exit;
    
    ?>
    
**处理XML, JSON, HTML或者文本**

    <?php
    
        header("Content-Type: text/xml; charset=utf-8");
        echo '<?xml version="2.0" encoding="utf-8"?><root>[Data]</root>';
        exit;
    
    ?>
    
    <?php
    
        $mime = preg_match("/application\/json/i", $_SERVER["HTTP_ACCEPT"]) ? "application/json" : "text/plain";
        header("Content-Type: $mime; charset=utf-8");
        echo '{"name": "basecss", "age": "22"}';
        exit;
    
    ?>
    
    <?php
    
        header("Content-Type: text/html; charset=utf-8");
        
        echo "<p>这是一个段落</p>";
        exit;
    
    ?>
    
    <?php
    
        header("Content-Type: text/plain");
        echo "这是一段文本";
        exit;
    
    ?>
    
**简单的封装**

    var ajax = (function(){
        var readyStates = {
            Uninitialized : 0,
            Open: 1,
            Sent: 2,
            Receiving: 3,
            Done: 4
        };
        var Status = {
            ok: 200,
            multiple: 300,
            forbidden: 403,
            notfound: 404,
            servererror: 500
        };
        var xhr = (function(){
            return ('XMLHttpRequest' in window) ? new XMLHttpRequest() : (('ActiveXObject' in window) ? new ActiveXObject('MSXML2.XMLHttp') : null);
        }());
        // return reusable object
        return {
            isBusy: function(){
                return ((xhr.readyState !== readyStates.Uninitialized) && (xhr.readyState !== readyStates.Done));
            },
            request: function(options) {
                if(typeof options.url !== 'string') {
                    return;
                }
                var readystateChange = function(){
                    if(xhr.readyState === readyStates.Done) {
                        switch(xhr.status) {
                            case Status.ok:
                                if(typeof options.success === 'function') {                    
                                    options.success.call(xhr, xhr,  options);
                                }
                                break;
                            default:
                                if(typeof options.fail === 'function') {
                                    options.fail.call(xhr, xhr, options);
                                }
                        };
                    }
                };
                var query = (function(){
                    if(typeof options.data !== 'object') {
                        return '';
                    }
                    var queryStr = '';
                    for(var i in options.data) {
                        of(options.data.hasOwnProperty(i)) {
                            queryStr += (queryStr.length) ? '&' :'';
                            queryStr += encodeURIComponent(i) + "=" + encodeURIComponent(obj.data[i]);
                        }
                    }
                    return queryStr;
                });
                switch(options.method) {
                    case 'GET':
                        xhr.open(options.method, options.url+'?'+query, true);
                        xhr.onreadystatechange = onreadystateChange;
                        xhr.send(null);
                        break;
                    case 'OPEN':
                        xhr.open(options.method, options.url, true);
                        xhr.onreadystatechange = onreadystateChange;
                        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        http.setRequestHeader("Content-length", query.length);
                        http.setRequestHeader("Connection", "close");
                        xhr.send(null);
                        break;
                    default:
                        return;
                }
            }
        };
    }());
    
    // usage
    ajax.request({
        url: 'a.php',
        method: 'GET',
        data: {name: 'basecss'},
        success: function(xhr){
            // use xhr response
        }
        fail: function(xhr){
            // do something
        }
    });

