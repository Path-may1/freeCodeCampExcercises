// Sum Of Values in Array Using -reduce() - source MDN Javascript
//To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

let initialValue = 0;
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function(accumulator, currentValue){
  return accumulator + currentValue.x}, initialValue)
console.log(sum)

//the above example with arrow function

let initial = 4;
let sum1 = [{x: 1}, {x: 2}, {x: 3}].reduce((accumulator, currentValue)  =>
accumulator + currentValue.x, initial)
console.log(sum1); 







