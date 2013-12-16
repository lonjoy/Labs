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