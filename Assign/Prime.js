function ChkPrime(No) {
    var Cnt = 0;
    var cnd = Math.floor(No / 2);
    if (No > 0 && No < 3) {
        return true;
    }
    else {
        for (Cnt = 2; Cnt < (cnd + 1); Cnt++) {
            if (No % Cnt == 0) {
                break;
            }
        }
    }
    return (Cnt == (cnd + 1));
}
var Ret = false;
Ret = ChkPrime(50);
console.log(Ret);
if (Ret == true) {
    console.log("Prime number");
}
else {
    console.log("Not a Prime number");
}
Ret = ChkPrime(19);
console.log(Ret);
if (Ret == true) {
    console.log("Prime number");
}
else {
    console.log("Not a Prime number");
}
