//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

//results

/* arr should be [3,4,5,6,7,8,9,10]

Passed
source should be [1,2,3,4,5,6,7,8,9,10]

Passed
Array.slice() should not be used.

Passed
Destructuring on list should be used.*/

//thesis
/*
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
The console would display the values 1, 2 and [3, 4, 5, 7].

*/