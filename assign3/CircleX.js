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
var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(value) {
        return _super.call(this, value) || this;
    }
    CircleX.prototype.Circumfarance = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(5.10);
var obj2 = new CircleX(10.1);
var Ret = 0;
Ret = obj1.Area();
console.log("Area of Circle obj1 is : " + Ret);
Ret = obj1.Circumfarance();
console.log("Circumfarance of Circle obj1 is : " + Ret);
Ret = obj2.Area();
console.log("Area of Circle obj2 is : " + Ret);
Ret = obj2.Circumfarance();
console.log("Circumfarance of Circle obj1 is : " + Ret);
