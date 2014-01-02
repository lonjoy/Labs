// mergeSort
// http://en.wikipedia.org/wiki/Merge_sort
// 用户合并两个数组的方法
var merge = function(l, r) {

	var cache = [];
	while(l && l.length > 0 && r && r.length > 0) {

		var temp = l[0] <= r[0];
		cache.push(temp ? l[0] : r[0]);
		// 移除原数组已排序的元素
		temp ? l.splice(0,1) : r.splice(0, 1);

	}

	return cache.concat(l, r);

};
var mergeSort = function(arr) {

	if(!Array.isArray(arr)) {

		throw Error('参数非法');

	}

	if(arr.length <= 1) {

		return arr;

	}

	var m = Math.floor(arr.length/2);

	var l = arr.slice(0, m);
	var r = arr.slice(m, arr.length);

	return merge(mergeSort(l), mergeSort(r));

};