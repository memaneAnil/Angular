var Arithmatic = /** @class */ (function () {
    function Arithmatic(value1, value2) {
        this.No1 = value1;
        this.No2 = value2;
    }
    Arithmatic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithmatic.prototype.Substraction = function () {
        return this.No1 - this.No2;
    };
    Arithmatic.prototype.Multification = function () {
        return this.No1 * this.No2;
    };
    Arithmatic.prototype.Division = function () {
        return this.No1 / this.No2;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(11, 10);
var obj2 = new Arithmatic(20, 10);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition of obj1 is : " + Ret);
Ret = obj2.Addition();
console.log("Addition of obj2 is : " + Ret);
Ret = obj1.Substraction();
console.log("Substraction of obj1 is : " + Ret);
Ret = obj2.Substraction();
console.log("Substraction of obj2 is : " + Ret);
Ret = obj1.Multification();
console.log("Multification of obj1 is : " + Ret);
Ret = obj2.Multification();
console.log("Multification of obj1 is : " + Ret);
Ret = obj1.Division();
console.log("Division of obj1 is : " + Ret);
Ret = obj2.Division();
console.log("Division of obj1 is : " + Ret);
