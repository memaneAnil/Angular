function Fibonacci(No) {
    var temp1 = 0;
    var temp2 = 1;
    while (temp2 < No) {
        temp2 = temp1 + temp2;
        console.log(temp2);
        temp1 = temp2 - temp1;
    }
}
Fibonacci(89);
