module.exports = function adder(a, b, c, d) {

	// Pre-abstraction
	/*
	if (a && b && c && d) {
		return a + b + c + d;
	}

	if (a && b && c) {
		return a + b + c;
	}

	if (a && b) {
		return a + b;
	}

	if (a) {
		return a;
	}

	return 0;
	*/

	// Abstraction 1
	/*
	var sum = 0;

	if (d) {
		sum += d;
	}

	if (c) {
		sum += c;
	}

	if (b) {
		sum += b;
	}

	if (a) {
		sum += a;
	}

	return sum;
	*/

	// Abstraction 2
	/*
	var sum = 0;

	if (arguments[3]) {
		sum += arguments[3];
	}

	if (arguments[2]) {
		sum += arguments[2];
	}

	if (arguments[1]) {
		sum += arguments[1];
	}

	if (arguments[0]) {
		sum += arguments[0];
	}

	return sum;
	*/

	// Abstraction 3
	var sum = 0;

	for (var i=0; i<arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;

}