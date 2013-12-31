# Promise API 初探

`Promise` 对象相当于某个值当前还不可用，在未来某个时刻解析。它允许开发人员使用同步的方式编写异步代码。例如：使用 Promise API 创建一个异步请求来请求服务端的数据，我们只需要创建一个 `Promise` 对象，这个对象相当于在未来某个时刻返回服务器端发出的数据。而实际上数据还没有完整的获取。在请求完整比起那个从服务端返回响应的时候才能够使用。在此期间 `Promise`对象实际上就是实际数据的代理。此外，可以在给 `Promise` 对象附加一个回调函数，一旦数据可用的时候就处理它。

> 目前 `Promise` 还只是一个实验性特性。在 Chrome 32+ 以及最新版的 Firefox nightly 版本中能够使用。

### API 介绍

使用下面的方式可以创建一个 `Promise` 对象：

```javascript
if(window.Promise) { // 检测浏览器是否支持 Promise API
    var promise = new Promise(function(){
        // 在这里编写异步代码
    });
}
```

在上面的代码示例中，首先创建了一个 `Promise` 对象实例，并且给它传递了一个回调函数。注意，这个回调函数接收了两个参数，分别是 `resolve()` 和 `reject()`，这两个参数都是函数。而所有的异步代码都在传递给 `Promise` 对象的回调函数中。那么，一旦回调函数的任务成功完成，`Promise` 就会通过调用 `resolve()` 函数结束。而一旦任务触发一个错误，那么 `reject()` 就会调用，并且会触发一个 `Error`。这就表示 `Promise` 被驳回了。

下面来看一个例子，了解如何使用 `Promise` 对象。在下面的代码中，创建了一个异步请求，希望从服务器端获取一个随机的数据，并且以 `JSON` 格式返回。

```javascript
if(window.Promise) {
    var promise = new Promise(function(resolve, reject){ // 异步逻辑在回调函数中
        var xhr = new XMLHttpRequest();
        xhr.open('GET','http://xxx.example.com/getdata');
        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(xhr.response); // 获取数据成功时解析数据
            } else {
                reject(Error(xhr.statusText)); // 如果失败，则驳回
            }
        };
        
        xhr.onerror = function(){
            reject(Error('获取数据失败')); // 如果请求失败也驳回
        };
        
        xhr.send(); // 发起请求
    
    });
    
    // 至此，我们已经创建了一个异步请求，接下来使用 promise 处理异步代码
    
    promise.then(function(data){
        console.log(data); // 数据获取成功则输出数据 -> resolve
    }, function(error){
        console.log(error.message); // 任务失败则驳回请求
    });
} else {
    console.log('贵浏览器不支持 Promise API, 赶紧升级吧！');
}
```

上面的代码中，`Promise()` 构造器包含了一个用于从远程服务器获取数据的异步代码。在这个异步代码中，我们创建了一个 AJAX 请求，希望从服务器 ( `http://xxx.example.com/getdata` ) 获取一个随机的数据。如果从这个远程服务器上获取到数据，就传递给 `resolve()` 函数。如果获取失败或者触发错误，就调用 `reject()` 函数并给它传递响应的错误信息。

在这里，当我们创建 `Promise` 对象实例的时候就获取了一个代理，在未来某科时刻可以利用某些数据。在前面的例子中，我们就希望在请求成功的时候能够利用从远程服务器上返回的数据。那么，我们如何得知数据什么时候可用呢？这便是 `Promise.then()` 的用处。这个 `then()` 函数接受两个参数，一个处理成功状态的回调函数和一个处理失败状态的函数。这里的成功表示回调函数执行结果。这两个回调函数会在 `Promise` 对象确定的时候，也就是 `Promise` 对象实例化达成的时候调用 (无论是达成还是驳回都会调用)。如果 `Promise` 达成，那么就会将成功获取的实际九局传递给 `resolve()` 函数来处理成功状态。如果 `Promise` 被驳回，则调用处理失败状态的 `reject()` 函数。无论是否显示的将 `reject()` 传递给回调函数，都会传递一个参数给 `Promise` 对象的回调函数来处理失败状态。

**示例:**

```javascript
if(window.Promise){

	console.log('Promise可用');

	var promise = new Promise(function(resolve,reject){

		var request = new XMLHttpRequest();

		request.open('GET', 'http://api.icndb.com/jokes/random');

		request.onload = function() {

		if (request.status == 200) {

			resolve(request.response);

		}
		else {

			reject(Error(request.statusText));

		}
	};

	request.onerror = function() {

		reject(Error("Error fetching data."));

	};

	request.send();

	});

	console.log('异步请求发起完成.');

	promise.then(function(data){

		console.log('数据获取成功, Promise 达成.');

		document.getElementsByTagName('body')[0].textContent=JSON.parse(data).value.joke;

	},function(error){

		console.log('Promise 被驳回.');

		console.log(error.message);
		
	});

} else {
	console.log('Promise 不可用');
}
```

在浏览器中运行上面的代码看看。然后刷新页面来获取一调随机的数据。然后开启浏览器的控制台查看代码的执行状态。

注意，一个 `Promise` 有三个状态:

- 等待 ( pending ) [此时未达成也未被驳回]
- 达成
- 被驳回

`Promise` 有一个代码无法访问的私有属性: `Promise.status`，它可以提供 `Promise` 的状态信息。一旦一个 `Promise` 对象达成或者被驳回，这个状态就会永远伴随这个 `Promise` 对象。也就是说，一个 `Promise` 只会成功或者失败一次。如果 `Promise` 达成，那么附属的 `then()` 函数就会调用处理成功状态的函数。因此，在 Promise 的世界中，我们对 Promise 对象何时确定无需关心，只需关心 Promise 的最后结果。

### Promise 链

有时候我们可能需要连续使用 Promise。例如: 可能要执行多个异步操作。当一个操作某个操作执行完成并返回数据时，你可能希望利用这些数据又开始执行其他操作。Promise 提供了链式调用的方式。

```javascript
function getPromise(url) {
    // 在这里我们创建并返回一个 promise 对象
    // 然后根据提供的 url 发起一个异步请求，作为所创建的 promise 的一部分
    // 然后获取到返回的数据结果，并且使用这个结果解析 promise
};

var promise = getPromise(url);

promise.then(function(result){
    // 在这里我们获取并返回请求结果
    return getPromise(url);
}).then(function(result){
    // 然后在这里做处理最终结果
});
```

上面的示例中，比较棘手的一部分是当在 `then()` 里面返回一个简单的值时，接下来的 `then()` 伴随前面的 `then()` 返回的结果来调用。

但是如果在第一个 `then()` 中返回一个 `Promise`，那么接下来的 `then()` 就会等待它执行，并且在前一个 `then()`函数中的 `Promise` 确定的时候调用。

### 错误处理

前面我们已经讨论了，`then()` 函数接收两个回调函数作为参数。而第二个参数回调会在 `Promise` 被驳回的时候调用。但是，在 `Promise` 中有一个 `catch()` 函数可以用来处理 `Promise` 被驳回的任务。

```javascript
promise.then(function(data){
    console.log(data); // Promise 达成后输出数据
}).catch(function(error){
    console.log(error.message); // Promise 被驳回是抛出错误
});
```
上面的代码等价于:

```javascript
promise.then(function(data){
    // use data
}).then(undefined, function(error){
    // throw error
});
```

如果 `Promise` 被驳回，并且第一个 `then()` 没有传递处理失败的回调啊还能输，控制流就会进入下一个带有失败回调函数的 `then()` 函数或者进入 `catch()` 流程。除了显示的处理 `Promise` 驳回状态，一旦 `Promise()` 构造器的回调函数抛出任何类型的错误信息，`catch()` 都会被调用。因此，可以始终使用的 `catch()` 来达到目的。

虽然我们可以使用 `try..catch` 处理错误，但是对于 `Promise` 来说这是没必要的，`Promise` 中的任何异步或者同步错误始终都会通过 `catch()` 来捕获。

### 小结

本文只是简单的介绍了 JavaScript 中的 Promise API。显然，它让我们编写异步代码变得更容易。即使我们像往常一样，不知道从异步代码中会返回什么值。还有跟多的 Promise 相关的 API 在这里没有介绍。下面提供了一些资源，可以了解到更多的和 Promise 相关的信息。

- [HTML5Rocks - Promises教程](http://www.html5rocks.com/en/tutorials/es6/promises/)
- [MDN Promise 参考](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise)