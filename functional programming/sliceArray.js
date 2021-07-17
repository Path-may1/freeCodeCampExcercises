//Slice Array 
let animals = ["tiger", "lion", "elephant", "deer", "rabbit"]
function SliceArray(animal,beginSlice,endSlice){
  let newArray = animal.slice(beginSlice, endSlice);
  return newArray;
}

const result = SliceArray(animals, 1, 3);
console.log(result);
