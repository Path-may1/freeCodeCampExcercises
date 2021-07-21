//Grouping Objects By A Property With - reduce().js


let peopleNames = [
  { name: 'Alice', age : 21},
  { name: 'Mary', age : 21},
  { name: 'Tommy', age : 41},
  { name: 'Ronald' , age : 41},
  { name: 'ThigaThalla' , age : 40}
];

function groupBy(objectArray, property){
  return objectArray.reduce(function(acc, obj){
    let key = obj[property];
    if(!acc[key]){
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  },{})
};

let result = groupBy(peopleNames, 'age');
console.log(result);















