// Duplicated ./test/lib/adderTest + ./lib/adder to show how it can be tested client-side

function adder(a, b, c, d) {

	var sum = 0;

	for (var i=0; i<arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;

}