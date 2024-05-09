/*

# Problem

- input: an integer 
    - representing the nth number in the fibonacci sequence

- output:
    - the integer at the nth index of the fibonacci sequence

- explicit rules:
    - function must use recursion (ie reference itself)

# Examples

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

# Data Structures

- recursive loop

# Algorithm

1. if input number equals 1, return 1
2. return fibonacci(n - 2) + fibonacci(n - 1)

# Code

*/

let fibObj = { 1: 1, 2: 1, };
let invocations = 0;

function fibonacci(nth) {
  if (fibObj[nth]) {
    invocations += 1;
    return fibObj[nth];
  } else {
    fibObj[nth] = fibonacci(nth - 2) + fibonacci(nth - 1);
    invocations += 1;
    return fibObj[nth];
  }
}

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765


console.log(fibonacci(70), invocations); // 13 in 5 invocations

/*

# Problem

- see above for explanation of problem

- explicit rules:
    - do NOT use recursion this time
    - 78 is the highest integer the function will take
      as an argument

# Examples

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

# Data Structures

- Loop

# Algorithm

0. set firstNum = 1, secondNum = 1, fibonacci = firstNum + secondNum
1. set count = 3
2. start a loop
    - terminates when count === input number
    - firstNum = secondNum
    - secondNum = fibonacci
    - fibonacci = firstNum + secondNum
3. return fibonacci

# Code

*/

function fibonacciProcedural(n) {
  if (n <= 2) return 1;

  let firstNum = 1;
  let secondNum = 1;
  let fibonacci = firstNum + secondNum;
  let count = 3;

  while (count < n) {
    firstNum = secondNum;
    secondNum = fibonacci;
    fibonacci = firstNum + secondNum;
    
    count += 1;
  }

  return fibonacci;
}

console.log(fibonacciProcedural(20));       // 6765
console.log(fibonacciProcedural(50));       // 12586269025
console.log(fibonacciProcedural(75));       // 2111485077978050

/*

# Problem

- use memoization to refactor the recursive function above,
  making it more efficient

# Examples

- see above

# Data Structures

- objects

# Algorithm

1. set fibObj = {1: 1, 2: 1}
2. if nth is included in fibObj's keys
    return fibObj[nth]
3. return fibObj(n - 2) + fibObj(n - 1)

# Code
*/