//doubledPositiveNumbers

let array = [-12, 6, 2, 0];
let doubledPositiveNumbers = array.reduce(function (accumulator,currentValue){
  if(currentValue > 0){
    let double = currentValue * 2;
    accumulator.push(double)
  }
  return accumulator
}, [])
console.log(doubledPositiveNumbers);