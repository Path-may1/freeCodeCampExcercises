//Combine Two Arrays Using the concat Method
let first = [1, 2, 3];
let second = [4, 5, 6]
function concatArray(original, attach){
  let newArray = original.concat(attach);
  return newArray;
}
console.log(concatArray(first, second));