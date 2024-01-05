// START
// SET function utf16Value(string)
//    SET index = 0;
//    SET currentValue = 0;
//    FOR loop; index ++ while <= string.length
//      currentValue += string.charCodeAt(iterator);
//    RETURN sum;

function utf16Value(string) {
  let index = 0;
  let currentValue = 0;

  while (index < string.length) {
    currentValue += string.charCodeAt(index);
    index += 1;
  }

  return currentValue;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811