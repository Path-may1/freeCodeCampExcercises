//Factorialize a Number

//challenge

/*
Return the factorial of the provided integer.
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

//code example 1

function factorialize(num) {
  
  for (var product = 1; num > 0; num--) {
    product *= num  
  }
  return product;
}
console.log(factorialize(5));

// code exmaple 2 - Recursive function

function rfactorialize(num) {
  if(num === 1){
    return num
  } else {
     return num * rfactorialize(num -1)
  }
}
console.log(rfactorialize(5));