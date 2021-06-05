//regex test method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result) // returns true

// thesis

/* If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
The test method here returns true.
-*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);

//test
/*Your regex petRegex should return true for the string John has a pet dog.

Passed
Your regex petRegex should return false for the string Emma has a pet rock.

Passed
Your regex petRegex should return true for the string Emma has a pet bird.

Passed
Your regex petRegex should return true for the string Liz has a pet cat.

Passed
Your regex petRegex should return false for the string Kara has a pet dolphin.

Passed
Your regex petRegex should return true for the string Alice has a pet fish.

Passed
Your regex petRegex should return false for the string Jimmy has a pet computer.
*/
//thesis
/* Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

Complete the regex petRegex to match the pets dog, cat, bird, or fish. */

//ignore case while matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

//tests
/*Your regex should match the string freeCodeCamp

Passed
Your regex should match the string FreeCodeCamp

Passed
Your regex should match the string FreecodeCamp

Passed
Your regex should match the string FreeCodecamp

Passed
Your regex should not match the string Free Code Camp

Passed
Your regex should match the string FreeCOdeCamp

Passed
Your regex should not match the string FCC

Passed
Your regex should match the string FrEeCoDeCamp

Passed
Your regex should match the string FrEeCodECamp

Passed
Your regex should match the string FReeCodeCAmp
*/

//Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//tests
/* The result should have the string coding

Passed
Your regex codingRegex should search for the string coding

Passed
You should use the .match() method. */

//To search or extract a pattern more than once, you can use the g flag.
//You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);

//test
/*
our regex starRegex should use the global flag g

Passed
Your regex starRegex should use the case insensitive flag i

Passed
Your match should match both occurrences of the word Twinkle

Passed
Your match result should have two elements in it.
*/
// test method with wild charecters.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
console.log(result); // returns true

//explanation
//The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
//Both of these test calls would return true.

