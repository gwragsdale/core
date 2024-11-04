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

function egyptian(fraction) {
  let unitFractions = [];

  while (fraction.toFraction(true) !== "0") {
    let unit = new Fraction(1, Math.ceil(fraction.d / fraction.n));
    unitFractions.push(unit);
    fraction = fraction.sub(unit);
  }

  return unitFractions.map(num => num.d);
}

function unegyptian(array) {
  let originalFract = array
    .map(num => new Fraction(1, num))
    .reduce((sum, num) => {
      return sum.add(num);});

  return originalFract.n / originalFract.d;
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3