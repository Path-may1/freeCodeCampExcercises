//Implement the filter Method on a Prototype

/*
challenge -
Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
*/
const s = [20, 30, 25, 10, 11, 4]
Array.prototype.myFilter = function(callback) {
  newArray = [];

  for(i = 0 ; i < this.length; i++){
    if(callback(this[i])=== true){
      newArray.push(this[i]);
    }
  } 
  return newArray;
}

const new_s = s.myFilter(function(item){
  return item % 2 === 1
});

/*
new_s should equal [23, 65, 5].

Passed
Your code should not use the filter method.
*/