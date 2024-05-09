/*

# Problem

- input: an integer
    - representing a number of digits
- output: 
    - representing the index of the first Fibonacci number that has
      the number of digits specified by the argument

- explicit rules:
    - fibonacci series: (1, 1, 2, 3, 5, 8, 13, 21)
        - a series of numbers such that the first two numbers are 1 by definition
          and each subsequent number is the sum of the two previous numbers
    - the first Fibonacci number has an index of 1
    - the argument will always be an integer >= 2
    - BigInt will have to be used:
        - 2n, 7n, etc

- first need to create a function to get the Fibonacci number sequence:
    - fib(n) = fib(n - 2) + fib(n - 1)

# Examples

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

# Data Structures

- array
- loop
- String constructor to access length property

# Algorithm

1. run fibonacci function, 
    -------
    # Problem

    - create function that gives an array of the integers in the fibonacci sequence
    - input: none?
    - output: array of integers
    -------
2. set an array that will be the fibNumSequence = [1, 1]
2a. set digitCount (so it is accesible within the loop)
2b. set fibIndex = 3 (first index after the first two defined elements [1, 1])
3. start a loop that pushes to the fibNumSequence 
   the result of [index - 2] + [index - 1]
    - counter starts at 2 (because we have the first two elements 
      ([1, 1]) by definition)
      - digitCount = the length of the currentNumber
4. the loop terminates once digit count equals the argument integer
5. return counter + 1 ? (since our Fibonacci index starts with 1, not 0)

# Code

*/

// function findFibonacciIndexByLength(length) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     count += 1n;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);

//   return count;
// }

function findFibonacciIndexByLength(num) {
  let fibNumSequence = [1n, 1n];
  let digitCount = 0n;
  let index = 2n;

  while (digitCount < num) {
    fibNumSequence.push(
      fibNumSequence[index - 2n] + fibNumSequence[index - 1n]
    );

    digitCount = BigInt(String(fibNumSequence[fibNumSequence.length - 1]).length);
    
    index += 1n;
  }

  return BigInt(fibNumSequence.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.