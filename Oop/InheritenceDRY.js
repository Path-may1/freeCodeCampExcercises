// inheritence
//Use Inheritance So You Don't Repeat Yourself
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/* The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal: */

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
/* Since Animal includes the describe method, you can remove it from Bird and Dog:*/

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

/*
tests
Animal.prototype should have the eat property.

Passed
Bear.prototype should not have the eat property.

Passed
Cat.prototype should not have the eat property.
*/