function sumAll(arr) {
  let max = Math.max(arr[0],arr[1]);
  let min = Math.min(arr[0],arr[1]);
  let number= 0;
  console.log(max)
  console.log(min)
  for(let i = min; i < max; i++){
     number += i; 
      }
    return number;
}

console.log(sumAll([1, 4]));

//example 2

function sumAll1(arr) {
  let sum = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    sum += i;
  }
    return sum;
}

console.log(sumAll1([1, 5]));

//third example

const sumAll2 = arr => {
  const startnum = arr[0];
  console.log("startnum",startnum)
  const endnum = arr[1];
 
  /* Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.*/
  let numcount = Math.abs(startnum - endnum) + 1;
  console.log(numcount)

  // Using Arithmetic Progression summing formula
const sum = ((startnum + endnum) * numcount) / 2;
  return sum;
}
console.log(sumAll2([10,5]));