//Find One or More Criminals in a Hunt

//challenge
/*
Write a greedy regex that finds one or more criminals within a group of other people. 
A criminal is represented by the capital letter C.
*/
let criminals ="abcABCD CBdc zAcbd"
let reCriminals = /C+/; // Change this line
let resultCriminal = criminals.match(reCriminals);
console.log(resultCriminal);

//tests
/*
Your regex should match one criminal (C) in the string C

Passed
Your regex should match two criminals (CC) in the string CC

Passed
Your regex should match three criminals (CCC) in the string P1P5P4CCCcP2P6P3.

Passed
Your regex should match five criminals (CCCCC) in the string P6P2P7P4P5CCCCCP3P1

Passed
Your regex should not match any criminals in the empty string ""

Passed
Your regex should not match any criminals in the string P1P2P3

Passed
Your regex should match fifty criminals (CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) in the string P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.
*/

//thesis

/*
Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"
*/
//_______________________________________________________________
//Match Ending String Patterns

/*In the last challenge, you learned to use the caret character 
to search for patterns at the beginning of strings.
 There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ 
at the end of the regex.
*/

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

//The first test call would return true, while the second would return false.

//Use the anchor character ($) to match the string caboose at the end of the string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
//tests
/*
You should search for caboose with the dollar sign $ anchor in your regex.

Passed
Your regex should not use any flags.

Passed
You should match caboose at the end of the string The last car on a train is the caboose

*/

//Match All Letters and Numbers
// challenge
/*
Use the shorthand character class \w to count the number of 
alphanumeric characters in various quotes and strings.

*/
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let resultMatch = quoteSample.match(alphabetRegexV2).length;
console.log(resultMatch);

//tests
/*
Your regex should use the global flag.

Passed
Your regex should use the shorthand character \w to match all characters which are alphanumeric.

Passed
Your regex should find 31 alphanumeric characters in the string The five boxing wizards jump quickly.

Passed
Your regex should find 32 alphanumeric characters in the string Pack my box with five dozen liquor jugs.

Passed
Your regex should find 30 alphanumeric characters in the string How vexingly quick daft zebras jump!

Passed
Your regex should find 36 alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/

//____________________________________________________________
//Match Everything But Letters and Numbers
// challenge

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let resultNonAlpha = quoteSample.match(nonAlphabetRegex).length;
console.log(resultNonAlpha);

//tests
/*
Your regex should use the global flag.

Your regex should find 6 non-alphanumeric characters in the string The five boxing wizards jump quickly..

Your regex should use the shorthand character to match characters which are non-alphanumeric.

Your regex should find 8 non-alphanumeric characters in the string Pack my box with five dozen liquor jugs.

Your regex should find 6 non-alphanumeric characters in the string How vexingly quick daft zebras jump!

Your regex should find 12 non-alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/

//______________________________________________________________
//Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let resultDigits = movieName.match(numRegex).length;
console.log(resultDigits);

//thesis
/* 
The shortcut to look for digit characters is \d, with a lowercase d.
 This is equal to the character class [0-9], which looks for a single character of 
 any number between zero and nine.
*/
//tests
/*
Your regex should use the shortcut character to match digit characters

Passed
Your regex should use the global flag.

Passed
Your regex should find 1 digit in the string 9.

Passed
Your regex should find 2 digits in the string Catch 22.

Passed
Your regex should find 3 digits in the string 101 Dalmatians.

Passed
Your regex should find no digits in the string One, Two, Three.

Passed
Your regex should find 2 digits in the string 21 Jump Street.

Passed
Your regex should find 4 digits in the string 2001: A Space Odyssey.
*/
//------------------------------------------------------------------
//Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

// tests
/*Your regex should use the shortcut character to match non-digit characters

Passed
Your regex should use the global flag.

Passed
Your regex should find no non-digits in the string 9.

Passed
Your regex should find 6 non-digits in the string Catch 22.

Passed
Your regex should find 11 non-digits in the string 101 Dalmatians.
*/