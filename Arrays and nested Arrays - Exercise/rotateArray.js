function rotateArray(arr, rotations) {

for (let i = 0; i< rotations; i++)  {
    let last  = arr.pop();
    arr.unshift(last);
}
    return arr.join(" ");
}
