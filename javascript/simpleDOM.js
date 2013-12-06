(function(win, doc, undefined){

	var $ = function(selector) {

		var matches = {
			'#': 'getElementById',
			'.': 'getElementsByClassName',
			'@': 'getElementsByName',
			'*': 'getElementsByTagName',
			'=': 'querySelectorAll'			
		}[selector[0]];

		var eles = document[matches](selector.slice(1));

		return eles.length < 2 ? eles[0] : eles;

	};

	win.$ = $;

	win.Element.prototype.find = win.Element.prototype.querySelectorAll;

	win.NodeList.prototype.find = function find(ele) {

		console.error('NodeList中不能进行查找操作，请使用$("=%s")的方式', ele);
		return this;

	};

	win.NodeList.prototype.each = Array.prototype.forEach;

	win.Element.prototype.attr = function(attrName, attrValue) {

		if(attrValue) {

			this.setAttribute(attrName, attrValue);
			return this;

		} else {

			return this.getAttribute(attrName);
		}

	};

	win.NodeList.prototype.attr = function(attrName, attrValue) {

		this.each(function(ele){

			ele.attr(attrName, attrValue);

		});

		return this;

	};

	win.Element.prototype.css = function(prop, value) {

		if(value) {

			this.style[prop] = value;
			return this;

		} else {

			return this.style[prop];

		}

	};

	win.NodeList.prototype.css = function(prop, value) {

		this.each(function(ele){

			ele.css(prop, value);

		});

		return this;

	};

	win.Element.prototype.on = function(eventType, callback) {

		eventType = eventType.split(' '); // multi event

		for(var i=0, eventLength = eventType.length;i<eventLength;i++){

			this.addEventListener(eventType[i], callback, false);

		}

		return this;

	};

	win.NodeList.prototype.on = function(eventType, callback) {

		this.each(function(ele){

			ele.on(eventType, callback);

		});

		return this;

	};

	win.Element.prototype.addClass = function(className) {

		this.classList.add(className);
		return this;

	};

	win.NodeList.prototype.addClass = function(className) {

		this.each(function(ele) {

			ele.classList.add(className);

		});

		return this;

	};

	win.Element.prototype.removeClass = function(className) {

		this.classList.remove(className);
		return this;

	};

	win.NodeList.prototype.removeClass = function(className) {

		this.each(function(ele){

			ele.classList.remove(className);

		});

		return this;

	};

	win.Element.prototype.hasClass = function(className) {

		return this.classList.contains(className);
	
	};

	win.NodeList.prototype.first = function() {

		return (this.length < 2) ? this : this[0];
	
	};

	win.NodeList.prototype.last = function() {

		return (this.length > 1) ? this[this.length - 1] : this;
	
	};

})(window, document);