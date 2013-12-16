~(function(){
	
	if(typeof Date.prototype.format === 'undefined') {
		/**
		 * Simple Date format function
		 * @param  {String} formatPattern 日期格式化格式字符串
		 * @return {String} 日期格式化之后的字符串
		 */
		Date.prototype.format = function(formatPattern) {

			var date = this;
			/**
			 * 补0操作
			 * @param  {Number} value  日期信息
			 * @param  {Number} length  [可选]
			 * @return {String}  补0后的字符串
			 */
			var filter = function(value, length){

				if(!length) {
					length = 2;
				}
				
				value = '' + value;
				for(var i = 0, ret = ''; i < (length - value.length); i++) {

					ret += '0';

				}

				return ret + value;

			};

			var pattern = /"[^"]*"|'[^']*'|\b(?:D{1,4}|M{1,4}|m{1,2}|YY(?:YY)?|([hHMstT])\1?|[lLZ])\b/g;

			return formatPattern.replace(pattern, function($0){

				// format Date
				switch($0) {

					// 2位数年份
					case 'YY':
						return ('' + date.getFullYear()).substr(2);
					// 4位数年份
					case 'YYYY':
						return date.getFullYear();
					// 默认月份
					case 'M':
						return date.getMonth() + 1;
					// 2位数日期
					case 'MM':
						return filter(date.getMonth() + 1);
					// 简写英文月份
					case 'MMM':
						return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
					// 完整英文月份
					case 'MMMM':
						return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
					// 默认日期
					case 'D':
						return date.getDate();
					// 2位数日期
					case 'DD':
						return filter(date.getDate());
					// 简写英文星期
					case 'DDD':
						return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][date.getDay()];
					// 中文星期
					case 'DDDD':
						return ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()];
					// 24时制默认小时
					case 'H':
						return date.getHours();
					// 24时制2位数小时
					case 'HH':
						return filter(date.getHours());
					// 12时制默认小时
					case 'h':
						return date.getHours() % 12 || 12;
					// 12时制2位数小时
					case 'hh':
						return filter(date.getHours() % 12 || 12);
					// 默认分数
					case 'm':
						return date.getMinutes();
					// 2位数分数
					case 'mm':
						return filter(date.getMinutes());
					// 默认秒数
					case 's':
						return date.getSeconds();
					// 2位数秒数
					case 'ss':
						return filter(date.getSeconds());
					// 小写上午下午
					case 't':
						return date.getHours() < 12 ? 'am' : 'pm';
					// 大写上午下午
					case 'tt':
						return date.getHours() < 12 ? 'AM' : 'PM';
					// 中文上午下午
					case 'T':
						return date.getHours() < 12 ? '上午' : '下午';
					default:
						return $0.substr(1, $.length - 2);
				}

			});
			
		}
		
	}
	
})();