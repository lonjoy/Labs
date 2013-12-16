var addRule = (function(style){
	var sheet = document.head.appendChild(style).sheet;
	return function(selector, css){
		var cssText = Object.keys(css).map(function(prop){
			return prop + ':' + css[prop]; 
		}).join(';');
		sheet.insertRule(selector + '{' + cssText + '}', sheet.cssRules.length);
	};
}(document.createElement('style')));