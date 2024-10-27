function oddNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let currentNumber = 1;
        let row = "";
        for (let j = 0; j < i; j++) {
            row += currentNumber + " ";
            currentNumber += 2;
        }
        console.log(row.trim());
    }
}

rows = parseInt(prompt("Enter number of rows: "));
oddNumberPyramid(rows);