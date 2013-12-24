// 全选/反选 checkbox
function checkedAll() {
	var chboxs = document.querySelectorAll('[type=checkbox]');
	for(var i in chboxs) {
		chboxs[i].checked = true;
	}
}

function uncheckAll() {
	var chboxs = document.querySelectorAll('[type=checkbox]');
	for(var i in chboxs) {
		chboxs[i].checked = false;
	}
}