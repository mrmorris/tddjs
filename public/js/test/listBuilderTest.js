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

	// I just take a stab
	it("should not add any markup when no data is given", function() {

		// i start with this... basically, this should do nothing
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

	// i consider this a behavior, although it may be redunant
	it("should use a ul by default");

	// when facing this feature/upgrade
	// i wonder, how do I ask it?
	// I start cheap, with just an extra arg
	it("should generate the list type when specified", function() {

		listBuilder("#fixture", sharedData, "ol");

		var ol = $fixture.find("ol");

		assert.equal(ol.length, 1);

	});


	it("should load data via ajax when a url is provided instead of data array", function() {

		// when data arg is a string, assume it is a url

		// load data via ajax
		sinon.stub(jQuery, "ajax");

		// $.ajax returns a promise
		// so I create a pre-resolved promise
		// I could alternatively Fake XHR/Server
		// Which would release me from these
		// implementation details
		var d = $.Deferred();

		d.resolve(sharedData);

		jQuery.ajax.returns(d.promise());

		// execute
		listBuilder("#fixture", "http://source");

		// assert...
		// expect $.ajax? xhr?
		// or just verify that given an ajax return, the list is rendered

		var lis = $fixture.find("li");

		assert.equal(lis.length, 3);

		assert(jQuery.ajax.calledWith("http://source"));
		assert(jQuery.ajax.calledOnce);

		jQuery.ajax.restore();

	});
	
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

		it("should be removed when the [x] link is clicked", function() {

			// integration-ish? Yes, a little.
			// alternatively I could plan to write a handler function separately
			// test the handler function 
			// then test that the handler is listening to the "click" event on the right element

			listBuilder("#fixture", sharedData);

			var removedLi = $fixture.find("li:first");

			removedLi.find("a").triggerHandler("click");

			assert.isFalse($.contains($fixture[0], removedLi[0]));

		});

		it("should log the user's favorite color to the console when clicked", function() {

			sinon.spy(console, "log");

			listBuilder("#fixture", sharedData);

			var lis = $fixture.find("li");

			$(lis[0]).triggerHandler("click");

			$(lis[1]).triggerHandler("click");

			$(lis[2]).triggerHandler("click");

			assert.equal(console.log.getCall(0).args[0], "blue");
			assert.equal(console.log.getCall(1).args[0], "red");
			assert.equal(console.log.getCall(2).args[0], "orange");

		});


	});

});