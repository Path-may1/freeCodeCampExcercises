//Find the Longest Word in a String
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxlength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxlength) {
      maxlength = words[i].length;
    }
  }
  return maxlength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//tests

/*
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

Passed
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

Passed
findLongestWordLength("May the force be with you") should return 5.

Passed
findLongestWordLength("Google do a barrel roll") should return 6.

Passed
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

Passed
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/