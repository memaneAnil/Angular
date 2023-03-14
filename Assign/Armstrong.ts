function ChkArmstrong(No : number) : boolean
{
    var Digit : number = 0;
    var Temp : number = No;
    var Count : number = CountDigit(No);
    var Cnt : number = 0;
    var Mult : number = 1;
    var Sum : number = 0;
    
    while(Temp != 0)
    {
        Digit = Temp % 10;
        while(Cnt < Count)
        {
            Mult = Mult * Digit;
            Cnt++;
        }
        Sum = Sum + Mult;
        console.log(Sum);
        Cnt = 0;
        Mult = 1;
        Temp = Math.floor(Temp / 10);
    }      
    return(No == Sum)
}
function CountDigit(No : number) : number
{ 
    var Digit : number = 0;
    var Count : number = 0;

    while(No != 0)
    {
        Digit = No % 10;
        Count++;
        No = Math.floor(No / 10);
    }
    console.log(" Count : "+Count);
    return Count;
}

var Ret : boolean = false;

Ret = ChkArmstrong(153);

if(Ret)
{
    console.log("ArmStrong number ");
}
else
{
    console.log("Not a ArmStrong number");
}