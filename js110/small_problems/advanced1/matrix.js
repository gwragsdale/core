/*

# Problem

- input: a nested array
    - representing a 3x3 matrix
- output: a new nested array
    - representing the input matrix, transposed

- rules:
    - a transpose of a 3x3 matrix results from exchanging the rows
      and columns of the original matrix

# Examples

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

# Data Structures

- loop
- nested arrays

# Algorithm

1. getNewRow(nestedArr, columnNum)
    - set result = []
    - iterate for length of input array
    - push nestedArr[idx][column]
    - return result
2. transpose(matrix)
    - set result = [];
    - iterate for length of array
    - push getNewRow(matrix, idx)
    - return result

# Code

*/

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

function getNewRow(nestedArr, columnNum) {
  let result = [];

  nestedArr.forEach(row => result.push(row[columnNum]));

  return result;
}

// changed to accomodate 3x3 and 4x4 matrices

function transpose(matrix) {
  let result = [];

  for (let columnIdx = 0; columnIdx < matrix[0].length; columnIdx += 1) {
    result.push(getNewRow(matrix, columnIdx));
  }

  return result;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

/*

# problem

- input: matrix array
- output: same matrix array, transposed

# Examples

[
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

==>

[
  [1, 4, 3],
  [5, 7, 9],
  [8, 2, 6]
]
----------------
[0][0] => [0][0]
[0][1] => [1][0]
[0][2] => [2][0]

[1][0] => [0][1]
[1][1] => [1][1]
[1][2] => [1][2]

[2][0] => [0][2]
[2][1] => [1][2]
[2][2] => [2][2]

*/

function transposeMatrix(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix.length; j += 1) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

transposeMatrix(matrix);
console.log(matrix);