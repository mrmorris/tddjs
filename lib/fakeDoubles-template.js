var User = require('./samples/user');

var UserWithLoadImplemented = function() {}

UserWithLoadImplemented.prototype = new User();

UserWithLoadImplemented.prototype.load = function() {
	// to be implemented
	// this._getData(id);
}

module.exports = UserWithLoadImplemented;