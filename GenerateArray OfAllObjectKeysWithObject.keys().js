//Generate an Array of All Object Keys with Object.keys()

//Object.keys generates an array of the keys of the passed Object

// challenge
/*
Finish writing the getArrayOfUsers function so that it returns an array containing
 all the properties in the object it receives as an argument.
*/
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
return Object.keys(obj)
}

console.log(getArrayOfUsers(users));

//tests
/*
The users object should only contain the keys Alan, Jeff, Sarah, and Ryan

Passed
The getArrayOfUsers function should return an array which contains all the keys in the users object
*/
