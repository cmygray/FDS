/*
// ES6
class Person {
  constructor(name) {
    // 멤버 변수
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Foo = /** @class */ (function () {
    function Foo(name) {
        this.name = name;
    }
    Foo.prototype.walk = function () {
        console.log(this.name + " is walking.");
    };
    return Foo;
}());
var person = new Foo('Lee');
console.log(person.walk()); // Lee is walking
var Parent = /** @class */ (function () {
    function Parent(nationality, familyName, isDivorced) {
        this.nationality = nationality;
        this.familyName = familyName;
        this.isDivorced = isDivorced;
    }
    return Parent;
}());
var parents = new Parent('Korean', 'Kim', true);
console.log(parents.nationality);
// console.log(parent.familyName);
// console.log(parent.isDivorced);
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(isDivorced) {
        var _this = _super.call(this, nationality, _this.familyName, isDivorced) || this;
        _this.nationality = _super.prototype.nationality;
        return _this;
        // this.familyName = super.familyName;
    }
    return Child;
}(Parent));
var child = new Child();
console.log(child.nationality);
//# sourceMappingURL=class.js.map