// Flattening an array of arrays with reduce method
// ------ source from MDN javascript reduce method

let flattened = [[0, 1], [2, 3],[4, 5]].reduce(function(accumulator, currentValue){
  return accumulator.concat(currentValue)},[])
  console.log(flattened)

  // same example with arrow function
/*let flattened1 = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
) */

let flattened1 = [[0, 1], [3, 4], [6, 7]].reduce(
  (accumulator, currentValue ) => accumulator.concat(currentValue),[]
)
  
  console.log("flattened1", flattened1)

