class Arithmatic
{
    No1 : number;
    No2 : number;

    constructor(value1 : number , value2 : number)
    {
        this.No1 = value1;
        this.No2 = value2;
    }

    Addition() : number
    {
        return this.No1 + this.No2;
    }
    Substraction() : number
    {
        return this.No1 - this.No2;
    }
    Multification() : number
    {
        return this.No1 * this.No2;
    }
    Division() : number
    {
        return this.No1 / this.No2;
    }
}

var obj1 = new Arithmatic(11,10);
var obj2 = new Arithmatic(20,10);
var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition of obj1 is : "+ Ret);
Ret = obj2.Addition();
console.log("Addition of obj2 is : "+ Ret);

Ret = obj1.Substraction();
console.log("Substraction of obj1 is : "+ Ret);
Ret = obj2.Substraction();
console.log("Substraction of obj2 is : "+ Ret);

Ret = obj1.Multification();
console.log("Multification of obj1 is : "+ Ret);
Ret = obj2.Multification();
console.log("Multification of obj1 is : "+ Ret);

Ret = obj1.Division();
console.log("Division of obj1 is : "+ Ret);
Ret = obj2.Division();
console.log("Division of obj1 is : "+ Ret);
