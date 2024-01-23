// START

// given a non-empty string
//    get string.length
//      if odd, return charAt str[Math.floor(str.length / 2)]
//      if even, return charAt str[str.length / 2] + str[(str.length / 2) + 1]

function middleChar(string) {
  if (string.length % 2 === 1) {
    return string.charAt(Math.floor(string.length / 2));
  } else {
    return string.charAt((string.length / 2) - 1) + string.charAt(string.length / 2);
  }
}

console.log(middleChar('I Love JavaScript'));
console.log(middleChar('Launch School'));
console.log(middleChar('Launch'));
console.log(middleChar('Launchschool'));
console.log(middleChar('x'));