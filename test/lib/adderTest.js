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