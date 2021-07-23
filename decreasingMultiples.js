function decreasingMult() {
    console.log("Print all values that are evenly divisible by 3 from 100 down to 0");

    for (var i = 100; i >= 0; i--){
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

decreasingMult();