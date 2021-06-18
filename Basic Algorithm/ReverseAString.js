//Reverse a String
function reverseString(str) {
  let newStr = "";
  for(let i = str.length-1; i >= 0; i--){
    newStr += str[i];  
  }
  return newStr;
}

console.log(reverseString("Greetings from Earth"));

//test

/*
reverseString("hello") should return a string.

Passed
reverseString("hello") should return the string olleh.

Passed
reverseString("Howdy") should return the string ydwoH.

Passed
reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
*/