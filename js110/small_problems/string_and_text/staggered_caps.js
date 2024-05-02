/*

# Problem

- input: string
- output: string
    - with each char alternating upper and lower case

- explicit rules:
    - ignore non-alphabetic characters (including " ")
    - but count them as characters for determining
      when to switch between upper and lower case

# Examples

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

# Data Structure

- loop

# Algorithm

0. create a helper function to determine if a number is even or odd
    - return true if even
    - return false if odd
1. iterate for the length of the string
2. if index is even, character should be upper case
      - if odd, then lower case
3. end loop
4. return transformed string

# Code

*/
let letters = 'abcdefghijklmnopqrstuvwxyz';

function staggeredCase(string, countNonAlpha = true) {
  let str = string.split('');
  let caseMarker = 'upper';

  if (countNonAlpha) {
    str.forEach((_, i, arr) => {
       if (i % 2 === 0) {
        arr[i] = arr[i].toUpperCase();
       } else {
        arr[i] = arr[i].toLowerCase();
       }
    });
  } else {
    str.forEach((char, i, arr) => {
      if (caseMarker === 'upper' && letters.includes(char.toLowerCase())) {
        arr[i] = char.toUpperCase();
        caseMarker = 'lower';
      } else if (caseMarker === 'lower' && letters.includes(char.toLowerCase())) {
        arr[i] = char.toLowerCase();
        caseMarker = 'upper';
      } 
    });
  }

  return str.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

console.log(staggeredCase("I Love Launch School!", false) === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS", false) === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers", false) === "IgNoRe 77 ThE 444 nUmBeRs"
);

/*

# Problem

- see above

# Examples

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

# Data Structures

- Array

# Algorithm

1. set case = 'upper'
2. 

*/