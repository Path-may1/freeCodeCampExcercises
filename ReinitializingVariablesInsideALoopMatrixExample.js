//Reinitializing Variables Inside a Loop -Matrix example

//challenge
/*
The following function is supposed to create a two-dimensional array with
 m rows and n columns of zeroes. Unfortunately, it's not producing the expected
  output because the row variable isn't being reinitialized 
  (set back to an empty array) in the outer loop. 
  Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
//output
[ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ] ]

  //tests
Your code should set the matrix variable to an array holding 3 rows of 2 columns of zeroes each.

The matrix variable should have 3 rows.

The matrix variable should have 2 columns in each row.
*/

//correct code:  explanation

/*  Problem Explanation
This challenge must be solved by redefining the scope of row[].
Below is an example of the desired matrix.
[[0][0], [0][0], [0][0]];
However the current matrix - seen below - is far from the desired matrix
[[0][0][0][0][0][0], [0][0][0][0][0][0], [0][0][0][0][0][0]];
This error occurs due to the row[] array being declared as a global variable outside of the nested for loop.
However, to fill the matrix correctly the row[] array must be reset after each iteration of the outer loop.
*/

//the code as follows

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);