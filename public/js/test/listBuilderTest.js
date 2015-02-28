/**
 * List Builder (Front-end TDD)
 *
 * Story:
 * As a business we want to show visitors a list of the top seller users on the site to encourage registrations
 *
 * Requirements:
 *
 * Ability to take an array of user data and generate a <ul> based on that, with one <li> per user. Each user in the list should should include a “[x]” link that removes them from the list when clicked.
 *
 * var data = [
￼*￼￼{
 *		id: 1660,
 *		name: “Ryan”,
 *		favColor: “blue”
 *	}, ... 
 * ];
 *
 * Tips:
 * Use jQuery for our DOM work, in implmementation and tests
 *
 * Upgrades:
 * 
 * Ability to specify whether it should build a ul or ol Lets pull data from a live source via ajax
 * Clicking the user in the list (not the [x]) will log that user’s favorite color to the console
 *
 */ 
 describe("List Builder", function() {

	var sharedData = [
		{
			name: "Ryan",
			color: "blue"
		},
		{
			name: "John",
			color: "red"
		},
		{
			name: "Sally",
			color: "orange"
		}
	];

	var $fixture = $("#fixture");

	before(function() {

	});

	afterEach(function() {

		$fixture.empty();

	});

});