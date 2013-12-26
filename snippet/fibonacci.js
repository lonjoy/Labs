// arguments.callee
fucntion fibonacci1(n) {
	return fucntion(n, a, b){
		return n > 0 ? arguments.callee(n-1, b, a+b) : a;
	}(n, 0, 1);
}

// iterative
function fibonacci2(n) {
	var a = 0,
		b = 1,
		total;
	while(n-- > 0) {
		total = a;
		a = b;
		b += t;
	}
	return a;
}