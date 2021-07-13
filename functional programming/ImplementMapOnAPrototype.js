//Implement map on a Prototype

let s = [2, 10, 15, 20];

Array.prototype.Mymap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
  }
  return newArray;
}

let new_s = s.Mymap(function (item) {
  return item * 2;
});
console.log(new_s);

// applying the above functionality with forEach loop
let m = [10, 20, 30, 40]
Array.prototype.myMap1 = function(callback){
  let newArray1 = [];
  this.forEach(a => newArray1.push(callback(a)))
  return newArray1;
}
let new_m = m.myMap1(function(item){
return item * 3;
});
console.log(new_m);