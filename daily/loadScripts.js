var loadScripts = (function(doc){
	/**
	 * 载入脚本
	 * @param  {Array}   urls     [脚本url数组]
	 * @param  {Function} callback [脚本载入完成后的回调] 可选的
	 */
	return function(urls, callback){

		var result = [];
		var parent = document.getElementsByTagName('head')[0] || document.body;
		var urlsLen = urls.length;

		function load(len,script,url,eventName) {
			if(urlsLen === len) {
				if(eventName) {
					result.push({
						script: script,
						url: url,
						event: eventName
					});
				}

				if(urlsLen) {
					var url = urls.shift();
					len = --urlsLen;
					var script = document.createElement('script');
					script.src = url;
					script.onload = function(){
						load(len, script, url, 'load');
					};
					script.onerror = function(){
						load(len, script, url, 'error');
					};
					parent.appendChild(script);

				} else if(callback) {

					callback(result);

				}
			}
		}
		
		load(urlsLen);

	};
}(document));

// example
loadScripts(['a.js','b.js','c.js'], function(){
    console.log('hello');
});