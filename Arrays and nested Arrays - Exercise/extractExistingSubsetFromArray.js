function extractExistingSubsetFromArray(arr) {

let min = arr[0];
let result = arr.filter(num => {
    if ( num >= min) {
        min = num;
    }
    return num >= min;
})


return result;
}
