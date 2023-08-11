function sameNumbers(num) {
  let numStr = num +``;
  let sum = 0;
  let isValid = false;
  for (let i = 0; i< numStr.length; i++) {
    let curNum = Number(numStr[i]);
    sum += curNum;
    
  }
  
  if (numStr[0].repeat(numStr.length) === numStr) {
    isValid = true;
  }
   if (isValid) {
     console.log(isValid);
   } else {
       console.log(isValid);
 }
   
  console.log(sum);
}
