function catalogue(arr) {
let result = {};
for (const line of arr) {
    let [product, price] = line.split(" : ");
    price = Number(price);

    result[product] = price;
}

let sortedArr = Object.keys(result).sort((a,b) => a.localeCompare(b));

console.log(sortedArr[0][0]);
console.log(`  ${sortedArr[0]}: ${result[sortedArr[0]]}`)
for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i-1][0] === sortedArr[i][0]) {
        console.log(`  ${sortedArr[i]}: ${result[sortedArr[i]]}`)
    } else {
        console.log(sortedArr[i][0]);
        console.log(`  ${sortedArr[i]}: ${result[sortedArr[i]]}`)
    }
}

}
