function fruit(fruit, weight, price) {
  
  let kg = weight/1000;
  let endPrice = weight/1000 * price;
  console.log(`I need $${endPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
  
}
