//Slice Array 
let animals = ["tiger", "lion", "elephant", "deer", "rabbit"]
function SliceArray(animal,beginSlice,endSlice){
  let newArray = animal.slice(beginSlice, endSlice);
  return newArray;
}

const result = SliceArray(animals, 1, 3);
console.log(result);

/*
Your code should use the slice method.

Passed
The inputAnim variable should not change.

Passed
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].

Passed
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].

Passed
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].
*/

//_____________________________________________________________

function nonMutatingSplice(cities) {
  
  let newArray = cities.slice(0,3);
  return newArray;

  
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
/* test
Your code should use the slice method.

Passed
Your code should not use the splice method.

Passed
The inputCities array should not change.

Passed
nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) should return ["Chicago", "Delhi", "Islamabad"].
*/
