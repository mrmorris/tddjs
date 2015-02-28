module.exports = function fizzBuzz(n) {

	// Pre-abstraction
	/*
	if (n===15 || n===30) {
		return "FizzBuzz";
	}

	if (n===5 || n===10 || n===20) {
		return "Buzz";
	}

	if (n===3 || n===6 || n===9) {
		return "Fizz";
	}

	if (n) {
		return n
	}

	return 0;

	*/

	// Abstraction 1
	/*
	if (n%15===0) {
		return "FizzBuzz";
	}

	if (n%5===0) {
		return "Buzz";
	}

	if (n%3===0) {
		return "Fizz";
	}

	return n ? n : 0;
	*/

	// Abstraction 2
	// with Bonus
	if (typeof n !== 'number') {
		throw new Error();
	}

	var str = "";

	if (n%3===0) {
		str += "Fizz";
	}

	if (n%5===0) {
		str += "Buzz";
	}	

	return str ? str : n;

}