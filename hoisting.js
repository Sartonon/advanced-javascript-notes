////////////////////////////////////////////////////////

console.log(a);
console.log(b);
var a = b;
var b = 2;
console.log(b);
console.log(a);

////////////////////////////////////////////////////////

var a = b();
var c = d();
a;
c;

function b() {
	return c;
}

var d = function() {
	return b();
};

////////////////////////////////////////////////////////

foo();

var foo = 2;

function foo() {
	console.log("bar");
}

function foo() {
	console.log("foo");
}