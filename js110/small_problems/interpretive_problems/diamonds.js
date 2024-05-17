/*

# Problem

- input: odd integer
- output:  a 4-pointed diamond grid

# Examples

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

# Data Structures

- Loop

# Algorithm

- desired length of first string, is "n"
- one "*" at the index of ("n" + 1) / 2
    - eg, n = 3
    - (3 + 1) / 2 = 2
    - " * "
- repeat the number of "*" + "**"

0. set white space padding = ("n" + 1) / 2
1. set stars = "*"
2. loop from 1 to "n"
3. log stars to the console with padding at the beginning
4. stars += "**"
5. padding -= 1

# Code

*/

function getStarRows(middle) {
  let result = [];
  let stars = "*";

  for (let count = 1; count <= middle; count += 1) {
    result.push(stars);
    stars += "**";
  }

  return result;
}

function diamond(n) {
  let middle = (n + 1) / 2;
  let stars = getStarRows(middle);
  let padding = middle;


  for (let idx = 0; idx < stars.length; idx += 1) {
    let currentRow = stars[idx];

    console.log(currentRow.padStart(padding, " "));

    padding += 1;
  }

  padding -= 1;

  for (let j = stars.length - 2; j >= 0; j -= 1) {
    let currentRow = stars[j];
    padding -= 1;

    console.log(currentRow.padStart(padding, " "));
  }
}

diamond(1);
diamond(3);
diamond(9);

/*

[1, 0][3, 1][5, 3][3, 1][1, 0]

*/

function hollowDiamond(n) {
  numberSequence(n).forEach(pair => {
    let number = pair[0];
    let hollowCore = pair[1];

    if (number === 1) {
      console.log(`${" ".repeat(((n - number ) / 2))}*`);
    } else {
      console.log(`${" ".repeat((n - number) / 2)}${"*" + " ".repeat(hollowCore) + "*"}`);
    }
  });
}

function numberSequence(n) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {

    if (number === 1) {
      result.push([number, 0]);
    } else {
      result.push([number, number - 2]);
    }
    
    if (number === n) {
      increment = -2;
    }
    number += increment;
  }

  return result;
}

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(5);
hollowDiamond(9);