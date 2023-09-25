function sortingNumbers(arr) {

let sorted = arr.sort((a, b) => a - b);

for (let i = 0; i<sorted.length; i+=2) {
    let last = sorted.pop();
    sorted.splice(i+1,0 , last);
}

return sorted;
}
