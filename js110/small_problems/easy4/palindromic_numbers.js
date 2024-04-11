/*

# Problem

- write a function to determine if argumen is palindromic

input: integer
output: boolean (true if palindromic; false if not)

explicit rules:
- argument will be an integer
- a palindrome reads the same forwards and backwards

questions: 
- will the argument always be positive?
- does it matter?

# Examples

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

# Data Structure

- array

# Algorithm

1. split the input into an array
2. return the value of the joined array to the reversed joined array

# Code

set numArray = num.split()
return numArray.reverse().join() === numArray.join()

*/

function isPalindromicNumber(num) {
  let numString = String(num);
  let numArray = numString.split('');
  
  return numArray.join('') === numArray.reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(000131000));