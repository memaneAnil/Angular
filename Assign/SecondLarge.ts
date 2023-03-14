function SecondMax(Arr : number []) : number
{
    var Cnt : number = 0;
    var Max1 : number = Arr[Cnt];
    var Max2 : number = Arr[Cnt];

    while(Cnt < Arr.length)
    {
        if(Arr[Cnt] > Max1)
        {
            Max2 = Max1;
            Max1 = Arr[Cnt];            
        }
        else if(Arr[Cnt] > Max2 && Max2 != Max1)
        {
            Max2 = Arr[Cnt];
        }
        Cnt++;
    }
    return Max2;
}

var Ret : number = 0;
var Arr : number[] = [30,44,99,88,95,55,89];

Ret = SecondMax(Arr);
console.log("Second Largest number is : " + Ret);
