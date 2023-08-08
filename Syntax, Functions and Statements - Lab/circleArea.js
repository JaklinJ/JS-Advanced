function circleArea(data) {
let type = typeof(data);
if (type === 'number') {
    let area = data ** 2 * Math.PI;
    console.log(area.toFixed(2));
} else {
    console.log(`We can not calculate the circle area, because we receive a ${type}.`);
}

}
circleArea(5.455);
circleArea('name');