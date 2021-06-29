//creating a constructor


function Dog() {
  this.name = 'toby';
  this.color = 'brown';
  this.numLegs = 4
}

// creating a new instance of Dog

let hound = new Dog();
// now hound has all properties of the constructor Dog and can be accessed as-

console.log(hound.name);
hound.name = 'Rupert';
console.log(hound.name);

// constructor that accepts parameters
console.log("_____________________________________________________")
function Cars(name, color) {
  this.name = name;
  this.color = color;
  this.wheels = 4
}
/*Then pass in the values as arguments to define each unique cars into the Cars constructor
*/
let model = new Cars ("SUDAN", "WHITE");
console.log("name :" ,model.name);
console.log("name :" ,model.color);
model instanceof Cars;
//
console.log("_________________________________________________");
/*
instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:
*/

// instanceOf
model instanceof Cars;

//tests
/*
Dog should receive an argument for name.

Passed
Dog should receive an argument for color.

Passed
Dog should have property numLegs set to 4.

Passed
terrier should be created using the Dog constructor.
*/