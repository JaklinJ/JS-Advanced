function argumentInfo (...arg) {

let obj = {};

for (const element of arg) {
    let type = typeof element;
    console.log(`${type}: ${element}`);

    if (!obj.hasOwnProperty(type)) {
        obj[type] = 0;
    }
    obj[type] += 1;
}
    let sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1])

    for (const [key, value] of sortedArr) {
        console.log(`${key} = ${value}`)
    }
}
