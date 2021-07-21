// use some method
//thesis
/*
he some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
*/
//challenge
/*
Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
*/

function checkPositive(arr){
  return arr.some(function(currentValue){
    return currentValue > 0;
  });
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// workign with arrow function for some function
function checkPositive1(arrow) {
  // Add your code below this line

  return arrow.every(val => val > 0);
  // Add your code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));

