//Finders Keepers

const { WSATYPE_NOT_FOUND } = require("node:constants");

function findElement(arr, func){

  for(let i = 0 ; i < arr.length; i++){
    let num = arr[i];
    if(func(num)){
      return num;
    }
  }
  return num
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));