var foo = 'hello';
var bar = true;
console.log(foo);
console.log(bar);
function multiply(x, y) {
    return x * y;
}
var sum = function (x, y) { return x + y; };
console.log(sum(3, 3));
console.log(multiply(3, 3));
var welcome = function () { return console.log('welcome'); };
console.log(welcome());
var numArr = [1, 2, 3];
console.log(numArr);
var Numbers;
(function (Numbers) {
    Numbers[Numbers["one"] = 0] = "one";
    Numbers[Numbers["two"] = 1] = "two";
    Numbers[Numbers["three"] = 2] = "three";
})(Numbers || (Numbers = {}));
var num = Numbers.three;
console.log(num);
var Assign;
(function (Assign) {
    Assign[Assign["zero"] = 0] = "zero";
    Assign[Assign["one"] = 11] = "one";
    Assign[Assign["two"] = 22] = "two";
})(Assign || (Assign = {}));
console.log(Assign.one);
var notSure = 'str';
notSure = 1;
notSure = true;
notSure = 3;
console.log(typeof notSure, notSure);
var str, n, boo;
console.log(typeof str, n, boo);
str = 'str';
n = 3;
boo = true;
console.log(typeof str, n, boo);
//# sourceMappingURL=types.js.map