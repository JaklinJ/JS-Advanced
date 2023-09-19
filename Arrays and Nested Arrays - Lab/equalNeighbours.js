function equalNeighbours(matrix) {

    let pairs = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let collumn = 0; collumn < matrix[row].length; collumn++) {
            if (row < matrix.length - 1) {
                if (matrix[row][collumn] === matrix[row + 1][collumn]) {
                    pairs++;
                }
            }
            if (collumn < matrix[row].length - 1) {
                if (matrix[row][collumn] === matrix[row][collumn + 1]) {
                    pairs++;
                }
            }
        }
    }
    return pairs;
}
