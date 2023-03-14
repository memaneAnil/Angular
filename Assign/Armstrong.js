function ChkArmstrong(No) {
    var Digit = 0;
    var Temp = No;
    var Count = CountDigit(No);
    var Cnt = 0;
    var Mult = 1;
    var Sum = 0;
    while (Temp != 0) {
        Digit = Temp % 10;
        while (Cnt < Count) {
            Mult = Mult * Digit;
            Cnt++;
        }
        Sum = Sum + Mult;
        console.log(Sum);
        Cnt = 0;
        Mult = 1;
        Temp = Math.floor(Temp / 10);
    }
    return (No == Sum);
}
function CountDigit(No) {
    var Digit = 0;
    var Count = 0;
    while (No != 0) {
        Digit = No % 10;
        Count++;
        No = Math.floor(No / 10);
    }
    console.log(" Count : " + Count);
    return Count;
}
var Ret = false;
Ret = ChkArmstrong(123);
if (Ret) {
    console.log("ArmStrong number ");
}
else {
    console.log("Not a ArmStrong number");
}
