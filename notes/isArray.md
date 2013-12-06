## Array.isArray

- <http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.3.2>
- <https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.isarray>

### Array.isArray(arg)

`isArray` 方法接受一个 `arg` 参数，如果参数是一个对象并且其内部属性为"Array"，那么它返回 Boolean 值 **true**，否则返回 **false**。实际上它会执行以下操作：

- 如果参数 `arg` 的类型不为对象，则返回 **false**
- 如果参数 `arg` 的内部属性 [[Class]] 的值为 **Array**，则返回 **true**
- 否则返回 **false**

### 低版本IE浏览器Polyfill
	
	if(!Array.isArray || !isArray) {
		var isArray;
	    Array.isArray = isArray = function isArray(arr) {
	        return Object.prototype.toString.call(arr) === '[object Array]';
	    }
	}

#### 用法

	var arr = [1,2,3,4];

	Array.isArray(arr); // true
	isArray(arr); // true

	Array.isArray([1,2]);
	isArray([1,2]);
