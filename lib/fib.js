module.exports = function fib(n) {
	
	// Pre-abstraction..
	/*
	if (n===5) {
		return 5; 
		// Abstraction opportunity
		// 5 breaks down to 3 + 2...
		// which breaks down to fib(4) and fib(3)
		// which breaks down to fib(n-1) and fib(n-2)
	}

	if (n===4) {
		return 3;
	}

	if (n===3) {
		return 2;
	}

	if (n) {
		return 1;
	}

	return 0;
	*/

	if (n>2) {
		return fib(n-1) + fib(n-2);
	}

	return n ? 1 : 0;


}