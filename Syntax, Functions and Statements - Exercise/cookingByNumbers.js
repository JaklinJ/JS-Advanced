function cookingByNumbers(num, op1, op2, op3, op4, op5) {

num = +num;
let arr = [];
arr.push(op1, op2, op3, op4, op5);

for (const el of arr) {
    switch (el) {
        case "chop":
            num /= 2;
            console.log(num);
        break;
        case "dice":
            num = Math.sqrt(num);
            console.log(num);
        break;
        case "spice":
            num += 1;
            console.log(num);
        break;
        case "bake":
            num *= 3;
            console.log(num);
        break;
        case "fillet":
            num -= num*0.2;
            console.log(num);
        break;
    }
}
}
