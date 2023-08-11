function aggregateElements(data) {
  
  let sum = 0;
  let sumInverseValuses = 0;
  let concat = '';
  
  for (let num of data) {
    sum += num;
    concat += num;
    sumInverseValuses += 1/num;
  }
  
  console.log(sum);
  console.log(sumInverseValuses);
  console.log(concat);
  
}
