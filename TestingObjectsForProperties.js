//Testing Objects for Properties
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")

/*Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".*/

/* results
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.

Passed
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.

Passed
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.

Passed
checkObj({city: "Seattle"}, "city") should return the string Seattle.

Passed
checkObj({city: "Seattle"}, "district") should return the string Not Found.

Passed
checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.
*/