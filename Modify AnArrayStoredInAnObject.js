//Modify an Array Stored in an Object
//challenge
/*
Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend 
argument to the array stored in user.data.friends and returns that array.
*/
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  
  userObj.data.friends.push(friend)
  return user.data.friends
}

console.log(addFriend(user, 'Pete'));

//tests
/*
he user object should have name, age, and data keys.

Passed
The addFriend function should accept a user object and a friend string as arguments and add the friend to the array of friends in the user object.

Passed
addFriend(user, "Pete") should return ["Sam", "Kira", "Tomo", "Pete"].
*/