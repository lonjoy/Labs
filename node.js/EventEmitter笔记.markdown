# `EventEmitter`

    // 载入 events 模块
    var events = require("events").EventEmitter;
    
Node.js 的 `events` 对象只有一个属性，就是 `EventEmitter` 自身。

    // 创建一个 EventEmitter 对象
    var myEvent = new EventEmitter();
    
然后使用 `EventEmiiter` 实例的 `on` 和 `emit` 方法来监听和触发事件。

`on` 方法接受两个参数：事件名称和事件触发时的回调函数。

    myEvent.on('eventName', function(){
    
        console.log('Hello Node.js');
    
    });
    
`emit` 方法同于触发指定的事件，接受一个事件名称参数。

    myEvent.emit('eventName');
    
使用 `emit` 触发事件时也可以传入传递给事件回调的参数。

    myEvent.emit('eventName', function(data){
    
        console.log(data);
    
    });
    var argData = 'data';
    myEvent.emit('eventName', argData);
    
使用 `on` 可以给同一事件添加多个事件监听器，默认情况下最多可以添加10个。这些事件监听器在事件触发时会同时执行。

    myEvent.on('myEvent', callback1);
    myEvent.on('myEvent', callback2);
    ....
    
    myEvent.emit('myEvent');
    
如果大于10个，就会报错。可以使用 `setMaxListeners` 设置添加大于10个监听器。

    myEvent.setMaxListeners(100);
    
`EventEmitter` 实例的 `once` 方法只会执行一次，第一次执行完成之后就会移除对应的事件监听器。

    myEvent.once('eventName', callback);
    myEvent.emit('eventName');
    // 再次触发不会执行
    myEvent.emit('eventName');
    
使用 `removeListener` 方法移除事件监听。它接受两个参数：事件名称和事件监听器函数。

    function doSomething() {
    
        // do something
        myEvent.removeListener('eventName', doSomething);
    
    }
    
    myEvent.on('eventName', doSomething);
    myEvent.emit('eventName');
    // 执行一次后被移除，再次执行就不再存在了
    myEvent.emit('eventName');
    
`removeAllListeners()` 可以之处指定的多个事件，如果不传递参数则移除所有的事件。

    myEvent.removeAllListeners('eventA', 'eventB');
    // 移除所有事件
    myEvent.removeAllListeners();
    
`listener` 方法用于返回指定事件的所有事件监听器数组。接受指定事件名作为参数。

    myEvent.listener('eventName');
    
## 继承 `EventEmitter`

Node.js 中很多模块都默认继承了 `EventEmitter`。 比如：http模块:

    var http = require('http');
    var server = http.createServer();
    
    server.on('request', function(req, res){
        res.end('response');
    });
    
    server.listen(3000);
    
通过浏览器访问 `http://localhost:3000` 的时候从浏览器获取请求，然后触发 `request` 事件。

使用 Node.js 内置的 `util` 模块可以很方便的在自定义模块中继承 `EventEmitter`。

    var util = require('util');
    var EventEmitter = require('events').EventEmitter;
    
    // 让自定义构造函数继承EventEmitter
    function Construct() {
        EventEmitter.call(this);
    }
    
    // 原型继承
    // Construct.prototype = EventEmitter.prototype
    util.inherits(Construct, EventEmitter);
    
    // 在构造函数实例中使用 EventEmitter 的方法
    Construct.prototype.methodName = function(){
        // 使用 EventEmitter 方法
    }
    
    module.exports = Construct;
    // 保存模块 Construct.js
    
    // use Construct
    var Module = require('./Construct');
    
    var mod = new Module();
    
    mod.on('eventName', callback);
    mod.emit('eventName');
    mod.methodName();
    mod.methodName(data)
    
### 参考阅读

- <http://nodejs.org/api/events.html>
- <http://nodejs.org/docs/latest/api/util.html#util_util_inherits_constructor_superconstructor>
- <https://github.com/joyent/node/blob/master/lib/_http_agent.js>
    