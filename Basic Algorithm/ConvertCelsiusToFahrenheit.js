//Convert Celsius to Fahrenheit


//challenge
/* The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius
 times 9/5, plus 32. */

 function convertToF(celsius) {
  let fahrenheit = (celsius *9/5)+ 32;
  return fahrenheit;
}

convertToF(30);

//test
/*
convertToF(0) should return a number

Passed
convertToF(-30) should return a value of -22

Passed
convertToF(-10) should return a value of 14

Passed
convertToF(0) should return a value of 32

Passed
convertToF(20) should return a value of 68

Passed
convertToF(30) should return a value of 86
*/