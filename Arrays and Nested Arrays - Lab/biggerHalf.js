function biggerHalf(arr) {

let sortedArr = arr.sort((a,b) => a - b);
let half = Math.ceil(sortedArr.length/2);
let endHalf = sortedArr.slice(-half);
return endHalf;

}
