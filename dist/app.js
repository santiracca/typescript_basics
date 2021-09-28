"use strict";
var add;
add = function (n1, n2) { return n1 + n2; };
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        throw new Error("Method not implemented.");
    };
    return Person;
}());
var user1 = new Person("Santi", 29);
