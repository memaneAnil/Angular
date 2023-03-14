function Summation(Arr : number[]) : number
{
    var Cnt : number = 0;
    var Sum : number = 0;

    while(Cnt < Arr.length)
    {
        Sum = Sum + Arr[Cnt];
        Cnt++;
    }
    return Sum;
}

var Ret : number = 0;

var Arr : number[] = [10,20,30,40,50];

Ret = Summation(Arr);

console.log("Addition is : "+ Ret);