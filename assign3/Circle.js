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
var obj1 = new Circle(2.10);
var obj2 = new Circle(3.5);
var Ret = 0;
Ret = obj1.Area();
console.log("Area of obj1 is : " + Ret);
Ret = obj2.Area();
console.log("Area of obj2 is : " + Ret);
