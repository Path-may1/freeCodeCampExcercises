//Inherit Behaviors from a Supertype

/*Use Object.create to make two instances of Animal named duck and beagle.*/

function Animal(name) {
  this.name = name
}

Animal.prototype = {
  construtor: Animal,
  eat: function() {
    console.log("num num num");
  }
}

// creating prototype(inheritance) of parent Animal- Object.create
//Use Object.create to make two instances of Animal named duck and beagle.
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();

//tests
/*
The duck variable should be defined.

Passed
The beagle variable should be defined.

Passed
The duck variable should be initialised with Object.create.

Passed
The beagle variable should be initialised with Object.create.

Passed
duck should have a prototype of Animal.

Passed
beagle should have a prototype of Animal.
*/