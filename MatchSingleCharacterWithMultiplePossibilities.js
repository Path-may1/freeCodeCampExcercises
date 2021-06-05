//Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
console.log(result);


//test 
/*
You should find all 25 vowels.

Passed
Your regex vowelRegex should use a character class.

Passed
Your regex vowelRegex should use the global flag.

Passed
Your regex vowelRegex should use the case insensitive flag.

Passed
Your regex should not match any consonants.
*/


// explanation

/* You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
*/
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

/*
In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
*/

//__________________________________________________________________

let quoteSample = "The quick brown fox jumps over the 1 lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex); 
console.log(result);

/*Your regex alphabetRegex should match 35 items.

Passed
Your regex alphabetRegex should use the global flag.

Passed
Your regex alphabetRegex should use the case insensitive flag.
*/

//explanation
/*
to match a range of charecters
you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
In order, the three match calls would return the values ["cat"], ["bat"], and null.

*/

//_______________________________________________
//Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex)
console.log(result);

//tests
/*
Your regex myRegex should match 17 items.

Passed
Your regex myRegex should use the global flag.

Passed
Your regex myRegex should use the case insensitive flag.
*/

//thesis

/*
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
*/
//_____________________________________________________
//Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
console.log(result);

//tests
/*Your regex myRegex should match 9 items.

Passed
Your regex myRegex should use the global flag.

Passed
Your regex myRegex should use the case insensitive flag.*/

//_______________________________________________________________
//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
console.log(result);

//tests
/*Your regex myRegex should use the + sign to match one or more s characters.

Passed
Your regex myRegex should match 2 items.

Passed
The result variable should be an array with two matches of ss
*/

// explanation
/*
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

*/
//______________

//Match Characters that Occur Zero or More Times
//challenge

/*
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

*/

let chewieQUote ="Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /A0*a*/;

let result = chewieQuote.match(chewieRegex);
console.log(result);

//tests
/*Your regex chewieRegex should use the * character to match zero or more a characters.

Passed
Your regex should match the string A in chewieQuote.

Passed
Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.

Passed
Your regex chewieRegex should match 16 characters in chewieQuote.

Passed
Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.

Passed
Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.
*/

//explanation

/*The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.
*/
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

//In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

//_________________________________________________________________

//Find Characters with Lazy Matching

//challenge
/*Fix the regex /<.*>/ to return the HTML tag <h1> and not the 
text "<h1>Winter is coming</h1>". Remember the wildcard . in a 
regular expression matches any character. */
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);
//tests
/*
The result variable should be an array with <h1> in it

Passed
myRegex should use lazy matching

Passed
myRegex should not include the string h1
*/

