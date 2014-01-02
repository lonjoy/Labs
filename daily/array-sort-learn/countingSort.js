// countingSort
// http://en.wikipedia.org/wiki/Counting_sort

var countingSort = function(arr) {

	if(!Array.isArray(arr)) {
		throw Error('参数非法');
	}

	var len = arr.length;

	var min = arr[0];
	var max = arr[0];

	for(var i=0;i<len;i++) {
		if(min > arr[i]) {
			min = arr[i];
		} else if(max < arr[i]) {
			max = arr[i];
		}
	}
	
	var counts = [];
	var ret = [];

	for(var j=0;j<max-min+1;j++) {
		counts[j] = 0;
	}

	for(var k=0;k<counts.length;k++) {
		counts[arr[k]-min]++;
	}

	var temp = 0;

	for(var n=0;n<counts.length;n++) {
		for(var m=0;m<counts[n];m++) {
			ret[temp++] = n + min;
		}
	}

	return ret;

};