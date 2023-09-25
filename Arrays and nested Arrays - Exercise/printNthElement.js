function printNthElement(arr, num) {

let result = [];

for (let index = 0; index < arr.length; index+= num) {
    result.push(arr[index]);
    
}
return result;
}
