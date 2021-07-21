//Counting The Instances Of Values in Object With reduce()
// source ------- MDN javascript



let names = ["Alice", "Mary", "John", "Tiff", "Alice"];
let countedNames = names.reduce(function (accumulator, currentValue) {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, [])
console.log(countedNames);