
// challenge
/*
Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.
*/

let fixedValue = 4;

function dependencies(fixedValue) {
  let newValue = fixedValue + 1;
  return "new value is " + newValue;
}

//let testDependencies = dependencies(fixedValue);
//console.log(testDependencies);
console.log(dependencies(fixedValue));

//tests
/*
Your function incrementer should not change the value of fixedValue (which is 4).

Passed
Your incrementer function should take an argument.

Passed
Your incrementer function should return a value that is one larger than the fixedValue value.
*/