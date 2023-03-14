function Summation(Arr) {
    var Cnt = 0;
    var Sum = 0;
    while (Cnt < Arr.length) {
        Sum = Sum + Arr[Cnt];
        Cnt++;
    }
    return Sum;
}
var Ret = 0;
var Arr = [10, 20, 30, 40, 50];
Ret = Summation(Arr);
console.log("Addition is : " + Ret);
