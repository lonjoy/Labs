while(element.firstChild) {
	element.removeChild(element.firstChild);
}
// faster than innerHTML
// el.innerHTML = '';