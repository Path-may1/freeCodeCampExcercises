const person = {
  firstName: 'Peter',
  lastName: 'Roberts',
  get fullname() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullname(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

person.fullname = 'Mayura Pathak'; // setters => updating value of fullname
console.log.apply(person) // getters =>displays the fullname in the object

/*
// getters and setters
There are special kind of methods in objects are getters and setters

getters => to access the properties of an objects
setters => to update or change the properties of an objects
*/
//source : https://www.youtube.com/watch?v=bl98dm7vJt0

