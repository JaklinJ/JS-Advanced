function lastKNumbersSequence(n, k) {

let resultArr = [1];

for(let i = 1; i < n; i++) {
let startIndex = Math.max(0, i-k);
let currentEl = resultArr.slice(startIndex,startIndex+k).reduce((a,b) => a + b, 0);
resultArr.push(currentEl);

}
console.log(resultArr)
}
