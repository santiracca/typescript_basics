"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
var mergedObj = merge({ name: "Max" }, { age: 30 });
function countAndPrint(element) {
    var descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText == "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hi there"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item, 1));
    };
    DataStorage.prototype.getItem = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Santi");
textStorage.removeItem("Santi");
var objStorage = new DataStorage();
objStorage.addItem({ name: "Santi" });
objStorage.removeItem({ name: "Santi" });
