function juice(arr) {

let bottles = {};

let juices = {};

arr.forEach(line => {
    let [fruit, quantity] = line.split(" => ");
    quantity = Number(quantity);

    if (!juices.hasOwnProperty(fruit)) {
        juices[fruit] = 0;
    }
        juices[fruit] += quantity;

        if((juices[fruit] / 1000) >= 1) {
          let bottle = juices[fruit] / 1000;
          bottle = bottle.toString().split(".")[0];
          bottle = Number(bottle);
          if(!bottles.hasOwnProperty(fruit)) {
            bottles[fruit] = 0;
          }
          bottles[fruit] += bottle;
         
          let leftInBottle = juices[fruit] % 1000;
          juices[fruit] = leftInBottle;
        }
});
    for (const [key,value] of Object.entries(bottles)) {
        console.log(`${key} => ${value}`)
    }
}
