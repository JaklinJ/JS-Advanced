function solution(x) {
    let number = x;

    return function add (num) {
        let sum = num + number;
        return sum;
    }
}
