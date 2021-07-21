// every functions
//thesis

/*
The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
*/

//challenge
/*
Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
*/

function checkEvery(arr){
  return arr.every(function(value){
      return value > 0;
  })
}
console.log(checkEvery([1, 2, 3, -4, 5]));

//test
/*
Your code should use the every method.

Passed
checkPositive([1, 2, 3, -4, 5]) should return false.

Passed
checkPositive([1, 2, 3, 4, 5]) should return true.

Passed
checkPositive([1, -2, 3, -4, 5]) should return false.
*/