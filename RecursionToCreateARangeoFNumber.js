//Use Recursion to Create a Range of Numbers


function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1)
    arr.push(endNum);
    return arr;
  }
}
rangeOfNumbers(1, 5);

/*
We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
*/

/* results
Your function should return an array.

Passed
Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).

Passed
rangeOfNumbers should use recursion (call itself) to solve this challenge.

Passed
rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].

Passed
rangeOfNumbers(6, 9) should return [6, 7, 8, 9].

Passed
rangeOfNumbers(4, 4) should return [4].
*/