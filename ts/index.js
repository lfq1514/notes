"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Red"] = 4] = "Red";
})(Color || (Color = {}));
// function fn1(name:string,age:number):void
// function fn1(name:number,age:string):void
// function fn1(name:any,age:any):void{
// }
// function fn(name:string,other:number=10,age?:string):void{
// }
// fn('sf',10,'1')
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino(name) {
        var _this = _super.call(this, name) || this;
        _this.testSex = _this.sex;
        return _this;
    }
    Rhino.prototype.test = function () {
        this.sex;
    };
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Rhino("Goat");
console.log('animal', animal);
