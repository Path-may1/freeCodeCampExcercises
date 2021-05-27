Recursion to Create a Countup

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

/* results
The value [1, 2, 3, 4, 5] will be displayed in the console. */