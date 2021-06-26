//Boo who
// challenge
/*
Check if a value is classified as a boolean primitive. Return true or false.
*/
function boohoo(bool) {
  return typeof bool === "boolean";
}
console.log(boohoo(null))

//tests
/*
booWho(true) should return true.

Passed
booWho(false) should return true.

Passed
booWho([1, 2, 3]) should return false.

Passed
booWho([].slice) should return false.

Passed
booWho({ "a": 1 }) should return false.

Passed
booWho(1) should return false.

Passed
booWho(NaN) should return false.

Passed
booWho("a") should return false.

Passed
booWho("true") should return false.

Passed
booWho("false") should return false.
*/