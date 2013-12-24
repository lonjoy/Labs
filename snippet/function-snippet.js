// empty element
function emptyElement(ele) {
	while(ele.firstChild) {
		ele.removeChild(ele.firstChild);
	}
};
// simple ajax implement
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
/*
 * usage
 * ajax('/a.cgi', {
 *	method: 'GET', // or POST
 *  success: function(data){...},
 *  error: function(data){...}
 * });
 */
// simple Event manager
function addEvent(ele, type, callback) {
	if(ele.addEventListener) {
		ele.addEventListener(type, callback, false);
	} else if(ele.attachEvent) {
		ele.attachEvent('on'+type, callback)
	} else {
		ele['on'+type] = callback;
	}
}
function removeEvent(ele, type, callback) {
	if(ele.removeEventListener) {
		ele.removeEventListener(type, callback);
	} else if(ele.detachEvent) {
		ele.detachEvent(ele, callback);
	} else {
		ele['on'+type] = null;
	}
}
