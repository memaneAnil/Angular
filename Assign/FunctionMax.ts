function Maximum(Arr : number[]) : number
{
    var Cnt : number = 0;
    var Max : number = Arr[Cnt];
 
    while(Cnt < Arr.length)
    {
        if(Arr[Cnt] > Max)
        {
            Max = Arr[Cnt];
        }
        else
        {
            Cnt++;
            continue;
        }
        Cnt++;
    }
    return Max;
}

var iRet : number = 0;

var Arr : number[] = [11,121,51,909,15,52];

iRet = Maximum(Arr);

console.log("Maximum number is : "+iRet);