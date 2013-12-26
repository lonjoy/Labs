var Module = (function(){
	
	// constructor
	var Module = function(options) {
		// initialization config define
		this.options = {
			// default option
			name: 'myModuleName'
		};
		
		// merge default options
		for(var key in options) {
			this.options[key] = options[key];
		}
	};
	
	// implement for Module
	Module.staticProperty = 'xxx'
	
	// instace property/method
	Module.prototype.prop = 'xxx';
	Module.prototype.method = function(){
		// more code
	};
	
	// return Module
	return Module;
	
}());