//Set the Child's Prototype to an Instance of the Parent

function Animal (name) {
  this.name = name
}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("num num num");
  }
}

function Dog (name) {
  this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog('Toby');

beagle.eat();
console.log(beagle.name);
