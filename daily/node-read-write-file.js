var fs = require('fs');

// read
fs.readFile('dir/file.ext', function(err, data) {

	// 读取错误
	if(err) {

		throw err;

	} else { // 读取成功

		console.log(data);

	}

});

// write
/**
 * @param content [写入文件的内容]
 */
fs.writeFile('dir/file.ext', content, function(err, data) {

	// 写入出错
	if(err) {
		
		throw err;
	} else { // 写入成功

		console.log('success');

	}

});

// read dir
fs.readdir('dir/', function(err, files) {

	// 读取出错
	if(err) {

		throw err;

	} else { // 读取成功

		return files; // 返回读取到的文件列表

	}

});