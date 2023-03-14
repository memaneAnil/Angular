function Maximum(Arr) {
    var Cnt = 0;
    var Max = Arr[Cnt];
    while (Cnt < Arr.length) {
        if (Arr[Cnt] > Max) {
            Max = Arr[Cnt];
        }
        else {
            Cnt++;
            continue;
        }
        Cnt++;
    }
    return Max;
}
var iRet = 0;
var Arr = [11, 121, 51, 909, 15, 52];
iRet = Maximum(Arr);
console.log("Maximum number is : " + iRet);
