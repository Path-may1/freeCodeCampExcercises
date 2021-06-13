//Restrict Possible Usernames

//challenge
/*
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.


*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
console.log(result)

//test
/*
Your regex should match the string JACK

Passed
Your regex should not match the string J

Passed
Your regex should match the string Jo

Passed
Your regex should match the string Oceans11

Passed
Your regex should match the string RegexGuru

Passed
Your regex should not match the string 007

Passed
Your regex should not match the string 9

Passed
Your regex should not match the string A1

Passed
Your regex should not match the string BadUs3rnam3

Passed
Your regex should match the string Z97

Passed
Your regex should not match the string c57bT3

Passed
Your regex should match the string AB1

Passed
Your regex should not match the string J%4
*/
//code explanation
/*
Code Explanation
1.  ^ - start of input
2.  [a-z] - first character is a letter
3.  [a-z]+ - following characters are letters
4.  \d*$ - input ends with 0 or more digits
5.  | - or
6.  ^[a-z] - first character is a letter
7.  \d\d+ - following characters are 2 or more digits
8.  $ - end of input
*/

//______________________________________________________________________________
//Match white spaces
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let resultWhiteSpaces = sample.match(countWhiteSpace);
console.log(resultWhiteSpaces);

//___________________________________________________________________________________
//Matching everything except white spaces
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resultNonWhiteSpaces= sample.match(countNonWhiteSpace);
console.log(resultNonWhiteSpaces);

//____________________________________________________________________________
//Specify Upper and Lower Number of Matches

//challenge
/*
ou can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
The first test call would return true, while the second would return false.

Change the regex ohRegex to match the entire phrase Oh no only 
when it has 3 to 6 letter h's.
*/
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);

//tests
/*
Your regex should use curly brackets.

Passed
Your regex should not match the string Ohh no

Passed
Your regex should match the string Ohhh no

Passed
Your regex should match the string Ohhhh no

Passed
Your regex should match the string Ohhhhh no

Passed
Your regex should match the string Ohhhhhh no

Passed
Your regex should not match the string Ohhhhhhh no
*/

//explanation
/*
Remember to use \s after Oh{3,6} to include a white space, followed by no to pass all test cases. All test cases are written using a capital O, however the testcases could also be passed by using ignore-case : /oh{3,6}\sno/i
*/

//________________________________________________________________________________
//Specify Only the Lower Number of Matches

//challenge
/*Change the regex haRegex to match the word Hazzah only when it has four or more letter z's. */
et haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/i; // Change this line
let result = haRegex.test(haStr);

//tests
/*
Your regex should use curly brackets.

Passed
Your regex should not match the string Hazzah

Passed
Your regex should not match the string Hazzzah

Passed
Your regex should match the string Hazzzzah

Passed
Your regex should match the string Hazzzzzah

Passed
Your regex should match the string Hazzzzzzah

Passed
Your regex should match the string Hazzah with 30 z's in it.

*/

//thesis
/*
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
In order, the three test calls would return true, false, and true.
*/

//___________________________________________________________________________
//Specify Exact Number of Matches

//challenge

/*  Change the regex timRegex to match the word Timber only when it has four letter m's. */
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
