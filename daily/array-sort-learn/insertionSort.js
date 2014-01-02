// insertionSort
// http://en.wikipedia.org/wiki/Insertion_sort
var insertionSort = function(arr) {
	// 检查参数是否合法
	if(!Array.isArray(arr)) {

		throw Error('参数非法');

	}

	// 数组长度
	var len = arr.length;
	// 当前进行比较的元素值
	var current;
	// 未排序部分的索引
	var i;
	// 排序部分的索引
	var j;

	// 遍历数组
	for(i=0;i<len;i++) {

		// 缓存当前进行比较的元素，比较的过程中会移动这个元素的位置
		current = arr[i];

		// 处理已排序部分的元素
		// 根据排序元素和未排序元素的大小比较移动元素
		for(j=i-1;j>=0 && arr[j]>current;j--) {

			arr[j+1] = arr[j];

		}

		arr[j+1] = current;

	}

	return arr;

};