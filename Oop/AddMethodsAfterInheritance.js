//Add Methods After Inheritance

//for example, Dog is a constructor that inherits its prototype from Animal:
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;


// In addition to what is inherited from Animal, you want to add behavior that is unique to Dog objects. Here, Dog will get a bark() function. Functions are added to Dog's prototype the same way as any constructor function:



Dog.prototype.bark = function(){
  console.log("Woof!")
}


//Now instances of Dog will have both eat() and bark() methods:

let beagle = new Dog();

beagle.eat();
beagle.bark();