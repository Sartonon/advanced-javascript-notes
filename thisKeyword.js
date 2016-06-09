function foo() {
	console.log(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o2 = { bar: "bar3", foo: foo };

foo();
o2.foo();
o3.foo();

////////////////////////////////

function foo() {
	var bar = "bar1";
	baz();
}
function baz() {
	console.log(this.bar); // bar2
}

var bar = "bar2";
foo();