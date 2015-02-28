var User = require('./samples/user');

var UserWithLoadImplemented = function() {}

UserWithLoadImplemented.prototype = new User();

UserWithLoadImplemented.prototype.load = function(id, cb) {
	
	console.log("loading user " + id);

	if (this._getData(id)) {

		if (typeof cb === 'function') {
			cb();
		}

		console.log("success");

	} else {

		console.log("request failed");
		
	}

}

module.exports = UserWithLoadImplemented;