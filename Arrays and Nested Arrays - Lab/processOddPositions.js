function processOddPositions(arr) {

let result = arr.filter((num, i) => i % 2 !== 0)
.map(x => x * 2)
.reverse()
.join(" ");
return result;
}
