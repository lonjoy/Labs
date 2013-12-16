# JavaScript中的 `this` 笔记

**函数中的 `this`**

函数中的 `this` 指向 `Window` 对象(浏览器中，下同)。

    function fn() {
        console.log(this); // Window
    }

当函数作为构造函数时，`this` 指向构造函数。
    
    var o = new fn(); // fn {}

**对象中的 `this`**

    var o = {
        fn: function() {
            console.log(this);
        }
    };
    
直接调用对象方法时 `this` 指向调用该方法的对象。

    o.fn(); // o
    
将对象方法赋值给其他变量时 `this` 指向 `Window`。

    var other = o.fn();
    other(); // Window
    
**注意**： 严格模式中的 `this`。[strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)

**改变 `this` 指向**

`.call`, `.apply`, `.bind` 方法可以改变 `this` 指向，将传递进去的第一个参数作为 `this`。

**其他情况**

    var o = {
        fn: function(){
            method(arg, function(){
                console.log(this); // Window
            });
        }
    };
    
    // cache this
    var o = {
        fn: function(){
            var self = this;
            method(arg, function(){
                console.log(self); // o
            });
        }
    };
    // use .bind
    var o = {
        fn: function(){
            method(arg, function(){
                console.log(this);
            }).bind(this);
        }
    };
    // ....
    
    function fn(){
        console.log(this); // window
        return function(){
            console.log(this); // Window
        }
    }
    

    
