//Understand Where an Object’s Prototype Comes From
/*
Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. 
*/
function Dog(name){
  this.name = name;
}

let myDog = new Dog('Toby');

console.log(Dog.prototype.isPrototypeOf(myDog));