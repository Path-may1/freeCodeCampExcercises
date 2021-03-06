//Understand the Immediately Invoked Function Expression (IIFE)

//Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

//A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("A cozy nest is ready");
})();

//tests
/*
The function should be anonymous.

Passed
Your function should have parentheses at the end of the expression to call it immediately.
*/