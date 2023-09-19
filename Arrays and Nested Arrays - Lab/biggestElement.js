function biggestElement(matrix) {

    let biggestNum = -Infinity;

    matrix.forEach(row => {
        row.forEach(num => {
            if (biggestNum < num) {
                biggestNum = num;
            }
        })
    });

    return biggestNum;
}
