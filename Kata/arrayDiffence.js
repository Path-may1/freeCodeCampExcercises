//kata from codewars
/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arraydiff(a, b) {

  for (let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++) {
      if(a[i] === b[j]) {
        a.splice(i, 1);
        i = 0;
      }

    }
  }
  return a;
}

console.log(arraydiff([1,2], [1]));
console.log(arraydiff([1,2,2], [1]));
console.log(arraydiff([1,2,2], [2]));
console.log(arraydiff([1,2,2], []));
console.log(arraydiff([], [1,2]));
console.log(arraydiff([1,2,3], [1,2]));


/* describe("Basic tests", function() {
  it("Should pass Basic tests", function() {
    Test.assertDeepEquals(array_diff([1,2], [1]), [2], "a was [1,2], b was [1]");
    Test.assertDeepEquals(array_diff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    Test.assertDeepEquals(array_diff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    Test.assertDeepEquals(array_diff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    Test.assertDeepEquals(array_diff([], [1,2]), [], "a was [], b was [1,2]");
    Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
  });
});  
*/