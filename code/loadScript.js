/**
 * 动态载入脚本
 * @param  {String}   url      [指定载入的脚本]
 * @param  {Function} callback [载入脚本之后的回调函数]
 * @return
 */
function loadScript(url, callback){

	var script = document.createElement('script');
	script.type = 'text/javascript';

	// IE
	if(script.readyState){
		script.onreadystatechange = function(){

			if(script.readyState === 'loaded' || script.readyState === 'complete'){

				script.onreadystatechange = null;
				callback();

			} 

		};

	// modern browser
	} else {

		script.onload = function(){

			callback();

		};

	}

	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);

}