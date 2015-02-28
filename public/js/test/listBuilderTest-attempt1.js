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

	// My first test! I just take a stab
	it("should not add any markup when no data is given", function() {

		// I started with this... basically, it should do nothing
		listBuilder("#fixture");

		assert.equal($fixture.html(), "");

	});

	it("should add an empty <ul> when given an empty array of data", function() {

		listBuilder("#fixture", []);

		assert.equal($fixture.find("ul").length, 1);

	});

	it("should generate an <li> for each user when the user data is not empty", function() {

		listBuilder("#fixture", sharedData);

		var lis = $fixture.find("li");

		assert.equal(lis.length, 3);

	});

	// I consider this a behavior, although it may be redundant
	// I might refactor my empty-array test above to include this specification
	it("should use a ul by default");

	// when tackling this feature/upgrade I pondered:
	// how do I ask the function to do this?
	// I start cheap, with just an extra arg
	it("should generate an ol when specified", function() {

		listBuilder("#fixture", sharedData, "ol");

		var ol = $fixture.find("ol");

		assert.equal(ol.length, 1);

	});

	it("should load data via ajax when a url is provided instead of data array", function() {

		// load data via ajax
		sinon.stub(jQuery, "ajax");

		// $.ajax returns a promise
		// so I create a pre-resolved promise
		//
		// Alternatively, I could fake XHR/Server
		// That may be nicer because it would free me up
		// from testing implementation details here
		var d = $.Deferred();
		d.resolve(sharedData);
		jQuery.ajax.returns(d.promise());

		// execute
		listBuilder("#fixture", "http://source");

		// expect/assert

		var lis = $fixture.find("li");

		assert.equal(lis.length, 3);

		assert(jQuery.ajax.calledWith("http://source"));
		assert(jQuery.ajax.calledOnce);

		jQuery.ajax.restore();

	});
	
	// I found it helpful to begin organizing my tests
	// each "item" in the list had its own behavior I wanted to test for
	describe("items", function() {

		it("should include the user's name", function() {

			listBuilder("#fixture", sharedData);

			var lis = $fixture.find("li");

			assert.match($(lis[0]).html(), /^Ryan/);
			assert.match($(lis[1]).html(), /^John/);
			assert.match($(lis[2]).html(), /^Sally/);

		});

		it("should include an [x] link", function() {

			listBuilder("#fixture", sharedData);

			var anchors = $fixture.find("li a");

			assert.equal(anchors.length, 3);
			assert.equal(anchors[0].textContent, "[x]");
			assert.equal(anchors[1].textContent, "[x]");
			assert.equal(anchors[2].textContent, "[x]");

		});

		// The next two tests attempt to verify behavior based on events (clicks)
		// At this point I had a decision to make, do I test the result after 
		// an event occurs? Or do I test the wiring-up of that event handler
		//
		// It was a good moment to consider implementation plans
		// In the end I didn't want to stall with the "perfect test" too much
		// So I went with the easiest approach here: test the result given an event
		//
		// This is a more BDD-focused test:
		// It reads nicely and was easy to test
		// I am confident that my code is doing what it should be doing
		// I am treating my listBuilder() function as a unit, ignoring implementation details of the handlers being set up
		//
		// For a larger module, or more complex handler functions, I may decide
		// to expose the hanlder to test it directly 
		//
		// End wall of text...

		it("should be removed when the [x] link is clicked", function() {

			listBuilder("#fixture", sharedData);

			var removedLi = $fixture.find("li:first");

			removedLi.find("a").trigger("click");

			assert.isFalse($.contains($fixture[0], removedLi[0]));

		});

		it("should log the user's favorite color to the console when clicked", function() {

			sinon.spy(console, "log");

			listBuilder("#fixture", sharedData);

			var lis = $fixture.find("li");

			$(lis[0]).trigger("click");
			$(lis[1]).trigger("click");
			$(lis[2]).trigger("click");

			assert.equal(console.log.getCall(0).args[0], "blue");
			assert.equal(console.log.getCall(1).args[0], "red");
			assert.equal(console.log.getCall(2).args[0], "orange");

		});

	});

});