//Use Prototype Properties to Reduce Duplicate Code

/*
properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:
*/

function Birds(name){
  this.name = name;
}
Birds.prototype.numLegs = 2;

let newBird = new Birds('Sparrow');
let firstBird = new Birds('Nightingale');

console.log(newBird.numLegs);