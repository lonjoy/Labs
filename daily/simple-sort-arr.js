var defaultSort = [1,2,3,4,5,6,7,8,9,10,10];

function sort(arr) {

	var myArr = arr || [2,1];
	var result = [];

	defaultSort.forEach(function(item) {

		if(myArr.indexOf(item) > -1) {

			result.push(item);
		
		}

	});

	return result;

}