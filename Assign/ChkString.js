function Chkstring(Str) {
    var Strarr = Str.split(" ");
    var Cnt = 0;
    while (Cnt < Strarr.length) {
        if (Strarr[Cnt].match("Marvellous")) {
            break;
        }
        Cnt++;
    }
    return (Cnt == Strarr.length);
}
var Str = "Pune Kothrud Marvellous Infosystem";
var Ret = false;
Ret = Chkstring(Str);
if (!Ret) {
    console.log("String contains Marvellous in it");
}
else {
    console.log("String does not contains Marvellous in it");
}
