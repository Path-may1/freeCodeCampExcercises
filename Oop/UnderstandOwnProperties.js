//Understand Own Properties
// 
function  Cars(name) {
  this.name = name;
  this.color = 'White';
  this.wheels = 4
}

let model = new Cars('Subaru');
const ownCars = [];
//Add the own properties of model to the array ownCars

for(let property in model){
  if(model.hasOwnProperty(property)){
    ownCars.push(property)
  }
}
console.log(ownCars)