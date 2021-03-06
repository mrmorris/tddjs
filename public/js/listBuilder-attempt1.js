/**
 * I decided to start with a standalone function
 *
 * I treated this function as a single unit
 * As I built it out, I broke commonly used functionality into
 * functions.
 *
 * There are many ways to solve this problem! This is just one.
 *
 */
var listBuilder = function(selector, data, listType) {

	function deleteHandler(e) {

		$(this).parent("li").remove();
			
	}

	function colorHandler(e) {

		console.log($(this).data("color"));

	}

	function render(data) {

		// only allow two list types
		listType = (listType === "ol" ? "ol" : "ul");

		var el = $(selector),
			listEl = $("<" + listType + ">"),
			li;

		for (var i=0; i<data.length; i++) {

			li = $("<li>").html(data[i].name);

			var anchor = $("<a>").html("[x]");

			anchor.on("click", deleteHandler);

			li.append(anchor);

			li.on("click", colorHandler);

			li.data("color", data[i].color);

			listEl.append(li);

		}

		el.append(listEl);

	}

	if (typeof data === "string") {

		// assume its a url, load via ajx
		$.ajax(data).done(render);

	} else if (data) {

		render(data);

	}

}