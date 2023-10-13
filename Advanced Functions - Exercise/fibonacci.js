function fibonacci() {

let firstNum = 0;
let secondNum = 1

function fibonator() {
    let result = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = result;
    return firstNum;
}
    return fibonator;
}
