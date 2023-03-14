function Area(radius : number , pi : number = 3.14) : number
{
    var Ans : number = 0.0;

    Ans = pi * radius * radius;

    return Ans;
    
}

var Ret : number = 0.0;

Ret = Area(5);

console.log("Area of circle is : "+ Ret);