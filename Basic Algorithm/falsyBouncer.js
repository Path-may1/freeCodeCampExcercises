//Falsy Bounce

function bouncer(arr) {

  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newarr.push(arr[i])

    }
  }
  return newarr;
}

console.log(bouncer([7, "ate", "", false, 9]));

