// SET function shortLongShort(str1, str2) with two strings as arguments
// SET longString; SET shortString;
// IF str1.length is greater than str2.length, SET longString = str1, 
// SETshortString = str2
//   ELSE SET longString = str2, shortString = str1
// PRINT shortString + longString + shortString

function shortLongShort(str1, str2) {
  let shortString;
  let longString;

  if (str1.length > str2.length) {
    longString = str1;
    shortString = str2;
  } else {
    longString = str2;
    shortString = str1;
  }

  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"