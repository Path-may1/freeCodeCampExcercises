//Titlecase
let publication = 'freecodecamp';   
let newPub = publication[0].toUpperCase(0) + publication.substring(1);
console.log(newPub);

let sentence = "sHoRt AnD sToUt";
let words = sentence.split(" ");

for (let  i = 0; i < words.length; i++){
  words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase()
}
let newW= words.join(" ")
console.log(newW);

//tests
/*
titleCase("I'm a little tea pot") should return a string.

Passed
titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.

Passed
titleCase("sHoRt AnD sToUt") should return the string Short And Stout.

Passed
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/