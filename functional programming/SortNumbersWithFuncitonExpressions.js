// Sort numbers with funciton expressions.js

let array = [4, 6 , 2 , 1 ,3 ,7];
function arraySort(arr){
  return arr.sort(function(a ,b){
    return a - b;
  });
}
console.log(arraySort(array));