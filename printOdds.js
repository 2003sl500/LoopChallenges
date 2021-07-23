function printOdds() {
    console.log("Print odd values from 1 to 20");
    for (var i = 1; i < 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds();