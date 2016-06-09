function getData(d, cb) {
	setTimeout(function(){ cb(d);}, 1000)
}

getData(10, function(num1) {
	var x = 1 + num1;
	getData(30, function(num2) {
		var y = 1 + num2;
		getData(
			"Meaning of life: " + (x + y),
			function(answer) {
				console.log(answer);
			}
		);
	});
});

//// GENERATORS

function* gen() {
	console.log("Hello");
	yield null;
	console.log("World");
}

var it = gen();
it.next();
setTimeout(function() {
  it.next();
}, 1000);


//////////////////

var run = function* coroutine() {
	var x = 1 + (yield null);
	var y = 1 + (yield null);
	yield (x + y);
});

run();
run(10);
console.log(
	"Meaning of life: " + run(30).value;
);