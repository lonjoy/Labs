// 快速排序
// http://en.wikipedia.org/wiki/Quicksort

var qs = function(arr) {
	// 0/1 个元素
	if(arr.length <= 1) {
		return arr;
	}
	// 选取中间或临近中间元素索引
	var mIndex = Math.floor(arr.length/2);
	// 选取中间的基准元素
	var mItem = arr.splice(mIndex,1)[0];
	// 定义存放基准元素左右的部分的空数组
	var l = [],
		r = [];

	// 分割数组
	var arrLength = arr.length;

	for(var i=0;i<arr.length;i++) {

		if(arr[i] < mItem) {

			l.push(arr[i]);

		} else {

			r.push(arr[i]);

		}
	}

	// 递归调用自身处理左右l和r数组, 最后返回合并好的数组
	return qs(l).concat([mItem], qs(r));
};

/**
 * usage
 * var origin = [12,3343,23,4567,31,99,06,82,120,1,987,463,5,714,99]
 * var result = qs(origin)
 * result -> [1, 5, 6, 12, 23, 31, 82, 99, 99, 120, 463, 714, 987, 3343, 4567]
 */