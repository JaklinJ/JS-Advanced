function sort(arr, arg) {

    let result = [];

function ascending(array) {
    result = array.sort((a, b) => a - b);
    return result;
}
function descending(array) {
    result = array.sort((a, b) => b - a);
    return result;
}
   if (arg === 'asc') {
    return ascending(arr);
   } else if (arg === 'desc'){
    return descending(arr);
   }
}
