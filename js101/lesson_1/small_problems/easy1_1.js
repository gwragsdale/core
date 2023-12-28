/* 
function isOdd(number) {
  if (number < 0 && (number * -1) % 2 === 0) {
    return false;
  } else if (number === 0) {
    return false;
  } 
  else if (number % 2 === 0) {
    return false;
  } else {
    return true;
  };
} 
*/

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true