// bubbleSort
// http://en.wikipedia.org/wiki/Bubble_sort
/**
 * stag
 * 1. 比较第一个元素和第二个元素
 * 2. 如果第一个比第二个大就交换位置，否则移动到第二个和第三个元素进行比较，重复比较过程，不断的进行比较和交换操作
 * 3.返回达成的结果
 */
// 交换元素的方法
var swap = function(arr, a, b) {
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
};
var bubbleSort = function(arr) {

	if(!Array.isArray(arr)) {
		throw Error('参数非法');
	};

	var len = arr.length;

	for(var i=0;i<len;i++) {
		for(j=0;j<len-i;j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
			}
		}
	}

	return arr; 

};