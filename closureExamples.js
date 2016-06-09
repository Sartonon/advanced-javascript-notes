function foo() {
	var bar = "bar";

	function baz() {
		console.log(bar);
	}

	bam(baz);
}

function bam(baz) {
	baz();
}

foo();

///////////////////////////////////

function foo() {
	var bar = "bar";

	setTimeut(function() {
		bar = "bar2";
	}, 1000);

	setTimeut(function() {
		console.log(bar);
	}, 2000);
}

foo();

//////////////////////////////////

for (var i=1; i<= 5; i++) {
	setTimeout(function() {
		console.log("i: " + i);
	}, i*1000)
}

// IIFE

for (var i=1; i<= 5; i++) {
	(function(i){
		setTimeout(function() {
		console.log("i: " + i);
	}, i*1000)
	}(i))
	
}