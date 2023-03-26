class Circle
{
    Radius : number;
    PI : number;

    constructor(Data : number)
    {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Area():number
    {
        let Ans : number = 0;

        Ans = this.PI *this.Radius*this.Radius;
        return Ans;
    }
}

var obj1 = new Circle(2.10);
var obj2 = new Circle(3.5);
var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of Circle obj1 is : "+Ret);
Ret = obj2.Area();
console.log("Area of Circle obj2 is : "+Ret);

