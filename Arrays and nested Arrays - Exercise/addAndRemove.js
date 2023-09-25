function addAndRemove(arr) {

let result = [];
let count = 1;

for (let i = 0; i< arr.length; i++) {
    if (arr[i] === "add") {
        result.push(count);
        count++
    } else {
        result.pop();
        count++;
    }
}
if (result.length <= 0) {
    console.log("Empty");
} else {
    console.log(result.join("\n"));
}
}
