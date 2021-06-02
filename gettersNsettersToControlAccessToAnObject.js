//getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  //getter
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  //setter
  set temperature(celcius) {
    this.fahrenheit = celcius * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // 1. creating a new object thermos based on the class Thermostat. 2. Setting in Fahrenheit scale
let temp = thermos.temperature; //// 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;//// 26 in Celsius
console.log(temp);

//test cases
/* Thermostat should be a class with a defined constructor method.

class keyword should be used.

Thermostat should be able to be instantiated.

When instantiated with a Fahrenheit value, Thermostat should set the correct temperature.

A getter should be defined.

A setter should be defined.

Calling the setter with a Celsius value should set the temperature.
*/

//one more example of getters and setters

class Book {
  constructor(author) {
    this.author = author;
  }
  get writer() {
    return this.author;
  }
  set writer(updatedAuthor) {
    this.author = updatedAuthor;
  }
}

const novel = new Book('Best Sellers');
console.log(novel.writer);
novel.writer = 'Cook Books'
console.log(novel.writer);

// one more example for getters and setters

class User{
  
  set name(value){
    if(value.length < 1){
      throw new Error ('Please provide name for the user');
    }
    this._name = value;
  }
  get name(){
    return this._name;
  }
  // trying out set password method with some validation
  set password(value){
    if(value.length < 6){
      throw new Error('The password must not be less than 6 charecters')
    }
    return this._password = value;
  }

  get password() {
    return '*'.repeat(this._password.length);
  }

}

const newUser = new User();
//newUser.name =''; // checking the empty string validation, should show an error in terminal
newUser.name = 'Mayura';
//newUser.password ='pwd'; // should show an error in terminal
newUser.password ='password'; 
console.log("newUser.name :" ,newUser.name);
console.log("newUser password ", newUser.password);