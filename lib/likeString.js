module.exports = function likeString(names) {


	// Pre-abstraction
	/*
	if (names.length > 3) {
		return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
	}

	if (names.length > 2) {
		return names[0] + ", " + names[1] + " and " + names[2] + " like this";
	}

	if (names.length > 1) {
		return names[0] + " and " + names[1] + " like this";
	}

	if (names.length) {
		return names[0] + " likes this";
	}

	return "no one likes this";
	*/

	// Potentially (too) abstracted
	var str = "";

	if (names.length > 1) {

		str += names[0] + (names.length == 2 ? " and " : ", ") + names[1];

		if (names.length > 2) {

			str += " and " + (names.length > 3 ? names.length-2 + " others" : names[2]);

		}

	} else {

		str += names.length ? names : "no one";

	}

	// note: not great if you need i18n
	return str + " like" + (names.length > 1 ? "" : "s") + " this"; 

}