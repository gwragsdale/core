/*

# Problem

input: string
output: Boolean (true if a palindrom; false if not)

explicit rules:
  - palindrome: reads the same forwards and backwards
  - case matters
  - all characters matter (including special characters and numbers)

# Examples

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

# Data Structures

- arrays

# Algorithm

1. set reverseString to the input string split into an array
  - reverse array
  - join array
2. return inputString is strictly equal to reverseString

# Code with intent

*/

function isPalindrome(string) {
  let reverseString = string.split('')
                            .reverse()
                            .join('');
  
  return string === reverseString;
}

/*

# Problem

input: string
output: Boolean true or false

explicit rules:
- ignore case
- ignore non-alphanumeric characters

implicit rules:
- ingore spaces too

# Examples

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

# Data Structures

- arrays
- filter method to remove non-alphanumeric characters

# Algorithm

1. set filteredArray of split string
2. filter out non-alphanumeric characters
3. set reverseArray to filteredArray reversed
4. return the value of the joined arrays compared to each other

*/

function isRealPalindrome(string) {
  let filteredArray = string.split('')
                            .map(char => char.toLowerCase())
                            .filter(char => {
    return 'abcdefghijklmnopqrstuvwxyz1234567890'.includes(char);
  });

  return filteredArray.join('') === filteredArray.reverse().join('');
}

console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
console.log(isRealPalindrome('madam'));               // true