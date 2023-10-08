function subSum(arr, firstIndex, secondIndex) {
    
    if (!Array.isArray(arr)) {
        return NaN;
    }
    
    let firstI = firstIndex < 0 ? 0 : firstIndex;
    let secondI = secondIndex > arr.length-1 ? arr.length-1 : secondIndex;

    return arr
    .slice(firstI, secondI+1)
    .map(Number)
    .reduce ((acc, x) => acc + x, 0);

}
