function Fibonacci(No : number) : void
{
    var temp1 : number = 0;
    var temp2 : number = 1;

    while(temp2 < No)
    {
        temp2 = temp1 + temp2;
        console.log(temp2);
        temp1 = temp2-temp1;     
    }
}

Fibonacci(89)