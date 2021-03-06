/**
 * FizzBuzz
 *
 * A function, fizzBuzz, that accepts a single numeric argument and returns a string based on the number.
 *
 * 1.  If the number is divisible by 3, output “Fizz”
 * 2.  If the number is divisible by 5, output “Buzz”
 * 3.  If the number is divisible by 3 and 5, output “FizzBuzz”
 * 4.  If the number is not divisible by 3 or 5, output the number
 * 5.  Bonus: What do we do for non-numeric values?
 *
 * Where to start:
 * What is the easiest specification to test for?
 * Try starting with null values; what happens when I pass no arguments or null? You are designing the interface; what is the ideal way to interact with this unit?
 *
 * Rules:
 * Don’t implement anything without a test first
 * Refactor only once tests are passing
 * Try to use really small steps, even if it feels weird
 * Remember these tricks: Fake it, Triangulate, Obvious Implementation...
 */
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

	// Redundant test, I should refactor this out
	it("should return 'Fizz' when given 3", function() {

		assert.equal(fizzBuzz(3), "Fizz");

	});

	// Redundant test, I should refactor this out
	it("should return 'Buzz' when given 5", function() {

		assert.equal(fizzBuzz(5), "Buzz");

	});

	// by triangulating, I can see a pattern emerge in the implementation
	it("should return 'Fizz' when given any number divisible by 3", function() {

		assert.equal(fizzBuzz(3), "Fizz");
		assert.equal(fizzBuzz(6), "Fizz");
		assert.equal(fizzBuzz(9), "Fizz");

	});

	// by triangulating, i can see a pattern emerge in the implementation
	it("should return 'Buzz' when given any number divisible by 5", function() {

		assert.equal(fizzBuzz(5), "Buzz");
		assert.equal(fizzBuzz(10), "Buzz");
		assert.equal(fizzBuzz(20), "Buzz");

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