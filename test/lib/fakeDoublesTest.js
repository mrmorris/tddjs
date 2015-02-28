/**
 * Fake Doubles (Fake TDD)
 *
 * Assume you already have an object, User, which has a _getData method available (on itself, or through the prototype chain, it doesn't matter).
 * (Hint: see /samples/user.js) 
 *
 * Add a new method, "load", which expects a numeric user id. Load is responsible for:
 * 
 * 1. Logs “loading user <id>” to the console using console.log
 * 2. Attempts to load data via the custom-built ajax method, “_getData”, available on itself.
 * 3. When the ajax request fails, _getData returns false, and the load() function should log “request failed” to the console
 * 4. When the ajax request succeeds, _getData returns an array, and the load() function should log “success” to the console.
 *
 * (*_getData is synchronous for the lab, but don't worry about that yet)
 *
 * Tips:
 * You will be spying on console.log
 * You will be stubbing _getData
 *
 * Bonus:
 * Have load accept a callback function as the second argument. 
 * Load should invoke this callback after _getData completes.
 * How might you test to verify that your callback is indeed being invoked? 
 * How might you test to verify it is definitely being called after _getData?
 *
 */ 

var assert = require('chai').assert;

var sinon = require('sinon');

var User = require('../../lib/fakeDoubles');

describe("User", function() {

	describe("load", function() {

		var user;

		beforeEach(function() {

			user = new User();

		});

		it("should log user id to the console as loading", function() {

			sinon.spy(console, "log");

			user.load(5);

			assert(console.log.calledWith("loading user 5"));

			console.log.restore();			

		});

		// triangulation test was more clear than a combined test
		// however, now this test and the one above are ripe for refactoring...
		it("should log user id to the console as loading", function() {

			sinon.spy(console, "log");

			user.load(10);

			assert(console.log.calledWith("loading user 10"));

			console.log.restore();

		});

		it("should load data via _getData with given user id", function() {

			sinon.spy(user, "_getData");

			user.load(7);

			assert(user._getData.calledWith(7));

			user._getData.restore();

		});

		it("should log failure when ajax request fails", function() {

			sinon.stub(user, "_getData");

			// Note: I am stubbing the console here to show a gotcha
			sinon.stub(console, "log");

			// simulate a failed request
			user._getData.returns(false);

			user.load(7);

			// Why are we storing the "result" here?
			//
			// When we stubbed console.log it prevented any normal
			// assertion error output; an assertion failure here
			// would just hit our stubbed out console.log method
			//
			// we could use a spy, but then our console.logs
			// will still output. a minor side-effect.
			var result = console.log.calledWith("request failed");

			user._getData.restore();
			console.log.restore();

			// assert after console.log is restored so that assertion errors 
			// will output correctly
			assert(result);

		});

		it("should log success when ajax request succeeds", function() {

			sinon.stub(user, "_getData");
			sinon.spy(console, "log");

			// simulate a successful request
			user._getData.returns([1,2,3]);

			user.load(7);
			
			assert(console.log.calledWith("success"));

			user._getData.restore();

		});

		// bonus

		it("should invoke a given callback function after _getData returns a valid response", function() {

			var cb = sinon.spy();

			sinon.stub(user, "_getData");
			
			// simulate a successful request
			user._getData.returns([1,2,3]);

			user.load(7, cb);
			
			assert(cb.calledOnce);

			// How might we verify our cb is invoked AFTER _getData?
			//
			// we could use spy.calledAfter() (which I do here)
			//
			// However, it can be argured that there is more value in 
			// testing that the callback is NOT invoked when _getData fails 
			// instead of testing call order, which is a usually tedious implementation detail
			assert(cb.calledAfter(user._getData));

			user._getData.restore();

		});

	});

});