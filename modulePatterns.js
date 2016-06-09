// classic module pattern

var foo = (function(){
	var o = { bar: "bar" };

	return {
		bar: function() {
			console.log(o.bar);
		}
	};
})();

foo.bar();

// modified module pattern

var foo = (function() {
	var publicAPI = {
		bar: functio() {
			publicAPI.baz();
		},
		baz: function() {
			console.log("baz");
		}
	};
	return publicAPI;
})();

foo.bar();

// modern module pattern

define("foo", function() {
	var o = { bar: "bar"};

	return {
		bar: function(){
			console.log(o.bar);
		}
	};
});

// Future module ES6+

var o = { bar: "bar" };

export function bar() {
	return o.bar;
}

import bar from "foo";
bar();