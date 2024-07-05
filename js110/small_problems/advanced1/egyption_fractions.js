/*

# problem

- input: a rational number
    - (any num that can be represented as the result of the
       division between two integers)
- output: an array of denominators
    - numerator / denominator
    - that are part of an Egyption Fraction representation of the number

- rules
    -

# examples

- 521 / 1050 (n / d)
- find the highest unit fraction
        - Math.round(d / n)
        - 1050 / 521 ==> 3
- calculate remainder
        - (521 / 1050) - (1 / 3) ==> 57 / 350
- repeat process
        - 350 / 57 ==> 7
        - 1 / 7
        - (57 / 350) - (1 / 7) ==> 7 / 350
- until reaching the final unit fraction
        - final division of (d / n) has no remainder
        - 350 / 7 ==> 50
        - 1 / 50
- result:
        - 1/3 + 1/7 + 1/50 = 521/1050

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1)));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

# data structures

- arrays
- loop
- Math.round

# algorithm

- set result = []
- loop until denominator % numerator has no remainder
- push the result of Math.round(denominator / numerator)
        - this is the denominator of the first unit fraction
- remainder = input fraction - (the unit fraction calculated above)

# code

*/

const Fraction = require('fraction.js');

function egyptian(fractionObj) {
  let result = [];
  let remainder = fractionObj;
  let unitFract;

  while (true) {
    if (fractionObj > 1) {
      result.push(1);
      unitFract = 1;
    } else {
      unitFract = new Fraction(1, Math.round(remainder.d / remainder.n));
      result.push(unitFract.d);
    }

    remainder = new Fraction(fractionObj - unitFract);

    if (remainder.n === 1 || remainder.n === 0) {
      result.push(remainder.d);
      break;
    }
  }

  return result;
}

// console.log(egyptian(new Fraction(2, 15)));
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]


// console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
// console.log(egyptian(new Fraction(3, 1)));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]