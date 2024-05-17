/* 

# Problem

- input: number
- output: Boolean
    - is input a prime number?

- explicit rules:
    - prime number:
        - a positive number 
        - that is evenly divisible only by itself and 1
    - 1 is not a prime number

- implicit rules
    - use parseInt() method -- input can include non-numeric characters

# Examples

console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true

# Data Sets

- loop
- array

# Algorithm

- set divisors = [2, 3, 4, 5, 6, 7, 8, 9]
- convert input to integer (parseInt)

1. guard clause:
    - if input is 1, return false
    - if input is 5 or 7, return true
2. set result = 0
3. iterate through divisors array
4. if num % divisor is 0, result += 1 
5. return result converted to Boolean

# Code

*/

function is_prime(num) {
  let divisors = [2, 3, 4, 5, 6, 7, 8, 9];
  let singleDigitPrimes = [2, 3, 5, 7];
  let result = 0;

  if (num === 1) return false;
  if (singleDigitPrimes.includes(num)) return true;

  divisors.forEach(digit => {
    if (num % digit === 0) {
      result += 1;
    }
  });

    return !result;
}

console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true