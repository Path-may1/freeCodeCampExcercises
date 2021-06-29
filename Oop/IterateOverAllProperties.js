
//Iterate Over All Properties

/*
You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
*/

function Bird(name){
  this.name = name;  // own property
}

let newbird = new Bird('sparrow');

Bird.prototype.numLegs = 2; // prototype
let ownProperty = [];
let ownPrototype = [];
for(let property in newbird){
  if(newbird.hasOwnProperty(property)){
    ownProperty.push(property)
  } else {
    ownPrototype.push(property)
  } 
}

console.log(ownProperty);
console.log("ownPrototype", ownPrototype);