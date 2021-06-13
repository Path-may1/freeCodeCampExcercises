//CheckForThePresenceOfAnElementWith-indexOf()

//challenge
/*
indexOf() can be incredibly useful for quickly checking for the presence of an 
element on an array. We have defined a function, quickCheck, that takes an array 
and an element as arguments. Modify the function using indexOf()
 so that it returns true if the passed element exists on the array,
  and false if it does not.
*/

function quickCheck(arr, elem) {
  // Only change code below this line
if(arr.indexOf(elem) >= 0){
 return  true;
} else {
  return false;
}
}
  // Only change code above this line


console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//tests
/*
The quickCheck function should return a boolean (true or false), not a string ("true" or "false")

Passed
quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false

Passed
quickCheck(["onions", "squash", "shallots"], "onions") should return true

Passed
quickCheck([3, 5, 9, 125, 45, 2], 125) should return true

Passed
quickCheck([true, false, false], undefined) should return false

Passed
The quickCheck function should utilize the indexOf() method
*/