/**
 * Liking String
 *
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
 * 
 * Implement a function, which must take an input array, containing the names of people who like an item. It must return the display text as shown in the examples:
 * 
 * [] => "no one likes this” ["Peter”] => "Peter likes this”
 * ["Jacob", "Alex"] => must be "Jacob and Alex like this”
 * ["Max", "John", "Mark"] => must be "Max, John and Mark like this”
 * ["Alex", "Jacob", "Mark", "Max"] => must be "Alex, Jacob and 2 others like this”
 *
 */

var assert = require('chai').assert;

var likeString = require('../../lib/likeString');

describe("Like String", function () {

	it("should return 'no one likes this' when given no names", function () {

		assert.equal(likeString([]), "no one likes this");

	});

	it("should return '{name} likes this' when given one name", function () {

		assert.equal(likeString(["Peter"]), "Peter likes this");

	});

	it("should return '{name1} and {name2} like this' when given two names", function () {

		assert.equal(likeString(["Peter", "Jim"]), "Peter and Jim like this");

	});

	it("should return '{name1}, {name2} and {name3} like this' when given three names", function () {

		assert.equal(likeString(["Peter", "Jim", "Mark"]), "Peter, Jim and Mark like this");

	});

	it("should return '{name1}, {name2} and {x} others like this' when given more than 3 names", function () {

		assert.equal(likeString(["Peter", "Jim", "Mark", "David"]), "Peter, Jim and 2 others like this");

		// I didn't trust just one assertion so I triangulated
		assert.equal(likeString(["Peter", "Jim", "Mark", "David", "Tom", "Sally"]), "Peter, Jim and 4 others like this");

	});

});