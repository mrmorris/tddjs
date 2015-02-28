/**
 * A sample User object
 * for use with fakeDoubles test
 */
var User = function () {}

/**
 * _getData
 * 
 * Fetches data via ajax
 * Expects a single numeric user is argument
 * Returns an array of data when the request succeeds
 * Returns false when request fails
 *
 * @param	{Number}	id
 * @return	{Array|Boolean}
 */
User.prototype._getData = function(id) {
	// no need to implement
	// just respect the API
};

module.exports = User;