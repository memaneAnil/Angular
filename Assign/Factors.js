function DisplayFactors(No) {
    var Cnt = 0;
    for (Cnt = 1; Cnt < (No / 2 + 1); Cnt++) {
        if (No % Cnt == 0) {
            console.log(Cnt);
        }
    }
}
DisplayFactors(20);
