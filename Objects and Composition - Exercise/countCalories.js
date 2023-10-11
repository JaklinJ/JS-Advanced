function countCalories(arr) {
let result = {};

for(let i = 0; i<arr.length; i +=2) {
    let food = arr[i];
    let calories = Number(arr[i+1]);

    result[food] = calories;
}
console.log(result)
}
