// How do I build you?

// Constructor
var ListBuilder = function() {

	// public
	return {

		deleteHandler: function() {},
		colorHandler: function() {},
		render: function(data) {},
		init: function() {}

	}

}

// Prototype
var listBuilder = {};

// jQuery plugin
$.fn.listBuilder = function() {}

// standlone function
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