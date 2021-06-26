//Finding if an element exists in the array or not and updating the array

function updateVegetablesCollection(Veggies, veggie) {
  if(veggies.indexOf(veggie) === -1){
    veggies.push(veggie)
    console.log(`The new ${veggie} is added to ` + veggies)
  } else {
    if(veggies.indexOf(veggie) > -1){
      console.log(`${veggie} is already present in ` + veggies)
    }
  }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];
updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.