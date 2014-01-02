// Quicksort
// http://en.wikipedia.org/wiki/Quicksort
var quickSort = function(arr) {
	// 检查参数是否合法
	if(!Array.isArray(arr)) {

		throw Error('参数非法');

	}
	// 处理0个[空数组]或1个数组元素的情况
	if(arr.length <= 1) {
		return arr;
	}
	// 获取中间/临近中间的元素索引
	var m = Math.floor(arr.length/2);
	// 根据中间元素索引将中间元素拿出来
	var e = arr.splice(m, 1)[0];

	// 缓存分割后的数组
	var l = [];
	var r = [];
	console.log(e);

	// 遍历数组并归档缓存
	for(var i=0,len=arr.length;i<len;i++) {

		if(arr[i] < e) {

			l.push(arr[i]);

		} else {

			r.push(arr[i]);

		}

	}

	// 递归的方式调用自身排序数组元素
	return quicksort(l).concat([e], quicksort(r));

};