function ajax(url, options) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		var completed = 4;
		if(xhr.readyState === completed) {
			if(xhr.status === 200) {
				options.success(xhr.responseText, xhr);
			} else {
				options.error(xhr.responseText, xhr);
			}
		}
	};
	xhr.open(options.method, url, true);
	xhr.send(options.data);
}

// usage
ajax('/interface', {
	method: 'GET',
	success: function(data) {
		console.log(data);
	},
	error: function(data) {
		console.log(data);
	}
});