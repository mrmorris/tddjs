var assert = require('chai').assert;

var fizzBuzz = require('../../lib/fizzBuzz');

describe("Fizz Buzz", function() {

	// This test becomes invalid when I add the Bonus
	/*
	it("should return 0 when given no arguments", function() {

		assert.equal(fizzBuzz(), 0);

	});
	*/

	it("should return the number when it is not divisible by 3 or 5", function() {

		assert.equal(fizzBuzz(2), 2);

	});

	// This test is now redundant and can be removed
	it("should return 'Fizz' when given 3", function() {

		assert.equal(fizzBuzz(3), "Fizz");

	});

	// This test is now redundant and can be removed
	it("should return 'Buzz' when given 5", function() {

		assert.equal(fizzBuzz(5), "Buzz");

	});

	it("should return 'Fizz' when given any number divisible by 3", function() {

		assert.equal(fizzBuzz(3), "Fizz");
		assert.equal(fizzBuzz(6), "Fizz");
		assert.equal(fizzBuzz(9), "Fizz");
		// by triangulating, i can see a pattern emerge in the implementation

	});

	it("should return 'Buzz' when given any number divisible by 5", function() {

		assert.equal(fizzBuzz(5), "Buzz");
		assert.equal(fizzBuzz(10), "Buzz");
		assert.equal(fizzBuzz(20), "Buzz");
		// by triangulating, i can see a pattern emerge in the implementation

	});

	it("should return 'FizzBuzz' when given a number divisible by both 3 and 5", function () {

		assert.equal(fizzBuzz(15), "FizzBuzz");
		assert.equal(fizzBuzz(30), "FizzBuzz");

	});

	// Bonus
	it("should throw an exception for non-numeric values", function () {

		assert.throw(function () {
			fizzBuzz("non number")
		});
		assert.throw(function() {
			fizzBuzz(new Date())
		});

	});

});