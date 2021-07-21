//doubledPositiveNumbers-Using-reducePartTwo.js
const squareList = arr => {
  return arr.reduce(function (accumulator, currentValue){
     if(Number.isInteger(currentValue) && currentValue > 1){
       let double = currentValue * currentValue;
       accumulator.push(double)
     }
     return accumulator
   }, [])
 
 }
 
 const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
 console.log(squaredIntegers);