/**
 * Adder
 *
 * A simple function, add(), that can support the following specifications
 * 
 * Returns 0 for no arguments
 * Returns the value of the argument if there is only one 
 * Returns the sum of two arguments
 * Returns the sum of three arguments
 * Returns the sum of four arguments
 * Returns the sum of ANY number of arguments
 *
 * Start at the top and go down, don’t jump ahead
 * Try to take the smallest steps possible; let the test drive the implementation entirely
 */

var assert = require('chai').assert;

var adder = require('../../lib/adder');

describe("adder", function() {

	it("should return 0 for no arguments", function () {

		assert.equal(adder(), 0);

	});

	it("should return the value of a single argument", function () {

		assert.equal(adder(5), 5);

	});

	it("should return the sum of two arguments", function () {

		assert.equal(adder(5, 2), 7);

	});

	it("should return the sum of three arguments", function () {

		assert.equal(adder(5, 2, 1), 8);

	});

	it("should return the sum of four arguments", function () {

		assert.equal(adder(5, 2, 1, 2), 10);

	});

});