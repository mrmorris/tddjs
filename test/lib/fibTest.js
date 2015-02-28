/**
 * Fibonacci Sequence
 *
 * A function that, given a number n, will output the number at
 * that position of the Fibonacci sequence
 *
 */ 

var assert = require('chai').assert;

var fib = require('../../lib/fib');

describe("fib", function() {

	it("should return 0 for no argument", function() {

		assert(fib() === 0);

	});

	it("should return 0 for 0 value", function() {

		assert(fib(0) === 0);

	});

	it("should return 1 for first value", function() {

		assert(fib(1) === 1);

	});

	it("should return 1 for second value", function() {

		assert(fib(2) === 1);

	});

	it("should return 2 for third value", function() {

		assert(fib(3) === 2);

	});

	it("should return 3 for fourth value", function() {

		assert(fib(4) === 3);

	});

	it("should return 5 for fifth value", function() {

		assert(fib(5) === 5);

	});

});