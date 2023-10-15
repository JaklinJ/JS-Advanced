function autoCompany(arr) {

let carInventory = {};

arr.forEach(line => {
    let [brand, model, cars] = line.split(" | ");
    cars = Number(cars);
    if(!carInventory.hasOwnProperty(brand)) {
        carInventory[brand] = {};
    } 
    if (carInventory[brand].hasOwnProperty(model)) {
        carInventory[brand][model] += cars;
    } else {
        carInventory[brand][model] = cars;
    }
    
});
   let result = Object.entries(carInventory);
   result.forEach(([carModel, value]) => {
    console.log(`${carModel}`)
    Object.entries(value).forEach(([carModel, quantity]) => {
        console.log(`###${carModel} -> ${quantity}`);
    })
   })
}
