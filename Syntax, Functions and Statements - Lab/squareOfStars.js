function squareOfStars(num) {
  
  if(num === 0 || num === "null") {
    num = 5;
  }
  
  for (let i = 1; i<= num; i++) {
    console.log(`* `.repeat(num));
}
}
