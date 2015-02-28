module.exports = function stringCalculator(str, delim) {

	delim += ",:";

	if (str) {

		str = str.split(new RegExp("[" + delim + "]"));

		var sum = 0,
			err = [];

		// Could be refactored further...
		for (var i=0; i<str.length; i++) {

			if (str[i] < 0) {

				err.push(str[i]);

			} else if (str[i] <= 1000) {
				
				// that extra + converts the string to a Number
				sum += +str[i];

			}
			
		}

		if (err.length) {

			throw new Error("Negative numbers not supported: " + err.join(", "));

		}


		return sum;

	}

	return 0;

}