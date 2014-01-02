// selectionSort
// http://en.wikipedia.org/wiki/Selection_sort
/**
 * stag
 * 1. 将当前项与每一项比较
 * 2. 将比当前项更小的与当前项交换
 * 3. 自增当前项索引，重复1，2直到完成任务
 */
// 用于交换元素的方法
var swap = function(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}
var selectionSort = function(arr) {
	// 检查参数合法性
	if(!Array.isArray(arr)) {

		throw Error('参数非法');

	}

	var len = arr.length;
	// 缓存当前进行比较的元素
	var cache;

	for(var i=0;i<len;i++) {

		cache = i;

		for(var j=i+1;j<len;j++) {

			if(arr[j] < arr[cache]) {
				cache = j;
			}

		}

		if(cache !== i) {

			swap(arr, i, cache);

		}

	}

	return arr;

};