function biggestElement(matrix) {

    let biggestNum = 0;

    matrix.forEach(row => {
        row.forEach(num => {
            if (biggestNum < num) {
                biggestNum = num;
            }
        })
    });

    return biggestNum;
}
