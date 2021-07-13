//Iterate Through the Keys of an Object with a for...in Statement

/* We've defined a function countOnline which accepts one argument (a users object). 
Use a for...in statement within this function to loop through the users object passed 
into the function and return the number of users whose online property is set to true.
 An example of a users object which could be passed to countOnline is shown below.
  Each user will have an online property with either a true or false value.*/



  // code

  const usersObj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

  
  function countOnline(usersObj) {
  let count = 0;
  for(let user in usersObj){
    
    if(usersObj[user].online === true){
      count++
    }
  } return count;
}

countOnline(usersObj);

//test
/*
The function countOnline should use a for in statement to iterate through the object keys of the object passed to it.

Passed
The function countOnline should return 1 when the object { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } is passed to it

Passed
The function countOnline should return 2 when the object { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } } is passed to it

Passed
The function countOnline should return 0 when the object { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } } is passed to it
*/
