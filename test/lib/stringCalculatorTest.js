/**
 * String Calculator
 *
 * Create a string calculator with a method “add” that accepts a single string argument. It expects 0, 1 or 2 numbers in the string, and returns the sum of the numbers.
 * 
 * For example: 
 * StringCalculator.add(“”) => 0 
 * StringCalculator.add(“1”) => 1 
 * StringCalculator.add(“1,2”) => 3
 *
 * Start simple! (no argument passed)
 *
 * Upgrades:
 * 1. Allow the add method to handle an unknown amount of numbers
 * 2. Allow the add method to handle colons between numbers, “1:2,3” => 6
 * 3. Allow the method to support a different delimiter, specified as a second argument to the method
 * 4. Calling add with a negative number will throw an exception, “negatives not allowed”, with all negatives listed in the exception message
 * 5. Numbers bigger than 1000 should be ignored, so “2,1001” => 2
 *
 */
var assert = require('chai').assert;

var stringCalc = require('../../lib/stringCalculator');

describe("String Calculator", function() {

	it("should return 0 when given an empty string", function () {

		assert.equal(stringCalc(""), 0);

	});

	it("should return 0 when given no arguments", function () {

		assert.equal(stringCalc(), 0);

	});

	it("should return the value of the number when a string with only one number", function () {

		assert.equal(stringCalc("2"), 2);

		// triangulate!
		assert.equal(stringCalc("5"), 5);

	});

	it("should return the sum of two numbers when given a string with two numbers", function () {

		assert.equal(stringCalc("2,3"), 5);

		// triangulate!
		assert.equal(stringCalc("5,2"), 7);

	});

	// Upgrades
	
	it("should return the sum of any number of numbers in a given string", function () {

		assert.equal(stringCalc("1,2,3,4,5"), 15);

		// triangulate!
		assert.equal(stringCalc("5,2,3,10,12"), 32);

	});

	it("should support colons as a delimiter", function () {

		assert.equal(stringCalc("1:2,3"), 6);
		assert.equal(stringCalc("1,2:3,4:5"), 15);

	});

	it("should support a custom delimiter when provided as the second argument", function () {

		assert.equal(stringCalc("1~2,3", "~"), 6);

	});

	it("should throw an exception when one of the numbers given is negative", function () {

		assert.throw(function() {
			stringCalc("1,-2,3")
		});

	});

	it("should throw an exception listing the negative numbers found when given a string with negative numbers", function () {

		assert.throw(function() {
			stringCalc("1,-2,3,-5")
		}, "Negative numbers not supported: -2, -5");

	});

	it("should not include numbers greater than 1000 when included in the string", function () {

		assert.equal(stringCalc("1,1001,999"), 1000)

	});

});