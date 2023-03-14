function DisplayFactors(No : number) : void
{
    var Cnt : number = 0;

    for(Cnt =1; Cnt < (No/2 + 1); Cnt++)
    {
        if(No % Cnt == 0)
        {
            console.log(Cnt)
        }
    }
}

DisplayFactors(20)

