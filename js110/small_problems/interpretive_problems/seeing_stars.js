/*

# Problem

- input: odd integer
- output: an 8-pointed star

- rules
    - the smallest star is a 7 x 7 grid
    - smallest argument is 7
    - center row of star = argument
    - center column has n stars
      - so does every branch
    - until center row, there 3 stars for every row
    - number of rows before/after center = (n - 1) / 2
        - eg, if n = 7, there are 3 rows of 3 stars before/after center row
    - number of spaces on each row = n

    - centerColummn = n / 2, rounded up

    - rows:
        - center = "*" repeated n times
        - rows before/after center = n / 2, rounded down
            - this is the number to iterate to before and after center
        - all rows have * in center
        - 1st row
            - length = n
            - starts with *
            - followed by " ", repeated until center column
            - after center *, " " repeated same number of times as above
        - 2nd row
            - " " x2 + * + " ", repeated until centCol, + * + " " repeated + *
        - ...
        - row immediately before centerRow:
            - ***, with " " on both sides

# Examples

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

# Data Structures

- array

# Algorithm

# Code

*/

// function star(size) {
//   let middleIdx = Math.round(size / 2);

//   for (let row = 0; row < middleIdx - 1; row += 1) {
//     let spacesBetween = " ".repeat(((size - 3) / 2) - row);
//     let padding = " ".repeat(row);

//     console.log(padding + "*" + spacesBetween + "*" + spacesBetween + "*");
//   }

//   console.log("*".repeat(size));
//   let currentIteration = 0;

//   for (let finalRows = middleIdx + 1; finalRows <= size; finalRows += 1) {
//     let padding = " ".repeat(((size - 3) / 2) - currentIteration);
//     let spacesBetween = " ".repeat(currentIteration);

//     console.log(padding + "*" + spacesBetween + "*" + spacesBetween + "*");
//     currentIteration += 1;
//   }
// }

function buildStarArray(size) {
  let middleIdx = Math.round(size / 2);
  let rowArr = [];

  for (let row = 0; row < middleIdx - 1; row += 1) {
    let spacesBetween = " ".repeat(((size - 3) / 2) - row);
    let padding = " ".repeat(row);

    rowArr.push([padding, "*", spacesBetween, "*", spacesBetween, "*"]);
  }

  rowArr.push(["*".repeat(size)]);
  return rowArr;
}

// log idx 0, 1, 2, middleIdx (end of array)
// log idx 2, 1, 0
// iterations = 1, loop while < size
// index = 0
//    index += 1
//      if iterations > middleIdx
//      then index -= 1

function star(size) {
  let starArray = buildStarArray(size);
  let iterations = 1;
  let index = 0;
  let middle = starArray.length - 1;

  while (iterations <= size) {
    let currentRow = starArray[index];
    console.log(currentRow.join(""));

    if (iterations <= middle) {
      index += 1;
    } else if (iterations > middle) {
      index -= 1;
    }

    iterations += 1;
  }
}

star(17);