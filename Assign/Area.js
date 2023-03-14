function Area(radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    var Ans = 0.0;
    Ans = pi * radius * radius;
    return Ans;
}
var Ret = 0.0;
Ret = Area(5);
console.log("Area of circle is : " + Ret);
