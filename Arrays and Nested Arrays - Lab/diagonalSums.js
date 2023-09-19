 function diagonalSums(matrix) {

let mainDiagonal = 0;
let secondDiagonal = 0;

let firstIndex = 0;
let secondIndex = matrix[0].length-1;

matrix.forEach(array => {
    mainDiagonal += array[firstIndex++];
    secondDiagonal += array[secondIndex--];
    
});

console.log(`${mainDiagonal} ${secondDiagonal}`)

}
