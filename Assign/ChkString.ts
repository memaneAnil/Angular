function Chkstring(Str : string) : boolean
{
    var Strarr : string[] = Str.split(" ");
    var Cnt : number = 0;
    while(Cnt < Strarr.length)
    {
        if(Strarr[Cnt].match("Marvellous"))
        {
            break;
        }
        Cnt++;
    }
    return(Cnt == Strarr.length)
}

var Str : string = "Pune Kothrud Marvellous Infosystem";
var Ret : boolean = false;

Ret = Chkstring(Str);

if(!Ret)
{
    console.log("String contains Marvellous in it");
}
else
{
    console.log("String does not contains Marvellous in it");
}
