// 对象合并
var combo = function() {
	// 对象属性复制
	var extend = function(dest, source) {
		// 遍历扩展源对象
		for(var key in source) {
			// 自由属性检测，过滤已有属性
			if(source.hasOwnProperty(key) && !dest[key]) {

				dest[key] = source[key]

			}

		}

	};
	// 将第一个参数对象作为扩展的对象
	var ret = arguments[0];
	// 遍历其他参数对象并复制属性
	for(var i=1;i<arguments.length;i++) {
		// 复制每个参数对象的属性
		ret = extend(ret, arguments[i]);
	}

	// 返回扩展后的对象
	return ret;

};

// example
var aa = {};
var bb = {
	name: 'basecss',
	age: 22
};
console.log(combo(aa, bb));
var cc = {
	job: 'f2e',
	city: '深圳'
};
console.log(combo(aa,cc));